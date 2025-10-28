# Polaris Vue

A Vue 3 component library that wraps [Shopify's Polaris Web Components](https://shopify.dev/docs/api/app-home/polaris-web-components) with TypeScript support.

## 🚀 Features

- ✅ **Type-safe**: Full TypeScript support with props and events
- ✅ **Auto-generated**: Components generated from official Polaris documentation
- ✅ **Vue 3**: Built with Vue 3 Composition API and `<script setup>`
- ✅ **Well-tested**: Vitest tests for all components
- ✅ **Modern**: Uses ESM, Vite, and Bun for fast development

## 📦 Installation

```bash
bun install
```

## 🎯 Usage

### Using Components

Import and use Polaris components in your Vue application:

```vue
<script setup lang="ts">
import SButton from "@/components/actions/SButton/index.vue";

const handleClick = () => {
  console.log("Button clicked!");
};
</script>

<template>
  <div>
    <!-- Basic button -->
    <SButton>Click me</SButton>

    <!-- Primary button with icon -->
    <SButton variant="primary" icon="plus" @click="handleClick">
      Add Product
    </SButton>

    <!-- Loading state -->
    <SButton :loading="true" variant="primary">Saving...</SButton>

    <!-- Critical action -->
    <SButton tone="critical" variant="primary">Delete</SButton>
  </div>
</template>
```

## 🤖 Component Generation

This project includes an AI-powered component generator that uses **Cursor's Background Agent API** to intelligently create Vue wrapper components from Polaris Web Components documentation.

### Setup

First, get your Cursor API key from the [Cursor Dashboard](https://cursor.com/settings) and set it:

```bash
export CURSOR_API_KEY='your-cursor-api-key-here'
```

### Generate All Components

```bash
bun run generate
```

This will:

1. Fetch the Polaris Web Components documentation from Shopify
2. Send each component spec to Cursor's AI agent
3. Agent intelligently parses and generates:
   - Vue 3 components with proper TypeScript types
   - Comprehensive Vitest test files
4. Save generated components and original documentation

### Why Cursor Agent API?

Instead of template-based generation, the AI agent:

- ✅ Intelligently parses documentation variations
- ✅ Infers proper TypeScript types from descriptions
- ✅ Adapts to changes in documentation format
- ✅ Generates better, context-aware tests
- ✅ Handles edge cases automatically

### Generated Structure

Components follow this structure:

```
src/components/
└── [category]/              # e.g., actions, media, forms
    └── S[ComponentName]/    # e.g., SButton, SAvatar
        ├── index.vue        # Vue wrapper component
        ├── [name].md        # Polaris documentation
        └── tests/
            └── S[ComponentName].test.ts  # Vitest tests
```

### Manual Component Creation

You can also manually create components following the same structure. See `src/components/actions/SButton/index.vue` for an example.

## 🧪 Testing

Run tests with Vitest:

```bash
# Run tests in watch mode
bun run test

# Run tests once
bun run test --run

# Run tests with UI
bun run test:ui
```

## 🛠️ Development

Start the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

Preview production build:

```bash
bun run preview
```

## 📚 Component Categories

Polaris Web Components are organized into categories:

- **Actions**: Buttons, links, and action-based components
- **Media**: Images, avatars, and media components
- **Forms**: Input fields, selects, checkboxes, etc.
- **Feedback**: Modals, toasts, banners
- **Navigation**: Navigation menus and breadcrumbs
- **Structure**: Layouts, cards, and containers

## 🎨 Component Naming Convention

All components follow the pattern `S[ComponentName]`:

- `SButton` - Button component
- `SAvatar` - Avatar component
- `STextField` - Text field component
- etc.

The `S` prefix stands for "Shopify" and helps distinguish Polaris components from other Vue components.

## 🔧 Configuration

### Custom Elements

The project is configured to treat all tags starting with `s-` as custom elements (Polaris Web Components). This is configured in:

- `vite.config.ts` - For development and build
- `vitest.config.ts` - For testing

### TypeScript

TypeScript configuration is split into:

- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application code
- `tsconfig.node.json` - Node.js code (configs, scripts)

## 📖 Documentation

Each component directory includes:

- **index.vue**: The Vue wrapper component
- **[name].md**: Original Polaris documentation from Shopify
- **tests/**: Test files

Refer to the markdown files or visit [Shopify's Polaris Web Components documentation](https://shopify.dev/docs/api/app-home/polaris-web-components) for detailed component specifications.

## 🤝 Contributing

1. Generate or create a new component
2. Write tests
3. Update documentation
4. Submit a pull request

## 📝 License

This project wraps Shopify's Polaris Web Components. Please refer to [Shopify's licensing terms](https://shopify.dev) for the underlying components.

## 🔮 Future Enhancements

- Integration with Cursor's Agent API for intelligent component updates
- Automatic component regeneration on documentation changes
- Component preview/playground
- Enhanced type inference for complex prop types
- Storybook integration

## 🙋 Questions?

Check out the [scripts/README.md](./scripts/README.md) for more information about the component generator.

For Polaris Web Components documentation, visit: https://shopify.dev/docs/api/app-home/polaris-web-components
