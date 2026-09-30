export type ItemRarity = "magic" | "normal" | "rare";

export interface ItemState {
  baseName: string;
  ilvl: number;
  rarity: ItemRarity;
}

export function exampleItemState(): ItemState {
  return {
    baseName: "Iron Ring",
    ilvl: 82,
    rarity: "magic",
  };
}
