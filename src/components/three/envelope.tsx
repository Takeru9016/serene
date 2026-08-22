"use client";

import type { BaseComponentProps } from "@json-render/react";
import type { ThreeEvent } from "@react-three/fiber";
import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { EnvelopeProps } from "./catalog";

const BODY_WIDTH = 2.4;
const BODY_HEIGHT = 1.6;
const FLAP_DEPTH = 1;
const OPEN_ROTATION = -Math.PI * 0.72;

function useFlapShape() {
  return useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-BODY_WIDTH / 2, 0);
    shape.lineTo(BODY_WIDTH / 2, 0);
    shape.lineTo(0, -FLAP_DEPTH);
    shape.closePath();
    return shape;
  }, []);
}

export function Envelope({ props, emit }: BaseComponentProps<EnvelopeProps>) {
  const flapGroupRef = useRef<THREE.Group>(null);
  const sealRef = useRef<THREE.Group>(null);
  const flapShape = useFlapShape();

  useEffect(() => {
    if (!(flapGroupRef.current && sealRef.current)) {
      return;
    }

    gsap.to(flapGroupRef.current.rotation, {
      duration: 0.9,
      ease: "power2.inOut",
      x: props.open ? OPEN_ROTATION : 0,
    });

    gsap.to(sealRef.current.scale, {
      duration: 0.5,
      ease: "back.in(2)",
      x: props.open ? 0 : 1,
      y: props.open ? 0 : 1,
      z: props.open ? 0 : 1,
    });
  }, [props.open]);

  const handleClick = useCallback(
    (event: ThreeEvent<MouseEvent>) => {
      event.stopPropagation();
      emit("click");
    },
    [emit]
  );

  return (
    <group
      onClick={handleClick}
      position={props.position ?? [0, 0, 0]}
      rotation={props.rotation ?? [0, 0, 0]}
    >
      <mesh position={[0, -0.02, 0]}>
        <boxGeometry args={[BODY_WIDTH, BODY_HEIGHT, 0.06]} />
        <meshStandardMaterial
          color={props.bodyColor ?? "#241531"}
          roughness={0.85}
        />
      </mesh>

      <group position={[0, BODY_HEIGHT / 2, 0.03]} ref={flapGroupRef}>
        <mesh rotation={[0, Math.PI, 0]}>
          <extrudeGeometry
            args={[
              flapShape,
              { bevelEnabled: false, curveSegments: 1, depth: 0.02 },
            ]}
          />
          <meshStandardMaterial
            color={props.flapColor ?? "#2c1a3d"}
            roughness={0.85}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      <group position={[0, BODY_HEIGHT * 0.08, 0.09]} ref={sealRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.16, 0.035, 12, 24]} />
          <meshStandardMaterial
            color={props.sealColor ?? "#E0C285"}
            emissive={props.sealColor ?? "#E0C285"}
            emissiveIntensity={0.3}
            metalness={0.4}
            roughness={0.35}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.11, 20, 20]} />
          <meshStandardMaterial
            color={props.sealColor ?? "#E0C285"}
            emissive={props.sealColor ?? "#E0C285"}
            emissiveIntensity={0.5}
            metalness={0.4}
            roughness={0.3}
          />
        </mesh>
      </group>
    </group>
  );
}
