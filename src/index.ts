import { exampleItemState } from "./crafting/item-state.js";
import { DecisionEngine } from "./decision/decision-engine.js";

function formatAction(action: ReturnType<DecisionEngine["recommend"]>): string {
  if (action.kind === "useCurrency") {
    return `Use currency: ${action.name}`;
  }
  return `Stop: ${action.reason}`;
}

function main(): void {
  const engine = new DecisionEngine();
  const item = exampleItemState();
  const action = engine.recommend(item);
  console.log(formatAction(action));
}

main();
