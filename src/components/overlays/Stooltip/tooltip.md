---
title: Tooltip
description: >-
  Displays helpful information in a small overlay when users hover or focus on
  an element. Use to provide additional context without cluttering the
  interface.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/tooltip
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/tooltip.md
---

# Tooltip

Displays helpful information in a small overlay when users hover or focus on an element. Use to provide additional context without cluttering the interface.

## Slots

* children

  HTMLElement

  The content of the Tooltip.

  Only accepts `Text`, `Paragraph` components, and raw `textContent`.

## Slots

* children

  HTMLElement

  The content of the Tooltip.

  Only accepts `Text`, `Paragraph` components, and raw `textContent`.

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-tooltip id="bold-tooltip">Bold</s-tooltip>
    <s-button interestFor="bold-tooltip" accessibilityLabel="Bold">
      B
    </s-button>
  </>
  ```

  ##### html

  ```html
  <s-tooltip id="bold-tooltip">Bold</s-tooltip>
  <s-button interestFor="bold-tooltip" accessibilityLabel="Bold">B</s-button>
  ```

## Examples

Component examples

### Basic usage

Basic Usage

Demonstrates a simple tooltip that provides additional context for a text element when hovered or focused.

With Icon Button

Shows how to add a tooltip to an icon button, providing a clear explanation of the button's action when hovered.

### Examples

* #### Basic Usage

  ##### Description

  Demonstrates a simple tooltip that provides additional context for a text element when hovered or focused.

  ##### jsx

  ```jsx
  <>
    <s-tooltip id="shipping-status-tooltip">
      <s-text>This order has shipping labels.</s-text>
    </s-tooltip>
    <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
  </>
  ```

  ##### html

  ```html
  <s-tooltip id="shipping-status-tooltip">
    <s-text>This order has shipping labels.</s-text>
  </s-tooltip>
  <s-text interestFor="shipping-status-tooltip">Shipping status</s-text>
  ```

* #### With Icon Button

  ##### Description

  Shows how to add a tooltip to an icon button, providing a clear explanation of the button's action when hovered.

  ##### jsx

  ```jsx
  <>
    <s-tooltip id="delete-button-tooltip">
      <s-text>Delete item permanently</s-text>
    </s-tooltip>
    <s-button interestFor="delete-button-tooltip">
      <s-icon tone="neutral" type="info" />
    </s-button>
  </>
  ```

  ##### html

  ```html
  <s-tooltip id="delete-button-tooltip">
    <s-text>Delete item permanently</s-text>
  </s-tooltip>
  <s-button interestFor="delete-button-tooltip">
    <s-icon tone="neutral" type="info"></s-icon>
  </s-button>
  ```
