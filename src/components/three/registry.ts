import { defineRegistry } from "@json-render/react";
import { threeComponents } from "@json-render/react-three-fiber";
import { sceneCatalog } from "./catalog";
import { Envelope } from "./envelope";
import { FoldingLetter } from "./folding-letter";
import { RibbonBox } from "./ribbon-box";
import { UnfurlingScroll } from "./scroll";
import { WishMotif } from "./wish-motif";

export const { registry: sceneRegistry } = defineRegistry(sceneCatalog, {
  components: {
    AmbientLight: threeComponents.AmbientLight,
    Envelope,
    FoldingLetter,
    Group: threeComponents.Group,
    PointLight: threeComponents.PointLight,
    RibbonBox,
    Sphere: threeComponents.Sphere,
    Spin: threeComponents.Spin,
    UnfurlingScroll,
    WishMotif,
  },
});
