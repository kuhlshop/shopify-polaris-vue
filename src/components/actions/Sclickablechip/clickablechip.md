---
title: ClickableChip
description: >-
  Interactive button used to categorize or highlight content attributes. They
  are often displayed near the content they classify, enhancing discoverability
  by allowing users to identify items with similar properties.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickablechip
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/clickablechip.md
---

# Clickable​Chip

Interactive button used to categorize or highlight content attributes. They are often displayed near the content they classify, enhancing discoverability by allowing users to identify items with similar properties.

## Properties

* accessibilityLabel

  string

  A label that describes the purpose or contents of the Chip. It will be read to users using assistive technologies such as screen readers.

* color

  ColorKeyword

  Default: 'base'

  Modify the color to be more or less intense.

* disabled

  boolean

  Default: false

  Disables the chip, disallowing any interaction.

* hidden

  boolean

  Default: false

  Determines whether the chip is hidden.

  If this property is being set on each framework render (as in 'controlled' usage), and the chip is `removable`, ensure you update app state for this property when the `remove` event fires.

  If the chip is not `removable`, it can still be hidden by setting this property.

* href

  string

  The URL to link to.

  * If set, it will navigate to the location specified by `href` after executing the `click` event.

* removable

  boolean

  Default: false

  Whether the chip is removable.

### ColorKeyword

```ts
'subdued' | 'base' | 'strong'
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* afterhide

  CallbackEventListener\<typeof tagName> | null

* click

  CallbackEventListener\<typeof tagName> | null

* remove

  CallbackEventListener\<typeof tagName> | null

### CallbackEventListener

```ts
(EventListener & {
      (event: CallbackEvent<T>): void;
    }) | null
```

### CallbackEvent

```ts
Event & {
  currentTarget: HTMLElementTagNameMap[T];
}
```

## Slots

* children

  HTMLElement

  The content of the clickable chip.

* graphic

  HTMLElement

  The graphic to display in the clickable chip.

  Only accepts `Icon` components.

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-clickable-chip>Clickable chip</s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip>Clickable chip</s-clickable-chip>
  ```

## Examples

Component examples

### Basic usage

Basic Usage

Demonstrates a simple clickable chip with a base color and interactive functionality.

With Icon and Remove Button

Showcases a strong-colored clickable chip with a check circle icon and a removable state.

As a Link

Demonstrates a subdued clickable chip configured as a link with a product icon.

Disabled State

Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.

Multiple Chips with Proper Spacing

Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.

### Examples

* #### Basic Usage

  ##### Description

  Demonstrates a simple clickable chip with a base color and interactive functionality.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="subdued"
      accessibilityLabel="Filter by draft products"
    >
      Draft
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Filter by archived products"
    >
      Archived
    </s-clickable-chip>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-clickable-chip color="base" accessibilityLabel="Filter by active products">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="subdued"
      accessibilityLabel="Filter by draft products"
    >
      Draft
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Filter by archived products"
    >
      Archived
    </s-clickable-chip>
  </s-stack>
  ```

* #### With Icon and Remove Button

  ##### Description

  Showcases a strong-colored clickable chip with a check circle icon and a removable state.

  ##### jsx

  ```jsx
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle" />
    In progress
  </s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip
    color="strong"
    accessibilityLabel="Remove status filter"
    removable
  >
    <s-icon slot="graphic" type="check-circle"></s-icon>
    In progress
  </s-clickable-chip>
  ```

* #### As a Link

  ##### Description

  Demonstrates a subdued clickable chip configured as a link with a product icon.

  ##### jsx

  ```jsx
  <s-clickable-chip
    color="subdued"
    href="javascript:void(0)"
    accessibilityLabel="View T-shirt product"
  >
    <s-icon slot="graphic" type="product" />
    T-shirt
  </s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip
    color="subdued"
    href="javascript:void(0)"
    accessibilityLabel="View T-shirt product"
  >
    <s-icon slot="graphic" type="product"></s-icon>
    T-shirt
  </s-clickable-chip>
  ```

* #### Disabled State

  ##### Description

  Illustrates a clickable chip in a disabled state, preventing interaction while displaying an inactive status.

  ##### jsx

  ```jsx
  <s-clickable-chip
    color="base"
    disabled
    accessibilityLabel="Status filter (disabled)"
  >
    Inactive
  </s-clickable-chip>
  ```

  ##### html

  ```html
  <s-clickable-chip
    color="base"
    disabled
    accessibilityLabel="Status filter (disabled)"
  >
    Inactive
  </s-clickable-chip>
  ```

* #### Multiple Chips with Proper Spacing

  ##### Description

  Demonstrates how multiple clickable chips with different colors, icons, and states can be arranged using an inline stack for consistent layout and spacing.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-clickable-chip accessibilityLabel="Filter by status">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Remove status filter"
      removable
    >
      <s-icon slot="graphic" type="check-circle" />
      In progress
    </s-clickable-chip>
    <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
      <s-icon slot="graphic" type="filter" />
      Category
    </s-clickable-chip>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-clickable-chip accessibilityLabel="Filter by status">
      Active
    </s-clickable-chip>
    <s-clickable-chip
      color="strong"
      accessibilityLabel="Remove status filter"
      removable
    >
      <s-icon slot="graphic" type="check-circle"></s-icon>
      In progress
    </s-clickable-chip>
    <s-clickable-chip color="subdued" accessibilityLabel="Filter by category">
      <s-icon slot="graphic" type="filter"></s-icon>
      Category
    </s-clickable-chip>
  </s-stack>
  ```
