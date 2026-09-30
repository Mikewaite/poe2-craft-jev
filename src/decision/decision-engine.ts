import type { ItemState } from "../crafting/item-state.js";
import { type CraftAction, DecisionError } from "./craft-action.js";

export class DecisionEngine {
  recommend(item: ItemState): CraftAction {
    switch (item.rarity) {
      case "normal":
        return { kind: "useCurrency", name: "Orb of Transmutation" };
      case "magic":
        return {
          kind: "stop",
          reason:
            "JEV policy not configured yet — add weights and outcomes",
        };
      case "rare":
        return {
          kind: "stop",
          reason: "Rare item handling not implemented",
        };
      default: {
        const _exhaustive: never = item.rarity;
        throw new DecisionError(`Unknown rarity: ${_exhaustive}`);
      }
    }
  }
}
