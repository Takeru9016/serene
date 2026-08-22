"use client";

import { ThreeCanvas } from "@json-render/react-three-fiber";
import { useEffect, useMemo } from "react";
import { poetry } from "@/lib/content";
import { sceneRegistry } from "./registry";

const OPEN_ANIMATION_MS = 2300;

export default function PoetryScene({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onOpen, OPEN_ANIMATION_MS);
    return () => clearTimeout(timer);
  }, [onOpen]);

  const spec = useMemo(
    () => ({
      elements: {
        ambient: {
          children: [],
          props: { intensity: 0.35 },
          type: "AmbientLight",
        },
        gold: {
          children: [],
          props: {
            color: "#e0c285",
            decay: 2,
            distance: 6,
            intensity: 3.5,
            position: [0, 1, 2],
          },
          type: "PointLight",
        },
        scene: {
          children: ["ambient", "gold", "scroll"],
          props: { position: [0, 0, 0] },
          type: "Group",
        },
        scroll: {
          children: [],
          props: { text: poetry.body },
          type: "UnfurlingScroll",
        },
      },
      root: "scene",
    }),
    []
  );

  return (
    <ThreeCanvas
      camera={{ fov: 40, position: [0, 0, 8] }}
      registry={sceneRegistry}
      spec={spec}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
