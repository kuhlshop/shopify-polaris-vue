---
title: Icon
description: >-
  Renders a graphic symbol to visually communicate core parts of the product and
  available actions. Icons can act as wayfinding tools to help users quickly
  understand their location within the interface and common interaction
  patterns.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/media/icon'
  md: 'https://shopify.dev/docs/api/app-home/polaris-web-components/media/icon.md'
---

# Icon

Renders a graphic symbol to visually communicate core parts of the product and available actions. Icons can act as wayfinding tools to help users quickly understand their location within the interface and common interaction patterns.

## Properties

* color

  "base" | "subdued"

  Default: 'base'

  Modify the color to be more or less intense.

* interestFor

  string

  ID of a component that should respond to interest (e.g. hover and focus) on this component.

* size

  "small" | "base"

  Default: 'base'

  Adjusts the size of the icon.

* tone

  "info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution"

  Default: 'auto'

  Sets the tone of the icon, based on the intention of the information being conveyed.

* type

  "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle"

  Specifies the type of icon that will be displayed.

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-icon type="home" />
    <s-icon type="order" />
    <s-icon type="product" />
    <s-icon type="settings" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-icon type="home"></s-icon>
    <s-icon type="order"></s-icon>
    <s-icon type="product"></s-icon>
    <s-icon type="settings"></s-icon>
  </s-stack>
  ```

## Examples

Component examples

### Basic usage

Basic usage

Standard icons for common merchant interface actions and navigation. Demonstrates rendering multiple icons in an inline stack, showing different types of icons used for navigation and actions.

With semantic tone

Icons with color-coded tones to convey status and semantic meaning.

Small size

Compact icon sizing for space-constrained interfaces and inline usage. Shows how to render a small-sized icon that takes up minimal space while maintaining clarity.

Subdued color

Lower contrast icon for secondary actions and supporting information.

With id property

Icon with unique identifier for JavaScript targeting and styling. Demonstrates adding a specific ID to an icon, which can be used for JavaScript interactions, CSS styling, or accessibility purposes.

With interest relationship

Icon associated with interactive elements for enhanced accessibility context.

In button components

Icons integrated within button components for clear action identification. Shows how icons can be added to buttons to visually reinforce the button's action, using both positive (add) and negative (delete) tones.

In badge components

Icons combined with badges to enhance status communication and visual hierarchy. Demonstrates using icons with badges to provide visual status indicators, using success and warning tones to convey different states.

### Examples

* #### Basic usage

  ##### Description

  Standard icons for common merchant interface actions and navigation. Demonstrates rendering multiple icons in an inline stack, showing different types of icons used for navigation and actions.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-icon type="home" />
    <s-icon type="edit" />
    <s-icon type="duplicate" />
    <s-icon type="save" />
    <s-icon type="export" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-icon type="home"></s-icon>
    <s-icon type="edit"></s-icon>
    <s-icon type="duplicate"></s-icon>
    <s-icon type="save"></s-icon>
    <s-icon type="export"></s-icon>
  </s-stack>
  ```

* #### With semantic tone

  ##### Description

  Icons with color-coded tones to convey status and semantic meaning.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-icon type="alert-circle" tone="warning" />
    <s-icon type="check-circle" tone="success" />
    <s-icon type="info" tone="info" />
    <s-icon type="alert-triangle" tone="caution" />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-icon type="alert-circle" tone="warning"></s-icon>
    <s-icon type="check-circle" tone="success"></s-icon>
    <s-icon type="info" tone="info"></s-icon>
    <s-icon type="alert-triangle" tone="caution"></s-icon>
  </s-stack>
  ```

* #### Small size

  ##### Description

  Compact icon sizing for space-constrained interfaces and inline usage. Shows how to render a small-sized icon that takes up minimal space while maintaining clarity.

  ##### jsx

  ```jsx
  <s-icon type="search" size="small" />
  ```

  ##### html

  ```html
  <s-icon type="search" size="small"></s-icon>
  ```

* #### Subdued color

  ##### Description

  Lower contrast icon for secondary actions and supporting information.

  ##### jsx

  ```jsx
  <s-icon type="question-circle" color="subdued" />
  ```

  ##### html

  ```html
  <s-icon type="question-circle" color="subdued"></s-icon>
  ```

* #### With id property

  ##### Description

  Icon with unique identifier for JavaScript targeting and styling. Demonstrates adding a specific ID to an icon, which can be used for JavaScript interactions, CSS styling, or accessibility purposes.

  ##### jsx

  ```jsx
  <s-icon type="settings" id="settings-icon" />
  ```

  ##### html

  ```html
  <s-icon type="settings" id="settings-icon"></s-icon>
  ```

* #### With interest relationship

  ##### Description

  Icon associated with interactive elements for enhanced accessibility context.

  ##### jsx

  ```jsx
  <>
    <s-tooltip id="info-tooltip">
      SKU must be unique across all products and cannot be changed after creation
    </s-tooltip>
    <s-icon type="info" tone="info" interestFor="info-tooltip" />
  </>
  ```

  ##### html

  ```html
  <s-tooltip id="info-tooltip">
    SKU must be unique across all products and cannot be changed after creation
  </s-tooltip>
  <s-icon type="info" tone="info" interestFor="info-tooltip" />
  ```

* #### In button components

  ##### Description

  Icons integrated within button components for clear action identification. Shows how icons can be added to buttons to visually reinforce the button's action, using both positive (add) and negative (delete) tones.

  ##### jsx

  ```jsx
  <s-button-group>
    <s-button slot="secondary-actions" icon="plus">
      Add product
    </s-button>
    <s-button slot="secondary-actions" icon="delete" tone="critical">
      Delete
    </s-button>
  </s-button-group>
  ```

  ##### html

  ```html
  <s-button-group>
    <s-button slot="secondary-actions" icon="plus">Add product</s-button>
    <s-button slot="secondary-actions" icon="delete" tone="critical">
      Delete
    </s-button>
  </s-button-group>
  ```

* #### In badge components

  ##### Description

  Icons combined with badges to enhance status communication and visual hierarchy. Demonstrates using icons with badges to provide visual status indicators, using success and warning tones to convey different states.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-badge tone="success" icon="check-circle">
      Active
    </s-badge>
    <s-badge tone="warning" icon="alert-triangle">
      Pending
    </s-badge>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-badge tone="success" icon="check-circle">Active</s-badge>
    <s-badge tone="warning" icon="alert-triangle">Pending</s-badge>
  </s-stack>
  ```
