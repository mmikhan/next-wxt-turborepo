# @workspace/tailwind-config

Shared raw Tailwind stylesheet (not precompiled). Consumer apps compile it with their own Tailwind pipeline.

## What is exported
- `style.css` containing `@tailwind` directives and any shared layer/customizations.
- No JS runtime code.

## Usage in a consumer app (e.g. Next.js)
Ensure the app has Tailwind + PostCSS configured. Then import the package BEFORE other global/component styles:

Global CSS (preferred):
```css
@import "@workspace/tailwind-config";
```

Or in a TS/JS entry (if the bundler handles CSS imports):
```ts
import "@workspace/tailwind-config";
```

The app’s build expands the `@tailwind` directives found inside `style.css`.

## Why this pattern
- Single source of shared design tokens / layers.
- Each app controls its own purge/content scanning.
- No need to publish compiled output or duplicate build artifacts.

## Updating shared styles
Edit `style.css` here. Consumer apps pick up changes on next build/restart.
