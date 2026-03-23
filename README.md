### @kicksdb/sdk

![NPM Version](https://img.shields.io/npm/v/%40kicksdb%2Fsdk)

**Type-safe, zero-dependency TypeScript SDK for KicksDB API v3.** Access real-time market data from 40+ platforms (StockX, GOAT, Flight Club, etc.) with a single, high-performance client.

## Features

- **Fully Typed:** Auto-generated via `@heyapi` for complete IDE intellisense.
- **Universal:** Works in Node.js, Browser, Bun, and Deno.
- **Minimalist:** Tree-shakable and lightweight footprint.
- **Unified Schema:** Standardized data from across the secondary market.

## Installation

```bash
npm install @kicksdb/sdk
```

## Quick Start

```js
import { configureClient, getStockxProducts } from "@kicksdb/sdk";

configureClient("KICKS-xxxx-xxxx-xxxx-xxxxxxxxxxxx");

const { data, error } = await getStockxProducts({
  query: {
    query: "Jordan 4 Retro",
    "display[variants]": true,
  },
});

data?.data?.forEach((p) => {
  console.log(`${p.title}: $${p.min_price}`);
});
```

## Documentation

Full endpoint reference and guides: [api.kicks.dev/docs](https://api.kicks.dev/docs)

## License

MIT © 2026 [KicksDB](https://kicks.dev)
