"use client";

import type { BaseComponentProps } from "@json-render/react";
import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { WishMotifProps } from "./catalog";

function useHeartShape(size: number) {
  return useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, size * 0.3);
    shape.bezierCurveTo(
      0,
      size * 0.55,
      -size * 0.5,
      size * 0.55,
      -size * 0.5,
      size * 0.2
    );
    shape.bezierCurveTo(
      -size * 0.5,
      -size * 0.1,
      0,
      -size * 0.3,
      0,
      -size * 0.6
    );
    shape.bezierCurveTo(
      0,
      -size * 0.3,
      size * 0.5,
      -size * 0.1,
      size * 0.5,
      size * 0.2
    );
    shape.bezierCurveTo(size * 0.5, size * 0.55, 0, size * 0.55, 0, size * 0.3);
    return shape;
  }, [size]);
}

function SproutMotif({
  active,
  colorPrimary,
}: {
  active: boolean;
  colorPrimary: string;
}) {
  const leavesRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!leavesRef.current) {
      return;
    }
    gsap.to(leavesRef.current.scale, {
      duration: 0.7,
      ease: "back.out(2)",
      x: active ? 1 : 0.001,
      y: active ? 1 : 0.001,
      z: active ? 1 : 0.001,
    });
  }, [active]);

  return (
    <group>
      <mesh position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.012, 0.018, 0.22, 8]} />
        <meshStandardMaterial color="#b98fd1" roughness={0.7} />
      </mesh>
      <group position={[0, -0.02, 0]} ref={leavesRef} scale={0.001}>
        <mesh
          position={[-0.08, 0.02, 0]}
          rotation={[0, 0, 0.9]}
          scale={[1, 0.5, 1]}
        >
          <sphereGeometry args={[0.09, 12, 12]} />
          <meshStandardMaterial
            color={colorPrimary}
            emissive={colorPrimary}
            emissiveIntensity={0.25}
            roughness={0.5}
          />
        </mesh>
        <mesh
          position={[0.08, 0.02, 0]}
          rotation={[0, 0, -0.9]}
          scale={[1, 0.5, 1]}
        >
          <sphereGeometry args={[0.09, 12, 12]} />
          <meshStandardMaterial
            color={colorPrimary}
            emissive={colorPrimary}
            emissiveIntensity={0.25}
            roughness={0.5}
          />
        </mesh>
      </group>
    </group>
  );
}

function MoonMotif({
  active,
  colorPrimary,
}: {
  active: boolean;
  colorPrimary: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const bgColor = useMemo(() => {
    if (typeof window === "undefined") {
      return "#150c1c";
    }
    return (
      getComputedStyle(document.documentElement).getPropertyValue(
        "--color-bg"
      ) || "#150c1c"
    );
  }, []);

  useEffect(() => {
    if (!groupRef.current) {
      return;
    }
    gsap.to(groupRef.current.scale, {
      duration: 0.7,
      ease: "back.out(2)",
      x: active ? 1 : 0.001,
      y: active ? 1 : 0.001,
      z: active ? 1 : 0.001,
    });
  }, [active]);

  return (
    <group ref={groupRef} scale={0.001}>
      <mesh>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial
          color={colorPrimary}
          emissive={colorPrimary}
          emissiveIntensity={0.35}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0.08, 0, 0.08]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshBasicMaterial color={bgColor} />
      </mesh>
    </group>
  );
}

