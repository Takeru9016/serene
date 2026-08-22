"use client";

import { ThreeCanvas } from "@json-render/react-three-fiber";
import { sceneRegistry } from "./registry";

const spec = {
  elements: {
    bloom: {
      children: [],
      props: {
        active: true,
        colorPrimary: "#e0c285",
        colorSecondary: "#d9a9e0",
        kind: "bloom",
      },
      type: "WishMotif",
    },
    bloomWrap: {
      children: ["bloom"],
      props: { scale: [1.7, 1.7, 1.7] },
      type: "Group",
    },
    globe: {
      children: [],
      props: {
        material: {
          color: "#f4ece0",
          emissive: "#e0c285",
          emissiveIntensity: 0.08,
          opacity: 0.3,
          roughness: 0.15,
          transparent: true,
        },
        radius: 0.5,
      },
      type: "Sphere",
    },
    scene: {
      children: ["spin"],
      props: {},
      type: "Group",
    },
    spin: {
      children: ["globe", "bloomWrap"],
      props: { axis: "z", speed: 0.5 },
      type: "Spin",
    },
  },
  root: "scene",
};

export function ReasonFlowerScene() {
  return (
    <ThreeCanvas
      camera={{ fov: 32, position: [0, 0, 2.2] }}
      registry={sceneRegistry}
      spec={spec}
      style={{ height: "100%", width: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight color="#e0c285" intensity={4} position={[1, 1.5, 2]} />
      <pointLight color="#b98fd1" intensity={2} position={[-1.5, -1, 1.5]} />
    </ThreeCanvas>
  );
}
