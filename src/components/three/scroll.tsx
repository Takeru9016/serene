"use client";

import type { BaseComponentProps } from "@json-render/react";
import { Html } from "@react-three/drei";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";
import type { UnfurlingScrollProps } from "./catalog";

const PAPER_WIDTH = 2.2;
const PAPER_HEIGHT = 5.0;
const ROD_RADIUS = 0.09;
const ROD_LENGTH = PAPER_WIDTH * 1.3;
const FINIAL_RADIUS = 0.14;
const UNROLL_DURATION = 1.7;
const TEXT_DELAY_MS = 1300;

function Rod({ y, color }: { y: number; color: string }) {
  return (
    <group position={[0, y, 0.03]} rotation={[0, 0, Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[ROD_RADIUS, ROD_RADIUS, ROD_LENGTH, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, ROD_LENGTH / 2, 0]}>
        <sphereGeometry args={[FINIAL_RADIUS, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, -ROD_LENGTH / 2, 0]}>
        <sphereGeometry args={[FINIAL_RADIUS, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

export function UnfurlingScroll({
  props,
}: BaseComponentProps<UnfurlingScrollProps>) {
  const paperRef = useRef<THREE.Mesh>(null);
  const [showText, setShowText] = useState(false);

  const paperColor = props.paperColor ?? "#ece0cf";
  const rodColor = props.rodColor ?? "#e0c285";
  const textColor = props.textColor ?? "#241531";

  useEffect(() => {
    if (!paperRef.current) {
      return;
    }
    gsap.fromTo(
      paperRef.current.scale,
      { y: 0.03 },
      { duration: UNROLL_DURATION, ease: "power2.inOut", y: 1 }
    );
    const timer = setTimeout(() => setShowText(true), TEXT_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <group>
      <Rod color={rodColor} y={PAPER_HEIGHT / 2} />
      <Rod color={rodColor} y={-PAPER_HEIGHT / 2} />

      <mesh ref={paperRef}>
        <planeGeometry args={[PAPER_WIDTH, PAPER_HEIGHT]} />
        <meshStandardMaterial
          color={paperColor}
          emissive={paperColor}
          emissiveIntensity={0.12}
          roughness={0.85}
        />
      </mesh>

      <Html center occlude={false} position={[0, 0, 0.04]}>
        <div
          style={{
            color: textColor,
            fontFamily: "var(--font-sans, sans-serif)",
            fontSize: "15px",
            fontStyle: "italic",
            lineHeight: 1.65,
            opacity: showText ? 1 : 0,
            padding: "0 8px",
            textAlign: "center",
            transition: "opacity 0.6s ease",
            whiteSpace: "pre-line",
            width: "220px",
          }}
        >
          {props.text}
        </div>
      </Html>
    </group>
  );
}
