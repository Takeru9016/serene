import { defineCatalog } from "@json-render/core";
import { schema } from "@json-render/react";
import { vector3Schema } from "@json-render/react-three-fiber";
import { threeComponentDefinitions } from "@json-render/react-three-fiber/catalog";
import { z } from "zod";

const envelopeProps = z.object({
  bodyColor: z.string().nullable(),
  flapColor: z.string().nullable(),
  open: z.boolean().nullable(),
  position: vector3Schema.nullable(),
  rotation: vector3Schema.nullable(),
  sealColor: z.string().nullable(),
});

const wishMotifProps = z.object({
  active: z.boolean().nullable(),
  colorPrimary: z.string().nullable(),
  colorSecondary: z.string().nullable(),
  kind: z.enum(["sprout", "moon", "hearts", "spark", "bloom"]).nullable(),
});

const foldingLetterProps = z.object({
  open: z.boolean().nullable(),
  paperColor: z.string().nullable(),
  sealColor: z.string().nullable(),
});

const ribbonBoxProps = z.object({
  boxColor: z.string().nullable(),
  open: z.boolean().nullable(),
  ribbonColor: z.string().nullable(),
});

const unfurlingScrollProps = z.object({
  paperColor: z.string().nullable(),
  rodColor: z.string().nullable(),
  text: z.string(),
  textColor: z.string().nullable(),
});

export const sceneCatalog = defineCatalog(schema, {
  actions: {},
  components: {
    AmbientLight: threeComponentDefinitions.AmbientLight,
    Envelope: {
      description:
        "Romantic paper envelope with a wax seal. Click to open — the flap " +
        "swings open and the seal breaks apart via an internal GSAP tween " +
        "driven by the `open` prop.",
      example: {
        bodyColor: "#241531",
        flapColor: "#2c1a3d",
        open: false,
        sealColor: "#E0C285",
      },
      props: envelopeProps,
    },
    FoldingLetter: {
      description:
        "A small folded paper packet with a wax seal. Click to open — " +
        "both side flaps hinge outward flat like an unfolding letter and " +
        "the seal shrinks away, via an internal GSAP tween driven by the " +
        "`open` prop.",
      example: {
        open: false,
        paperColor: "#ece0cf",
        sealColor: "#b98fd1",
      },
      props: foldingLetterProps,
    },
    Group: threeComponentDefinitions.Group,
    PointLight: threeComponentDefinitions.PointLight,
    RibbonBox: {
      description:
        "A wrapped gift box with a crossed ribbon and bow. Click to open — " +
        "the ribbon slides off, the bow shrinks away, and the lid hinges " +
        "open via an internal GSAP tween driven by the `open` prop.",
      example: {
        boxColor: "#241531",
        open: false,
        ribbonColor: "#b98fd1",
      },
      props: ribbonBoxProps,
    },
    Sphere: threeComponentDefinitions.Sphere,
    Spin: threeComponentDefinitions.Spin,
    UnfurlingScroll: {
      description:
        "A paper scroll between two rods that unrolls once on mount, " +
        "revealing the given text written on the paper itself via an " +
        "internal GSAP tween. No click, no bound state — plays once and " +
        "settles.",
      example: {
        paperColor: "#ece0cf",
        rodColor: "#e0c285",
        text: "a poem",
        textColor: "#241531",
      },
      props: unfurlingScrollProps,
    },
    WishMotif: {
      description:
        "A small cute/romantic motif for one wish card — sprout, moon, " +
        "hearts, spark, or bloom. Dormant until `active` flips true, then " +
        "blooms open via an internal GSAP tween and settles into a quiet " +
        "static keepsake pose (no continuous loop).",
      example: {
        active: false,
        colorPrimary: "#e0c285",
        colorSecondary: "#b98fd1",
        kind: "bloom",
      },
      props: wishMotifProps,
    },
  },
});

export type EnvelopeProps = z.infer<typeof envelopeProps>;
export type FoldingLetterProps = z.infer<typeof foldingLetterProps>;
export type RibbonBoxProps = z.infer<typeof ribbonBoxProps>;
export type UnfurlingScrollProps = z.infer<typeof unfurlingScrollProps>;
export type WishMotifProps = z.infer<typeof wishMotifProps>;
