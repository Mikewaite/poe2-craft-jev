export type CraftAction =
  | { kind: "stop"; reason: string }
  | { kind: "useCurrency"; name: string };

export class DecisionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DecisionError";
  }
}
