"use client";

import { createStateStore } from "@json-render/core";
import { ThreeCanvas } from "@json-render/react-three-fiber";
import { useEffect, useMemo } from "react";
import { sceneRegistry } from "./registry";

const KIND_COLORS: Record<
  string,
  { colorPrimary: string; colorSecondary: string }
> = {
  bloom: { colorPrimary: "#e0c285", colorSecondary: "#d9a9e0" },
  hearts: { colorPrimary: "#d9a9e0", colorSecondary: "#b98fd1" },
  moon: { colorPrimary: "#e0c285", colorSecondary: "#e0c285" },
  spark: { colorPrimary: "#e0c285", colorSecondary: "#e0c285" },
  sprout: { colorPrimary: "#e0c285", colorSecondary: "#e0c285" },
};

export function WishCardScene({
  active,
  kind,
}: {
  active: boolean;
  kind: "sprout" | "moon" | "hearts" | "spark" | "bloom";
}) {
  const store = useMemo(() => createStateStore({ active: false }), []);

  useEffect(() => {
    store.set("/active", active);
  }, [active, store]);

  const spec = useMemo(() => {
    const colors = KIND_COLORS[kind];
    return {
      elements: {
        light: {
          children: [],
          props: { color: "#e0c285", intensity: 3 },
          type: "PointLight",
        },
        motif: {
          children: [],
          props: {
            active: { $bindState: "/active" },
            colorPrimary: colors.colorPrimary,
            colorSecondary: colors.colorSecondary,
            kind,
          },
          type: "WishMotif",
        },
        scene: {
          children: ["light", "motif"],
          props: {},
          type: "Group",
        },
      },
      root: "scene",
    };
  }, [kind]);

  return (
    <ThreeCanvas
      camera={{ fov: 35, position: [0, 0, 1.6] }}
      registry={sceneRegistry}
      spec={spec}
      store={store}
      style={{ height: "100%", width: "100%" }}
    >
      <ambientLight intensity={0.5} />
    </ThreeCanvas>
  );
}
