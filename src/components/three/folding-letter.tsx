"use client";

import type { BaseComponentProps } from "@json-render/react";
import type { ThreeEvent } from "@react-three/fiber";
import { gsap } from "gsap";
import { useCallback, useEffect, useRef } from "react";
import type * as THREE from "three";
import type { FoldingLetterProps } from "./catalog";

const PANEL_WIDTH = 1.0;
const PANEL_HEIGHT = 1.3;
const FLAP_WIDTH = 0.92;
const OPEN_ROTATION = Math.PI * 0.98;

export function FoldingLetter({
  props,
  emit,
}: BaseComponentProps<FoldingLetterProps>) {
  const leftHingeRef = useRef<THREE.Group>(null);
  const rightHingeRef = useRef<THREE.Group>(null);
  const sealRef = useRef<THREE.Mesh>(null);

  const paperColor = props.paperColor ?? "#ece0cf";
  const sealColor = props.sealColor ?? "#b98fd1";

  useEffect(() => {
    if (!(leftHingeRef.current && rightHingeRef.current && sealRef.current)) {
      return;
    }

    gsap.to(leftHingeRef.current.rotation, {
      duration: 1.1,
      ease: "power2.inOut",
      y: props.open ? 0 : OPEN_ROTATION,
    });
    gsap.to(rightHingeRef.current.rotation, {
      duration: 1.1,
      ease: "power2.inOut",
      y: props.open ? 0 : -OPEN_ROTATION,
    });
    gsap.to(sealRef.current.scale, {
      duration: 0.4,
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
    <group onClick={handleClick}>
      <mesh>
        <planeGeometry args={[PANEL_WIDTH, PANEL_HEIGHT]} />
        <meshStandardMaterial
          color={paperColor}
          emissive={paperColor}
          emissiveIntensity={0.1}
          roughness={0.85}
        />
      </mesh>

      <group
        position={[-PANEL_WIDTH / 2, 0, 0.01]}
        ref={leftHingeRef}
        rotation={[0, OPEN_ROTATION, 0]}
      >
        <mesh position={[-FLAP_WIDTH / 2, 0, 0]}>
          <planeGeometry args={[FLAP_WIDTH, PANEL_HEIGHT]} />
          <meshStandardMaterial
            color={paperColor}
            emissive={paperColor}
            emissiveIntensity={0.1}
            roughness={0.85}
          />
        </mesh>
      </group>

      <group
        position={[PANEL_WIDTH / 2, 0, 0.01]}
        ref={rightHingeRef}
        rotation={[0, -OPEN_ROTATION, 0]}
      >
        <mesh position={[FLAP_WIDTH / 2, 0, 0]}>
          <planeGeometry args={[FLAP_WIDTH, PANEL_HEIGHT]} />
          <meshStandardMaterial
            color={paperColor}
            emissive={paperColor}
            emissiveIntensity={0.1}
            roughness={0.85}
          />
        </mesh>
      </group>

      <mesh position={[0, 0, 0.03]} ref={sealRef}>
        <circleGeometry args={[0.12, 24]} />
        <meshStandardMaterial
          color={sealColor}
          emissive={sealColor}
          emissiveIntensity={0.4}
          roughness={0.35}
        />
      </mesh>
    </group>
  );
}
