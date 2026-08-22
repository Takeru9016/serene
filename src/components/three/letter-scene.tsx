"use client";

import { ThreeCanvas } from "@json-render/react-three-fiber";
import { useCallback } from "react";
import { sceneRegistry } from "./registry";
import letterSpec from "./scenes/letter.json";

interface StateChange {
  path: string;
  value: unknown;
}

const OPEN_ANIMATION_MS = 1300;

export default function LetterScene({ onOpen }: { onOpen: () => void }) {
  const handleStateChange = useCallback(
    (changes: StateChange[]) => {
      const opened = changes.some(
        (change) => change.path === "/letterOpen" && change.value === true
      );
      if (opened) {
        setTimeout(onOpen, OPEN_ANIMATION_MS);
      }
    },
    [onOpen]
  );

  return (
    <ThreeCanvas
      camera={{ fov: 42, position: [0, 0, 2.6] }}
      onStateChange={handleStateChange}
      registry={sceneRegistry}
      spec={letterSpec}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
