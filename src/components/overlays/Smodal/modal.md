---
title: Modal
description: >-
  Displays content in an overlay. Use to create a distraction-free experience
  such as a confirmation dialog or a settings panel.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/modal'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/overlays/modal.md
---

# Modal

Displays content in an overlay. Use to create a distraction-free experience such as a confirmation dialog or a settings panel.

## Properties

* accessibilityLabel

  string

  A label that describes the purpose of the modal. When set, it will be announced to users using assistive technologies and will provide them with more context.

  This overrides the `heading` prop for screen readers.

* heading

  string

  A title that describes the content of the Modal.

* hideOverlay

  () => void

  Method to hide an overlay.

* padding

  "base" | "none"

  Default: 'base'

  Adjust the padding around the Modal content.

  `base`: applies padding that is appropriate for the element.

  `none`: removes all padding from the element. This can be useful when elements inside the Modal need to span to the edge of the Modal. For example, a full-width image. In this case, rely on `Box` with a padding of 'base' to bring back the desired padding for the rest of the content.

* showOverlay

  () => void

  Method to show an overlay.

* size

  "small" | "small-100" | "base" | "large" | "large-100"

  Default: 'base'

  Adjust the size of the Modal.

* toggleOverlay

  () => void

  Method to toggle the visiblity of an overlay.

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* afterhide

  CallbackEventListener\<typeof tagName> | null

* aftershow

  CallbackEventListener\<typeof tagName> | null

* hide

  CallbackEventListener\<typeof tagName> | null

* show

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

  The content of the Modal.

* primary-action

  HTMLElement

  The primary action to perform.

  Only a `Button` with a variant of `primary` is allowed.

* secondary-actions

  HTMLElement

  The secondary actions to perform.

  Only `Button` elements with a variant of `secondary` or `auto` are allowed.

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="modal">Open</s-button>

    <s-modal id="modal" heading="Details">
      <s-paragraph>Displaying more details here.</s-paragraph>

      <s-button slot="secondary-actions" commandFor="modal" command="--hide">
        Close
      </s-button>
      <s-button
        slot="primary-action"
        variant="primary"
        commandFor="modal"
        command="--hide"
      >
        Save
      </s-button>
    </s-modal>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="modal">Open</s-button>

  <s-modal id="modal" heading="Details">
    <s-paragraph>Displaying more details here.</s-paragraph>

    <s-button slot="secondary-actions" commandFor="modal" command="--hide">
      Close
    </s-button>
    <s-button
      slot="primary-action"
      variant="primary"
      commandFor="modal"
      command="--hide"
    >
      Save
    </s-button>
  </s-modal>
  ```

## Examples

Component examples

### Basic usage

Basic modal

Simple modal with heading and basic content for displaying information. Click the button to open the modal.

Modal with actions

Modal with primary and secondary action buttons. Click the button to open the confirmation modal.

Modal with form fields

Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.

Different modal sizes

Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.

Modal without padding

Modal with no padding for full-width content. Click to view the modal.

### Examples

* #### Basic modal

  ##### Description

  Simple modal with heading and basic content for displaying information. Click the button to open the modal.

  ##### jsx

  ```jsx
  <>
    <s-button commandFor="info-modal" command="--show">
      Show product info
    </s-button>

    <s-modal id="info-modal" heading="Product information">
      <s-text>
        This product is currently out of stock and cannot be ordered.
      </s-text>

      <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
        Close
      </s-button>
    </s-modal>
  </>
  ```

  ##### html

  ```html
  <s-button commandFor="info-modal" command="--show">Show product info</s-button>

  <s-modal id="info-modal" heading="Product information">
    <s-text>This product is currently out of stock and cannot be ordered.</s-text>

    <s-button slot="secondary-actions" commandFor="info-modal" command="--hide">
      Close
    </s-button>
  </s-modal>
  ```

* #### Modal with actions

  ##### Description

  Modal with primary and secondary action buttons. Click the button to open the confirmation modal.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-button tone="critical" commandFor="delete-modal" command="--show">
      Delete product
    </s-button>

    <s-modal id="delete-modal" heading="Delete product?">
      <s-stack gap="base">
        <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
        <s-text tone="caution">This action cannot be undone.</s-text>
      </s-stack>

      <s-button
        slot="primary-action"
        variant="primary"
        tone="critical"
        commandFor="delete-modal"
        command="--hide"
      >
        Delete product
      </s-button>
      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="delete-modal"
        command="--hide"
      >
        Cancel
      </s-button>
    </s-modal>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-button tone="critical" commandFor="delete-modal" command="--show">
      Delete product
    </s-button>

    <s-modal id="delete-modal" heading="Delete product?">
      <s-stack gap="base">
        <s-text>Are you sure you want to delete "Winter jacket"?</s-text>
        <s-text tone="caution">This action cannot be undone.</s-text>
      </s-stack>

      <s-button
        slot="primary-action"
        variant="primary"
        tone="critical"
        commandFor="delete-modal"
        command="--hide"
      >
        Delete product
      </s-button>
      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="delete-modal"
        command="--hide"
      >
        Cancel
      </s-button>
    </s-modal>
  </s-stack>
  ```

