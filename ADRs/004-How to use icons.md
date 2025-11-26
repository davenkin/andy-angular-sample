# How to use icons

## Context

There are multiple ways to use icons, such as 3rd party icon libraries, or self customized SVG icons.

## Decision

We decided to use 2 approaches for icons:

1. (Preferred) Direct use of [PrimeNG icons](https://primeng.org/icons)
2. Use local SVG icons by adding SVG contents into `icon-registry.ts`

## Implementation

- For using PrimeNG icons, please refer to [PrimeNG icons](https://primeng.org/icons) documentation.
- For local SVG icons, first make sure your icons is registered into `icon-registry.ts`, then use `<app-icon icon="your-icon-name"></app-icon>`.
