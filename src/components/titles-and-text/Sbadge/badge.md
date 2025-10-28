---
title: Badge
description: >-
  Inform users about the status of an object or indicate that an action has been
  completed.
api_name: app-home
source_url:
  html: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/titles-and-text/badge
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/titles-and-text/badge.md
---

# Badge

Inform users about the status of an object or indicate that an action has been completed.

## Properties

* color

  "base" | "strong"

  Default: 'base'

  Modify the color to be more or less intense.

* icon

  "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle"

  The type of icon to be displayed in the badge.

* size

  "base" | "large" | "large-100"

  Default: 'base'

  Adjusts the size.

* tone

  "info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution"

  Default: 'auto'

  Sets the tone of the Badge, based on the intention of the information being conveyed.

## Slots

* children

  HTMLElement

  The content of the Badge.

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-badge>Fulfilled</s-badge>
    <s-badge tone="info">Draft</s-badge>
    <s-badge tone="success">Active</s-badge>
    <s-badge tone="caution">Open</s-badge>
    <s-badge tone="warning">On hold</s-badge>
    <s-badge tone="critical">Action required</s-badge>
  </>
  ```

  ##### html

  ```html
  <s-badge>Fulfilled</s-badge>
  <s-badge tone="info">Draft</s-badge>
  <s-badge tone="success">Active</s-badge>
  <s-badge tone="caution">Open</s-badge>
  <s-badge tone="warning">On hold</s-badge>
  <s-badge tone="critical">Action required</s-badge>
  ```

## Examples

Component examples

### Basic usage

Order status badges

Demonstrates how different badge tones can visually represent various order fulfillment states, enabling merchants to quickly understand order progress at a glance.

Status indicators with icons

Showcases how badges can incorporate both tones and icons to provide contextual information across different merchant scenarios, such as product management, inventory tracking, and payment status.

Within table context

Illustrates how badges can be seamlessly integrated into table layouts to provide quick, visually distinct status indicators for individual table rows.

Different sizes for emphasis

Demonstrates the two available badge sizes for creating visual hierarchy.

### Examples

* #### Order status badges

  ##### Description

  Demonstrates how different badge tones can visually represent various order fulfillment states, enabling merchants to quickly understand order progress at a glance.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-badge tone="success">Fulfilled</s-badge>
    <s-badge tone="warning">Partially fulfilled</s-badge>
    <s-badge tone="neutral">Unfulfilled</s-badge>
    <s-badge tone="critical">Cancelled</s-badge>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-badge tone="success">Fulfilled</s-badge>
    <s-badge tone="warning">Partially fulfilled</s-badge>
    <s-badge tone="neutral">Unfulfilled</s-badge>
    <s-badge tone="critical">Cancelled</s-badge>
  </s-stack>
  ```

* #### Status indicators with icons

  ##### Description

  Showcases how badges can incorporate both tones and icons to provide contextual information across different merchant scenarios, such as product management, inventory tracking, and payment status.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    {/* Product status */}
    <s-stack direction="inline" gap="base">
      <s-badge tone="success" icon="view">
        Active
      </s-badge>
      <s-badge tone="warning" icon="clock">
        Scheduled
      </s-badge>
      <s-badge tone="critical">Archived</s-badge>
    </s-stack>

    {/* Inventory status */}
    <s-stack direction="inline" gap="base">
      <s-badge tone="success">In stock</s-badge>
      <s-badge tone="warning" icon="alert-triangle">
        Low stock
      </s-badge>
      <s-badge tone="critical">Out of stock</s-badge>
    </s-stack>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <!-- Product status -->
    <s-stack direction="inline" gap="base">
      <s-badge tone="success" icon="view">Active</s-badge>
      <s-badge tone="warning" icon="clock">Scheduled</s-badge>
      <s-badge tone="critical">Archived</s-badge>
    </s-stack>

    <!-- Inventory status -->
    <s-stack direction="inline" gap="base">
      <s-badge tone="success">In stock</s-badge>
      <s-badge tone="warning" icon="alert-triangle">Low stock</s-badge>
      <s-badge tone="critical">Out of stock</s-badge>
    </s-stack>
  </s-stack>
  ```

* #### Within table context

  ##### Description

  Illustrates how badges can be seamlessly integrated into table layouts to provide quick, visually distinct status indicators for individual table rows.

  ##### jsx

  ```jsx
  <s-table>
    <s-table-header-row>
      <s-table-header>Order</s-table-header>
      <s-table-header>Fulfillment</s-table-header>
      <s-table-header>Payment</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Fulfilled</s-badge>
        </s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Paid</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
  ```

  ##### html

  ```html
  <s-table>
    <s-table-header-row>
      <s-table-header>Order</s-table-header>
      <s-table-header>Fulfillment</s-table-header>
      <s-table-header>Payment</s-table-header>
    </s-table-header-row>
    <s-table-body>
      <s-table-row>
        <s-table-cell>#1001</s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Fulfilled</s-badge>
        </s-table-cell>
        <s-table-cell>
          <s-badge tone="success">Paid</s-badge>
        </s-table-cell>
      </s-table-row>
    </s-table-body>
  </s-table>
  ```

* #### Different sizes for emphasis

  ##### Description

  Demonstrates the two available badge sizes for creating visual hierarchy.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-badge size="base">New</s-badge>
    <s-badge size="large">Attention needed</s-badge>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-badge size="base">New</s-badge>
    <s-badge size="large">Attention needed</s-badge>
  </s-stack>
  ```
