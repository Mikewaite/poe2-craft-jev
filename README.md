# poe2-craft-jev

Experimental **Path of Exile 2** crafting assistant in **TypeScript**, with a **JEV** (joint expected value) layer for choosing the next crafting step.

**GitHub:** [Mikewaite/poe2-craft-jev](https://github.com/Mikewaite/poe2-craft-jev)

## Status

Early scaffold: item types, a stub decision engine, and room to plug in real mods, currency costs, and outcome probabilities.

## Requirements

- Node.js 18+

## Scripts

```bash
npm install
npm run dev      # run entry with tsx
npm run build    # compile to dist/
npm test         # vitest
npm run typecheck
```

## Layout

- `src/crafting/` — item and crafting state
- `src/decision/` — JEV / policy logic for the next action

## License

MIT
