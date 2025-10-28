---
title: Select
description: >-
  Allow users to pick one option from a menu. Ideal when presenting four or more
  choices to keep interfaces uncluttered.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/select'
  md: 'https://shopify.dev/docs/api/app-home/polaris-web-components/forms/select.md'
---

# Select

Allow users to pick one option from a menu. Ideal when presenting four or more choices to keep interfaces uncluttered.

## Properties

* details

  string

  Additional text to provide context or guidance for the field. This text is displayed along with the field and its label to offer more information or instructions to the user.

  This will also be exposed to screen reader users.

* disabled

  boolean

  Default: false

  Disables the field, disallowing any interaction.

* disconnectedCallback

  () => void

* error

  string

  Indicate an error to the user. The field will be given a specific stylistic treatment to communicate problems that have to be resolved immediately.

* icon

  "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle"

  The type of icon to be displayed in the field.

* id

  string

  A unique identifier for the element.

* label

  string

  Content to use as the field label.

* labelAccessibilityVisibility

  "visible" | "exclusive"

  Default: 'visible'

  Changes the visibility of the component's label.

  * `visible`: the label is visible to all users.
  * `exclusive`: the label is visually hidden but remains in the accessibility tree.

* name

  string

  An identifier for the field that is unique within the nearest containing form.

* placeholder

  string

  A short hint that describes the expected value of the field.

* required

  boolean

  Default: false

  Whether the field needs a value. This requirement adds semantic value to the field, but it will not cause an error to appear automatically. If you want to present an error when this field is empty, you can do so with the `error` property.

* value

  string

  The current value for the field. If omitted, the field will be empty.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* change

  CallbackEventListener<'input'>

* input

  CallbackEventListener<'input'>

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

  The options a user can select from.

  Accepts `Option` and `OptionGroup` components.

## Option

Represents a single option within a select component. Use only as a child of `s-select` components.

* defaultSelected

  boolean

  Default: false

  Whether the control is active by default.

* disabled

  boolean

  Default: false

  Disables the control, disallowing any interaction.

* selected

  boolean

  Default: false

  Whether the control is active.

* value

  string

  The value used in form data when the control is checked.

## Slots

* children

  HTMLElement

  The content to use as the label.

## OptionGroup

Represents a group of options within a select component. Use only as a child of `s-select` components.

* disabled

  boolean

  Default: false

  Whether the options within this group can be selected or not.

* label

  string

  The user-facing label for this group of options.

## Slots

* children

  HTMLElement

  The options a user can select from.

  Accepts `Option` components.

### Examples

* #### Code

  ##### jsx

  ```jsx
  <s-select label="Date range">
    <s-option value="1">Today</s-option>
    <s-option value="2">Yesterday</s-option>
    <s-option value="3">Last 7 days</s-option>
    <s-option-group label="Custom ranges">
      <s-option value="4">Last 30 days</s-option>
      <s-option value="5">Last 90 days</s-option>
    </s-option-group>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Date range">
    <s-option value="1">Today</s-option>
    <s-option value="2">Yesterday</s-option>
    <s-option value="3">Last 7 days</s-option>
    <s-option-group label="Custom ranges">
      <s-option value="4">Last 30 days</s-option>
      <s-option value="5">Last 90 days</s-option>
    </s-option-group>
  </s-select>
  ```

## Examples

Component examples

### Basic usage

Basic usage

A simple select dropdown with pre-selected value for product sorting options.

With placeholder

Select dropdown with helpful placeholder text guiding category selection.

With error state

Select in error state showing specific business context and actionable error message.

With option groups

Grouped select options organized by geographical regions for international shipping.

With icon

Select dropdown with sort icon for filtering order management views.

Disabled state

Select in disabled state preventing user interaction with pre-selected value.

### Examples

* #### Basic usage

  ##### Description

  A simple select dropdown with pre-selected value for product sorting options.

  ##### jsx

  ```jsx
  <s-select label="Sort products by" value="newest">
    <s-option value="newest">Newest first</s-option>
    <s-option value="oldest">Oldest first</s-option>
    <s-option value="title">Title A–Z</s-option>
    <s-option value="price-low">Price: low to high</s-option>
    <s-option value="price-high">Price: high to low</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Sort products by" value="newest">
    <s-option value="newest">Newest first</s-option>
    <s-option value="oldest">Oldest first</s-option>
    <s-option value="title">Title A–Z</s-option>
    <s-option value="price-low">Price: low to high</s-option>
    <s-option value="price-high">Price: high to low</s-option>
  </s-select>
  ```