function HeartsMotif({
  active,
  colorPrimary,
  colorSecondary,
}: {
  active: boolean;
  colorPrimary: string;
  colorSecondary: string;
}) {
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);
  const heartShape = useHeartShape(0.16);

  useEffect(() => {
    if (!(leftRef.current && rightRef.current)) {
      return;
    }
    gsap.to(leftRef.current.position, {
      duration: 0.8,
      ease: "power2.out",
      x: active ? -0.05 : -0.22,
    });
    gsap.to(rightRef.current.position, {
      duration: 0.8,
      ease: "power2.out",
      x: active ? 0.05 : 0.22,
    });
    gsap.to([leftRef.current.scale, rightRef.current.scale], {
      duration: 0.6,
      ease: "back.out(2)",
      x: active ? 1 : 0.001,
      y: active ? 1 : 0.001,
      z: active ? 1 : 0.001,
    });
  }, [active]);

  return (
    <group>
      <mesh position={[-0.22, 0, 0]} ref={leftRef} scale={0.001}>
        <extrudeGeometry
          args={[
            heartShape,
            { bevelEnabled: false, curveSegments: 8, depth: 0.03 },
          ]}
        />
        <meshStandardMaterial
          color={colorSecondary}
          emissive={colorSecondary}
          emissiveIntensity={0.35}
          roughness={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0.22, 0, 0]} ref={rightRef} scale={0.001}>
        <extrudeGeometry
          args={[
            heartShape,
            { bevelEnabled: false, curveSegments: 8, depth: 0.03 },
          ]}
        />
        <meshStandardMaterial
          color={colorPrimary}
          emissive={colorPrimary}
          emissiveIntensity={0.35}
          roughness={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function SparkMotif({
  active,
  colorPrimary,
}: {
  active: boolean;
  colorPrimary: string;
}) {
  const sparkRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!sparkRef.current) {
      return;
    }
    gsap.to(sparkRef.current.scale, {
      duration: 0.5,
      ease: "back.out(2)",
      x: active ? 1 : 0.001,
      y: active ? 1 : 0.001,
      z: active ? 1 : 0.001,
    });
  }, [active]);

  return (
    <mesh ref={sparkRef} scale={0.001}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial
        color={colorPrimary}
        emissive={colorPrimary}
        emissiveIntensity={0.6}
        roughness={0.3}
      />
    </mesh>
  );
}

function BloomMotif({
  active,
  colorPrimary,
  colorSecondary,
}: {
  active: boolean;
  colorPrimary: string;
  colorSecondary: string;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const petalCount = 5;

  useEffect(() => {
    if (!groupRef.current) {
      return;
    }
    gsap.to(groupRef.current.scale, {
      duration: 0.9,
      ease: "back.out(1.8)",
      x: active ? 1 : 0.001,
      y: active ? 1 : 0.001,
      z: active ? 1 : 0.001,
    });
  }, [active]);

  return (
    <group ref={groupRef} scale={0.001}>
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color={colorPrimary}
          emissive={colorPrimary}
          emissiveIntensity={0.4}
        />
      </mesh>
      {Array.from({ length: petalCount }, (_, index) => {
        const angle = (index / petalCount) * Math.PI * 2;
        return (
          <mesh
            key={angle}
            position={[Math.cos(angle) * 0.1, Math.sin(angle) * 0.1, 0]}
            rotation={[0, 0, angle - Math.PI / 2]}
          >
            <torusGeometry args={[0.055, 0.02, 8, 16, Math.PI]} />
            <meshStandardMaterial
              color={colorSecondary}
              emissive={colorSecondary}
              emissiveIntensity={0.3}
              roughness={0.4}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export function WishMotif({ props }: BaseComponentProps<WishMotifProps>) {
  const active = Boolean(props.active);
  const colorPrimary = props.colorPrimary ?? "#e0c285";
  const colorSecondary = props.colorSecondary ?? "#b98fd1";

  switch (props.kind) {
    case "sprout":
      return <SproutMotif active={active} colorPrimary={colorPrimary} />;
    case "moon":
      return <MoonMotif active={active} colorPrimary={colorPrimary} />;
    case "hearts":
      return (
        <HeartsMotif
          active={active}
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
        />
      );
    case "spark":
      return <SparkMotif active={active} colorPrimary={colorPrimary} />;
    default:
      return (
        <BloomMotif
          active={active}
          colorPrimary={colorPrimary}
          colorSecondary={colorSecondary}
        />
      );
  }
}
