---
title: Button
description: >-
  Triggers actions or events, such as submitting forms, opening dialogs, or
  navigating to other pages. Use Button to let users perform specific tasks or
  initiate interactions throughout the interface. Buttons can also function as
  links, guiding users to internal or external destinations.
api_name: app-home
source_url:
  html: 'https://shopify.dev/docs/api/app-home/polaris-web-components/actions/button'
  md: >-
    https://shopify.dev/docs/api/app-home/polaris-web-components/actions/button.md
---

# Button

Triggers actions or events, such as submitting forms, opening dialogs, or navigating to other pages. Use Button to let users perform specific tasks or initiate interactions throughout the interface. Buttons can also function as links, guiding users to internal or external destinations.

## Properties

* accessibilityLabel

  string

  A label that describes the purpose or contents of the Button. It will be read to users using assistive technologies such as screen readers.

  Use this when using only an icon or the Button text is not enough context for users using assistive technologies.

* command

  '--auto' | '--show' | '--hide' | '--toggle'

  Default: '--auto'

  Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.

  See the documentation of particular components for the actions they support.

  * `--auto`: a default action for the target component.
  * `--show`: shows the target component.
  * `--hide`: hides the target component.
  * `--toggle`: toggles the target component.

* commandFor

  string

  Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.

* disabled

  boolean

  Default: false

  Disables the Button meaning it cannot be clicked or receive focus.

* download

  string

  Causes the browser to treat the linked URL as a download with the string being the file name. Download only works for same-origin URLs or the `blob:` and `data:` schemes.

* href

  string

  The URL to link to.

  * If set, it will navigate to the location specified by `href` after executing the `click` event.
  * If a `commandFor` is set, the `command` will be executed instead of the navigation.

* icon

  "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle"

  The type of icon to be displayed in the Button.

* interestFor

  string

  Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.

* loading

  boolean

  Default: false

  Replaces content with a loading indicator while a background action is being performed.

  This also disables the Button.

* target

  "auto" | AnyString | "\_blank" | "\_self" | "\_parent" | "\_top"

  Default: 'auto'

  Specifies where to display the linked URL.

* tone

  "critical" | "auto" | "neutral"

  Default: 'auto'

  Sets the tone of the Button based on the intention of the information being conveyed.

* type

  "button" | "reset" | "submit"

  Default: 'button'

  The behavior of the Button.

  * `submit`: Used to indicate the component acts as a submit button, meaning it submits the closest form.
  * `button`: Used to indicate the component acts as a button, meaning it has no default action.
  * `reset`: Used to indicate the component acts as a reset button, meaning it resets the closest form (returning fields to their default values).

  This property is ignored if the component supports `href` or `commandFor`/`command` and one of them is set.

* variant

  "auto" | "primary" | "secondary" | "tertiary"

  Default: 'auto' - the variant is automatically determined by the Button's context

  Changes the visual appearance of the Button.

### AnyString

Prevents widening string literal types in a union to \`string\`.

```ts
string & {}
```

## Events

Learn more about [registering events](https://shopify.dev/docs/api/app-home/using-polaris-components#event-handling).

* blur

  CallbackEventListener\<typeof tagName> | null

* click

  CallbackEventListener\<typeof tagName> | null

* focus

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

  The content of the Button.

### Examples

* #### Code

  ##### jsx

  ```jsx
  <>
    <s-button variant="primary">Add Product</s-button>
    <s-button variant="secondary">Save Theme</s-button>
  </>
  ```

  ##### html

  ```html
  <s-button variant="primary">Add Product</s-button>
  <s-button variant="secondary">Save Theme</s-button>
  ```

## Examples

Component examples

### Basic usage

Basic usage

Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.

Variants

Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.

Tones

Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.

With icon

Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.

Icon-only button

Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.

Loading state

Illustrates buttons in various loading states, providing visual feedback during asynchronous operations.

Form states

Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.

Link buttons

Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.

Form submission buttons

Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.

Delete confirmation

Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.

Navigation button with icon

Showcases a navigation button with an icon, enabling quick access to different sections of the interface.

Button group for bulk operations

Demonstrates a button group for executing operations on multiple selected items.

Icon-only buttons with labels

Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense interfaces.

Component interactions

Demonstrates advanced button capabilities using `command`, `commandFor`, and `interestFor` properties to enable dynamic component communication.

### Examples

* #### Basic usage

  ##### Description

  Demonstrates a simple button with default styling, automatically determining its visual variant and using a clear, action-oriented label.

  ##### jsx

  ```jsx
  <s-button>Save</s-button>
  ```

  ##### html

  ```html
  <s-button>Save</s-button>
  ```

* #### Variants

  ##### Description

  Showcases different button variants with varying visual emphasis, helping merchants understand action priorities through distinct styling.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button variant="primary">Primary</s-button>
    <s-button variant="secondary">Secondary</s-button>
    <s-button variant="tertiary">Tertiary</s-button>
    <s-button variant="auto">Auto</s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-button variant="primary">Primary</s-button>
    <s-button variant="secondary">Secondary</s-button>
    <s-button variant="tertiary">Tertiary</s-button>
    <s-button variant="auto">Auto</s-button>
  </s-stack>
  ```

