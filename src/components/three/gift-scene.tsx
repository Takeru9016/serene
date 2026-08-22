"use client";

import { ThreeCanvas } from "@json-render/react-three-fiber";
import { useCallback } from "react";
import { sceneRegistry } from "./registry";
import giftSpec from "./scenes/gift.json";

interface StateChange {
  path: string;
  value: unknown;
}

const OPEN_ANIMATION_MS = 1100;

export default function GiftScene({ onOpen }: { onOpen: () => void }) {
  const handleStateChange = useCallback(
    (changes: StateChange[]) => {
      const opened = changes.some(
        (change) => change.path === "/boxOpen" && change.value === true
      );
      if (opened) {
        setTimeout(onOpen, OPEN_ANIMATION_MS);
      }
    },
    [onOpen]
  );

  return (
    <ThreeCanvas
      camera={{ fov: 40, position: [0, 0.15, 3.4] }}
      onStateChange={handleStateChange}
      registry={sceneRegistry}
      spec={giftSpec}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