* #### Modal with form fields

  ##### Description

  Modal containing form fields demonstrating how to structure input fields within a modal. Click the button to open the modal.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-button variant="primary" commandFor="edit-modal" command="--show">
      Edit customer
    </s-button>

    <s-modal id="edit-modal" heading="Edit customer information" size="large">
      <s-stack gap="base">
        <s-text-field
          label="Customer name"
          name="name"
          value="Sarah Johnson"
         />

        <s-email-field
          label="Email address"
          name="email"
          value="sarah@example.com"
         />

        <s-text-field
          label="Phone number"
          name="phone"
          value="+1 555-0123"
         />

        <s-select label="Customer group" name="group">
          <s-option value="retail">Retail</s-option>
          <s-option value="wholesale" selected>
            Wholesale
          </s-option>
          <s-option value="vip">VIP</s-option>
        </s-select>
      </s-stack>

      <s-button
        slot="primary-action"
        variant="primary"
        commandFor="edit-modal"
        command="--hide"
      >
        Save changes
      </s-button>
      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="edit-modal"
        command="--hide"
      >
        Cancel
      </s-button>
    </s-modal>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-button variant="primary" commandFor="edit-modal" command="--show">
      Edit customer
    </s-button>

    <s-modal id="edit-modal" heading="Edit customer information" size="large">
      <s-stack gap="base">
        <s-text-field
          label="Customer name"
          name="name"
          value="Sarah Johnson"
        ></s-text-field>

        <s-email-field
          label="Email address"
          name="email"
          value="sarah@example.com"
        ></s-email-field>

        <s-text-field
          label="Phone number"
          name="phone"
          value="+1 555-0123"
        ></s-text-field>

        <s-select label="Customer group" name="group">
          <s-option value="retail">Retail</s-option>
          <s-option value="wholesale" selected>Wholesale</s-option>
          <s-option value="vip">VIP</s-option>
        </s-select>
      </s-stack>

      <s-button
        slot="primary-action"
        variant="primary"
        commandFor="edit-modal"
        command="--hide"
      >
        Save changes
      </s-button>
      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="edit-modal"
        command="--hide"
      >
        Cancel
      </s-button>
    </s-modal>
  </s-stack>
  ```

* #### Different modal sizes

  ##### Description

  Demonstrates various modal sizes for different content requirements. Click each button to see different modal sizes.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-stack direction="inline" gap="base">
      <s-button commandFor="small-modal" command="--show">
        Small modal
      </s-button>
      <s-button commandFor="large-modal" command="--show">
        Large modal
      </s-button>
    </s-stack>

    {/* Small modal for quick confirmations */}
    <s-modal id="small-modal" heading="Confirm action" size="small-100">
      <s-text>Are you sure you want to proceed?</s-text>
      <s-button
        slot="primary-action"
        variant="primary"
        commandFor="small-modal"
        command="--hide"
      >
        Confirm
      </s-button>
      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="small-modal"
        command="--hide"
      >
        Cancel
      </s-button>
    </s-modal>

    {/* Large modal for detailed content */}
    <s-modal id="large-modal" heading="Order details" size="large-100">
      <s-stack gap="base">
        <s-section>
          <s-heading>Order #1001</s-heading>
          <s-text>Placed on March 15, 2024</s-text>
        </s-section>

        <s-divider />

        <s-section>
          <s-heading>Items</s-heading>
          <s-stack gap="small">
            <s-text>Winter jacket - $89.99</s-text>
            <s-text>Wool scarf - $29.99</s-text>
            <s-text>Leather gloves - $45.99</s-text>
          </s-stack>
        </s-section>

        <s-divider />

        <s-text type="strong">Total: $165.97</s-text>
      </s-stack>

      <s-button
        slot="primary-action"
        variant="primary"
        commandFor="large-modal"
        command="--hide"
      >
        Close
      </s-button>
    </s-modal>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-stack direction="inline" gap="base">
      <s-button commandFor="small-modal" command="--show">Small modal</s-button>
      <s-button commandFor="large-modal" command="--show">Large modal</s-button>
    </s-stack>

    <!-- Small modal for quick confirmations -->
    <s-modal id="small-modal" heading="Confirm action" size="small-100">
      <s-text>Are you sure you want to proceed?</s-text>
      <s-button
        slot="primary-action"
        variant="primary"
        commandFor="small-modal"
        command="--hide"
      >
        Confirm
      </s-button>
      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="small-modal"
        command="--hide"
      >
        Cancel
      </s-button>
    </s-modal>

    <!-- Large modal for detailed content -->
    <s-modal id="large-modal" heading="Order details" size="large-100">
      <s-stack gap="base">
        <s-section>
          <s-heading>Order #1001</s-heading>
          <s-text>Placed on March 15, 2024</s-text>
        </s-section>

        <s-divider></s-divider>

        <s-section>
          <s-heading>Items</s-heading>
          <s-stack gap="small">
            <s-text>Winter jacket - $89.99</s-text>
            <s-text>Wool scarf - $29.99</s-text>
            <s-text>Leather gloves - $45.99</s-text>
          </s-stack>
        </s-section>

        <s-divider></s-divider>

        <s-text type="strong">Total: $165.97</s-text>
      </s-stack>

      <s-button
        slot="primary-action"
        variant="primary"
        commandFor="large-modal"
        command="--hide"
      >
        Close
      </s-button>
    </s-modal>
  </s-stack>
  ```

* #### Modal without padding

  ##### Description

  Modal with no padding for full-width content. Click to view the modal.

  ##### jsx

  ```jsx
  <s-stack gap="base">
    <s-button commandFor="image-modal" command="--show">
      View product image
    </s-button>

    <s-modal id="image-modal" heading="Product image" padding="none">
      <s-box background="subdued" padding="base">
        <s-text>Image would display here with full width</s-text>
      </s-box>

      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="image-modal"
        command="--hide"
      >
        Close
      </s-button>
    </s-modal>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack gap="base">
    <s-button commandFor="image-modal" command="--show">
      View product image
    </s-button>

    <s-modal id="image-modal" heading="Product image" padding="none">
      <s-box background="subdued" padding="base">
        <s-text>Image would display here with full width</s-text>
      </s-box>

      <s-button
        slot="secondary-actions"
        variant="secondary"
        commandFor="image-modal"
        command="--hide"
      >
        Close
      </s-button>
    </s-modal>
  </s-stack>
  ```
