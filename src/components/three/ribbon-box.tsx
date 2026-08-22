"use client";

import type { BaseComponentProps } from "@json-render/react";
import type { ThreeEvent } from "@react-three/fiber";
import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { RibbonBoxProps } from "./catalog";

const BOX_WIDTH = 1.6;
const BOX_HEIGHT = 1;
const BOX_DEPTH = 1.1;
const LID_OPEN_ROTATION = -Math.PI * 0.62;
const RIBBON_Y = BOX_HEIGHT * 0.32;

function lighten(hex: string, amount: number) {
  return new THREE.Color(hex)
    .lerp(new THREE.Color("#ffffff"), amount)
    .getStyle();
}

export function RibbonBox({ props, emit }: BaseComponentProps<RibbonBoxProps>) {
  const lidGroupRef = useRef<THREE.Group>(null);
  const ribbonXRef = useRef<THREE.Mesh>(null);
  const ribbonZRef = useRef<THREE.Mesh>(null);
  const bowRef = useRef<THREE.Group>(null);

  const boxColor = useMemo(
    () => lighten(props.boxColor ?? "#241531", 0.22),
    [props.boxColor]
  );
  const ribbonColor = props.ribbonColor ?? "#e0c285";

  useEffect(() => {
    if (
      !(
        lidGroupRef.current &&
        ribbonXRef.current &&
        ribbonZRef.current &&
        bowRef.current
      )
    ) {
      return;
    }

    const ribbonXMaterial = ribbonXRef.current
      .material as THREE.MeshStandardMaterial;
    const ribbonZMaterial = ribbonZRef.current
      .material as THREE.MeshStandardMaterial;

    gsap.to(bowRef.current.scale, {
      duration: 0.4,
      ease: "back.in(2)",
      x: props.open ? 0 : 1,
      y: props.open ? 0 : 1,
      z: props.open ? 0 : 1,
    });

    gsap.to(ribbonXRef.current.position, {
      duration: 0.5,
      ease: "power2.in",
      y: props.open ? -1.2 : RIBBON_Y,
    });
    gsap.to(ribbonZRef.current.position, {
      duration: 0.5,
      ease: "power2.in",
      y: props.open ? -1.2 : RIBBON_Y,
    });
    gsap.to([ribbonXMaterial, ribbonZMaterial], {
      duration: 0.4,
      opacity: props.open ? 0 : 1,
    });

    gsap.to(lidGroupRef.current.rotation, {
      delay: props.open ? 0.35 : 0,
      duration: 0.7,
      ease: "power2.inOut",
      x: props.open ? LID_OPEN_ROTATION : 0,
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
      <mesh position={[0, -BOX_HEIGHT * 0.15, 0]}>
        <boxGeometry args={[BOX_WIDTH, BOX_HEIGHT * 0.7, BOX_DEPTH]} />
        <meshStandardMaterial color={boxColor} roughness={0.75} />
      </mesh>

      <group position={[0, BOX_HEIGHT * 0.2, -BOX_DEPTH / 2]} ref={lidGroupRef}>
        <mesh position={[0, 0, BOX_DEPTH / 2]}>
          <boxGeometry
            args={[BOX_WIDTH * 1.04, BOX_HEIGHT * 0.22, BOX_DEPTH * 1.04]}
          />
          <meshStandardMaterial color={boxColor} roughness={0.7} />
        </mesh>
      </group>

      <mesh position={[0, RIBBON_Y, 0]} ref={ribbonXRef}>
        <boxGeometry args={[BOX_WIDTH * 1.06, 0.08, 0.14]} />
        <meshStandardMaterial
          color={ribbonColor}
          emissive={ribbonColor}
          emissiveIntensity={0.35}
          roughness={0.4}
          transparent
        />
      </mesh>
      <mesh
        position={[0, RIBBON_Y, 0]}
        ref={ribbonZRef}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[BOX_DEPTH * 1.06, 0.08, 0.14]} />
        <meshStandardMaterial
          color={ribbonColor}
          emissive={ribbonColor}
          emissiveIntensity={0.35}
          roughness={0.4}
          transparent
        />
      </mesh>

      <group position={[0, RIBBON_Y + 0.1, 0]} ref={bowRef}>
        <mesh position={[-0.14, 0, 0]} rotation={[0, 0, 0.5]}>
          <torusGeometry args={[0.14, 0.035, 10, 20]} />
          <meshStandardMaterial
            color={ribbonColor}
            emissive={ribbonColor}
            emissiveIntensity={0.4}
            roughness={0.35}
          />
        </mesh>
        <mesh position={[0.14, 0, 0]} rotation={[0, 0, -0.5]}>
          <torusGeometry args={[0.14, 0.035, 10, 20]} />
          <meshStandardMaterial
            color={ribbonColor}
            emissive={ribbonColor}
            emissiveIntensity={0.4}
            roughness={0.35}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial
            color={ribbonColor}
            emissive={ribbonColor}
            emissiveIntensity={0.5}
            roughness={0.3}
          />
        </mesh>
      </group>
    </group>
  );
}
