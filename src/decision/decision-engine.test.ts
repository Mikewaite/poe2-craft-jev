import { describe, expect, it } from "vitest";

import type { ItemState } from "../crafting/item-state.js";
import { DecisionEngine } from "./decision-engine.js";

describe("DecisionEngine", () => {
  it("suggests transmutation for normal items", () => {
    const engine = new DecisionEngine();
    const item: ItemState = {
      baseName: "Iron Ring",
      ilvl: 50,
      rarity: "normal",
    };

    expect(engine.recommend(item)).toEqual({
      kind: "useCurrency",
      name: "Orb of Transmutation",
    });
  });
});