* #### With placeholder

  ##### Description

  Select dropdown with helpful placeholder text guiding category selection.

  ##### jsx

  ```jsx
  <s-select
    label="Product category"
    placeholder="Choose category for better organization"
  >
    <s-option value="clothing">Clothing & apparel</s-option>
    <s-option value="accessories">Accessories & jewelry</s-option>
    <s-option value="home-garden">Home & garden</s-option>
    <s-option value="electronics">Electronics & tech</s-option>
    <s-option value="books">Books & media</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select
    label="Product category"
    placeholder="Choose category for better organization"
  >
    <s-option value="clothing">Clothing & apparel</s-option>
    <s-option value="accessories">Accessories & jewelry</s-option>
    <s-option value="home-garden">Home & garden</s-option>
    <s-option value="electronics">Electronics & tech</s-option>
    <s-option value="books">Books & media</s-option>
  </s-select>
  ```

* #### With error state

  ##### Description

  Select in error state showing specific business context and actionable error message.

  ##### jsx

  ```jsx
  <s-select
    label="Shipping origin"
    error="Select your primary shipping location to calculate accurate rates for customers"
    required
  >
    <s-option value="ca">Canada</s-option>
    <s-option value="us">United states</s-option>
    <s-option value="mx">Mexico</s-option>
    <s-option value="uk">United kingdom</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select
    label="Shipping origin"
    error="Select your primary shipping location to calculate accurate rates for customers"
    required
  >
    <s-option value="ca">Canada</s-option>
    <s-option value="us">United states</s-option>
    <s-option value="mx">Mexico</s-option>
    <s-option value="uk">United kingdom</s-option>
  </s-select>
  ```

* #### With option groups

  ##### Description

  Grouped select options organized by geographical regions for international shipping.

  ##### jsx

  ```jsx
  <s-select label="Shipping destination">
    <s-option-group label="North america">
      <s-option value="ca">Canada</s-option>
      <s-option value="us">United states</s-option>
      <s-option value="mx">Mexico</s-option>
    </s-option-group>
    <s-option-group label="Europe">
      <s-option value="uk">United kingdom</s-option>
      <s-option value="fr">France</s-option>
      <s-option value="de">Germany</s-option>
      <s-option value="it">Italy</s-option>
    </s-option-group>
    <s-option-group label="Asia pacific">
      <s-option value="au">Australia</s-option>
      <s-option value="jp">Japan</s-option>
      <s-option value="sg">Singapore</s-option>
    </s-option-group>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Shipping destination">
    <s-option-group label="North america">
      <s-option value="ca">Canada</s-option>
      <s-option value="us">United states</s-option>
      <s-option value="mx">Mexico</s-option>
    </s-option-group>
    <s-option-group label="Europe">
      <s-option value="uk">United kingdom</s-option>
      <s-option value="fr">France</s-option>
      <s-option value="de">Germany</s-option>
      <s-option value="it">Italy</s-option>
    </s-option-group>
    <s-option-group label="Asia pacific">
      <s-option value="au">Australia</s-option>
      <s-option value="jp">Japan</s-option>
      <s-option value="sg">Singapore</s-option>
    </s-option-group>
  </s-select>
  ```

* #### With icon

  ##### Description

  Select dropdown with sort icon for filtering order management views.

  ##### jsx

  ```jsx
  <s-select label="Filter orders by" icon="sort">
    <s-option value="date">Order date</s-option>
    <s-option value="status">Fulfillment status</s-option>
    <s-option value="total">Order total</s-option>
    <s-option value="customer">Customer name</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Filter orders by" icon="sort">
    <s-option value="date">Order date</s-option>
    <s-option value="status">Fulfillment status</s-option>
    <s-option value="total">Order total</s-option>
    <s-option value="customer">Customer name</s-option>
  </s-select>
  ```

* #### Disabled state

  ##### Description

  Select in disabled state preventing user interaction with pre-selected value.

  ##### jsx

  ```jsx
  <s-select label="Product type" disabled value="physical">
    <s-option value="physical">Physical product</s-option>
    <s-option value="digital">Digital product</s-option>
    <s-option value="service">Service</s-option>
    <s-option value="gift-card">Gift card</s-option>
  </s-select>
  ```

  ##### html

  ```html
  <s-select label="Product type" disabled value="physical">
    <s-option value="physical">Physical product</s-option>
    <s-option value="digital">Digital product</s-option>
    <s-option value="service">Service</s-option>
    <s-option value="gift-card">Gift card</s-option>
  </s-select>
  ```