* #### Tones

  ##### Description

  Illustrates button tones that signal the semantic importance and potential impact of different actions through color and styling.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button tone="critical">Delete</s-button>
    <s-button tone="neutral">Save draft</s-button>
    <s-button>Continue</s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-button tone="critical">Delete</s-button>
    <s-button tone="neutral">Save draft</s-button>
    <s-button>Continue</s-button>
  </s-stack>
  ```

* #### With icon

  ##### Description

  Showcases a button that combines a descriptive text label with an intuitive icon, enhancing visual communication of the action.

  ##### jsx

  ```jsx
  <s-button icon="plus">Add product</s-button>
  ```

  ##### html

  ```html
  <s-button icon="plus">Add product</s-button>
  ```

* #### Icon-only button

  ##### Description

  Demonstrates an icon-only button with an accessibility label, providing a compact interface that remains screen reader friendly.

  ##### jsx

  ```jsx
  <s-button icon="plus" accessibilityLabel="Add product" />
  ```

  ##### html

  ```html
  <s-button icon="plus" accessibilityLabel="Add product"></s-button>
  ```

* #### Loading state

  ##### Description

  Illustrates buttons in various loading states, providing visual feedback during asynchronous operations.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button loading variant="primary">
      Saving product...
    </s-button>
    <s-button loading variant="secondary">
      Updating 247 variants...
    </s-button>
    <s-button loading tone="neutral">
      Processing shipment...
    </s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <!-- Product save operation -->
  <s-button loading variant="primary">Saving product...</s-button>

  <!-- Bulk inventory update -->
  <s-button loading variant="secondary">Updating 247 variants...</s-button>

  <!-- Order fulfillment -->
  <s-button loading tone="neutral">Processing shipment...</s-button>
  ```

* #### Form states

  ##### Description

  Demonstrates buttons in different interaction states, showing how to represent disabled controls and submit actions within forms.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button disabled>Save draft</s-button>
    <s-button type="submit" variant="primary">
      Save product
    </s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-button disabled>Save draft</s-button>
    <s-button type="submit" variant="primary">Save product</s-button>
  </s-stack>
  ```

* #### Link buttons

  ##### Description

  Showcases buttons that act as hyperlinks, supporting navigation to different pages, external resources, and file downloads.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button href="javascript:void(0)">View products</s-button>
    <s-button href="javascript:void(0)" target="_blank">
      Help docs
    </s-button>
    <s-button href="javascript:void(0)" download="sales-report.csv">
      Export data
    </s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-button href="javascript:void(0)">View products</s-button>
    <s-button href="javascript:void(0)" target="_blank">Help docs</s-button>
    <s-button href="javascript:void(0)" download="sales-report.csv">
      Export data
    </s-button>
  </s-stack>
  ```

* #### Form submission buttons

  ##### Description

  Demonstrates a button group with carefully aligned actions, showing how to create a clear visual hierarchy for form submission and cancellation.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base" justifyContent="end">
    <s-button variant="secondary">Cancel</s-button>
    <s-button variant="primary" type="submit">
      Save product
    </s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base" justifyContent="end">
    <s-button variant="secondary">Cancel</s-button>
    <s-button variant="primary" type="submit">Save product</s-button>
  </s-stack>
  ```

* #### Delete confirmation

  ##### Description

  Illustrates a button pair for destructive actions, using a critical tone to emphasize the potentially irreversible nature of the operation.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button variant="secondary">Cancel</s-button>
    <s-button variant="primary" tone="critical">
      Delete variant
    </s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-button variant="secondary">Cancel</s-button>
    <s-button variant="primary" tone="critical">Delete variant</s-button>
  </s-stack>
  ```

* #### Navigation button with icon

  ##### Description

  Showcases a navigation button with an icon, enabling quick access to different sections of the interface.

  ##### jsx

  ```jsx
  <s-button href="javascript:void(0)" icon="order">
    View orders
  </s-button>
  ```

  ##### html

  ```html
  <!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
  <s-button href="javascript:void(0)" icon="order">View orders</s-button>
  ```

* #### Button group for bulk operations

  ##### Description

  Demonstrates a button group for executing operations on multiple selected items.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button variant="secondary">Export selected</s-button>
    <s-button variant="primary" tone="critical">
      Delete selected
    </s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-button variant="secondary">Export selected</s-button>
    <s-button variant="primary" tone="critical">Delete selected</s-button>
  </s-stack>
  ```

* #### Icon-only buttons with labels

  ##### Description

  Showcases a set of compact, icon-only buttons with accessibility labels, perfect for creating dense interfaces.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    <s-button
      icon="duplicate"
      variant="tertiary"
      accessibilityLabel="Duplicate product"
     />
    <s-button
      icon="view"
      variant="tertiary"
      accessibilityLabel="Preview product"
     />
    <s-button
      icon="menu-horizontal"
      variant="tertiary"
      accessibilityLabel="More actions"
     />
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <s-button
      icon="duplicate"
      variant="tertiary"
      accessibilityLabel="Duplicate product"
    ></s-button>
    <s-button
      icon="view"
      variant="tertiary"
      accessibilityLabel="Preview product"
    ></s-button>
    <s-button
      icon="menu-horizontal"
      variant="tertiary"
      accessibilityLabel="More actions"
    ></s-button>
  </s-stack>
  ```

* #### Component interactions

  ##### Description

  Demonstrates advanced button capabilities using \`command\`, \`commandFor\`, and \`interestFor\` properties to enable dynamic component communication.

  ##### jsx

  ```jsx
  <s-stack direction="inline" gap="base">
    {/* Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. */}
    <s-button href="javascript:void(0)">Edit details</s-button>

    {/* Button that expresses interest in specific data */}
    <s-button interestFor="selected-products">Bulk edit</s-button>
  </s-stack>
  ```

  ##### html

  ```html
  <s-stack direction="inline" gap="base">
    <!-- Button that navigates using Shopify's navigation system. Use shopify:navigate for navigation. Refer to [handling navigation events](/docs/api/app-home?accordionItem=getting-started-existing-remix-application) for implementation details and framework-specific examples. -->
    <s-button href="javascript:void(0)">Edit details</s-button>

    <!-- Button that expresses interest in specific data -->
    <s-button interestFor="selected-products">Bulk edit</s-button>
  </s-stack>
  ```
