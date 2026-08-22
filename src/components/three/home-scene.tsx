"use client";

import { ThreeCanvas } from "@json-render/react-three-fiber";
import { useCallback } from "react";
import { sceneRegistry } from "./registry";
import homeSpec from "./scenes/home.json";

interface StateChange {
  path: string;
  value: unknown;
}

const OPEN_ANIMATION_MS = 900;

export default function HomeScene({ onOpen }: { onOpen: () => void }) {
  const handleStateChange = useCallback(
    (changes: StateChange[]) => {
      const opened = changes.some(
        (change) => change.path === "/envelopeOpen" && change.value === true
      );
      if (opened) {
        setTimeout(onOpen, OPEN_ANIMATION_MS);
      }
    },
    [onOpen]
  );

  return (
    <ThreeCanvas
      camera={{ fov: 45, position: [0, 0, 4.2] }}
      onStateChange={handleStateChange}
      registry={sceneRegistry}
      spec={homeSpec}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
