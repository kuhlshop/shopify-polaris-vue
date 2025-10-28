<template>
  <s-textfield
    :autocomplete="autocomplete"
    :default-value="defaultValue"
    :details="details"
    :disabled="disabled"
    :error="error"
    :icon="icon"
    :id="id"
    :label="label"
    :label-accessibility-visibility="labelAccessibilityVisibility"
    :max-length="maxLength"
    :min-length="minLength"
    :name="name"
    :placeholder="placeholder"
    :prefix="prefix"
    :read-only="readOnly"
    :required="required"
    :suffix="suffix"
    :value="value"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
    <slot name="accessory" slot="accessory" />
  </s-textfield>
</template>

<script setup lang="ts">
// Type definitions for autocomplete
type TextAutocompleteField = 
  | 'language'
  | 'organization'
  | 'additional-name'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'country-name'
  | 'country'
  | 'family-name'
  | 'given-name'
  | 'honorific-prefix'
  | 'honorific-suffix'
  | 'name'
  | 'nickname'
  | 'one-time-code'
  | 'organization-title'
  | 'postal-code'
  | 'sex'
  | 'street-address'
  | 'transaction-currency'
  | 'username'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-given-name'
  | 'cc-name'
  | 'cc-type';

type AutocompleteValue =
  | "on"
  | "off"
  | TextAutocompleteField
  | `section-${string} one-time-code`
  | "shipping one-time-code"
  | "billing one-time-code"
  | `section-${string} shipping one-time-code`
  | `section-${string} billing one-time-code`
  | `section-${string} language`
  | `section-${string} organization`
  | `section-${string} additional-name`
  | `section-${string} address-level1`
  | `section-${string} address-level2`
  | `section-${string} address-level3`
  | `section-${string} address-level4`
  | `section-${string} address-line1`
  | `section-${string} address-line2`
  | `section-${string} address-line3`
  | `section-${string} country-name`
  | `section-${string} country`
  | `section-${string} family-name`
  | `section-${string} given-name`
  | `section-${string} honorific-prefix`
  | `section-${string} honorific-suffix`
  | `section-${string} name`
  | `section-${string} nickname`
  | `section-${string} organization-title`
  | `section-${string} postal-code`
  | `section-${string} sex`
  | `section-${string} street-address`
  | `section-${string} transaction-currency`
  | `section-${string} username`
  | `section-${string} cc-additional-name`
  | `section-${string} cc-family-name`
  | `section-${string} cc-given-name`
  | `section-${string} cc-name`
  | `section-${string} cc-type`
  | "shipping language"
  | "shipping organization"
  | "shipping additional-name"
  | "shipping address-level1"
  | "shipping address-level2"
  | "shipping address-level3"
  | "shipping address-level4"
  | "shipping address-line1"
  | "shipping address-line2"
  | "shipping address-line3"
  | "shipping country-name"
  | "shipping country"
  | "shipping family-name"
  | "shipping given-name"
  | "shipping honorific-prefix"
  | "shipping honorific-suffix"
  | "shipping name"
  | "shipping nickname"
  | "shipping organization-title"
  | "shipping postal-code"
  | "shipping sex"
  | "shipping street-address"
  | "shipping transaction-currency"
  | "shipping username"
  | "shipping cc-additional-name"
  | "shipping cc-family-name"
  | "shipping cc-given-name"
  | "shipping cc-name"
  | "shipping cc-type"
  | "billing language"
  | "billing organization"
  | "billing additional-name"
  | "billing address-level1"
  | "billing address-level2"
  | "billing address-level3"
  | "billing address-level4"
  | "billing address-line1"
  | "billing address-line2"
  | "billing address-line3"
  | "billing country-name"
  | "billing country"
  | "billing family-name"
  | "billing given-name"
  | "billing honorific-prefix"
  | "billing honorific-suffix"
  | "billing name"
  | "billing nickname"
  | "billing organization-title"
  | "billing postal-code"
  | "billing sex"
  | "billing street-address"
  | "billing transaction-currency"
  | "billing username"
  | "billing cc-additional-name"
  | "billing cc-family-name"
  | "billing cc-given-name"
  | "billing cc-name"
  | "billing cc-type"
  | `section-${string} shipping language`
  | `section-${string} shipping organization`
  | `section-${string} shipping additional-name`
  | `section-${string} shipping address-level1`
  | `section-${string} shipping address-level2`
  | `section-${string} shipping address-level3`
  | `section-${string} shipping address-level4`
  | `section-${string} shipping address-line1`
  | `section-${string} shipping address-line2`
  | `section-${string} shipping address-line3`
  | `section-${string} shipping country-name`
  | `section-${string} shipping country`
  | `section-${string} shipping family-name`
  | `section-${string} shipping given-name`
  | `section-${string} shipping honorific-prefix`
  | `section-${string} shipping honorific-suffix`
  | `section-${string} shipping name`
  | `section-${string} shipping nickname`
  | `section-${string} shipping organization-title`
  | `section-${string} shipping postal-code`
  | `section-${string} shipping sex`
  | `section-${string} shipping street-address`
  | `section-${string} shipping transaction-currency`
  | `section-${string} shipping username`
  | `section-${string} shipping cc-additional-name`
  | `section-${string} shipping cc-family-name`
  | `section-${string} shipping cc-given-name`
  | `section-${string} shipping cc-name`
  | `section-${string} shipping cc-type`
  | `section-${string} billing language`
  | `section-${string} billing organization`
  | `section-${string} billing additional-name`
  | `section-${string} billing address-level1`
  | `section-${string} billing address-level2`
  | `section-${string} billing address-level3`
  | `section-${string} billing address-level4`
  | `section-${string} billing address-line1`
  | `section-${string} billing address-line2`
  | `section-${string} billing address-line3`
  | `section-${string} billing country-name`
  | `section-${string} billing country`
  | `section-${string} billing family-name`
  | `section-${string} billing given-name`
  | `section-${string} billing honorific-prefix`
  | `section-${string} billing honorific-suffix`
  | `section-${string} billing name`
  | `section-${string} billing nickname`
  | `section-${string} billing organization-title`
  | `section-${string} billing postal-code`
  | `section-${string} billing sex`
  | `section-${string} billing street-address`
  | `section-${string} billing transaction-currency`
  | `section-${string} billing username`
  | `section-${string} billing cc-additional-name`
  | `section-${string} billing cc-family-name`
  | `section-${string} billing cc-given-name`
  | `section-${string} billing cc-name`
  | `section-${string} billing cc-type`
  | (string & {});

type IconType =
  | "replace"
  | "search"
  | "split"
  | "link"
  | "edit"
  | "product"
  | "variant"
  | "collection"
  | "select"
  | "info"
  | "incomplete"
  | "complete"
  | "color"
  | "money"
  | "adjust"
  | "affiliate"
  | "airplane"
  | "alert-bubble"
  | "alert-circle"
  | "alert-diamond"
  | "alert-location"
  | "alert-octagon"
  | "alert-octagon-filled"
  | "alert-triangle"
  | "alert-triangle-filled"
  | "app-extension"
  | "apps"
  | "archive"
  | "arrow-down"
  | "arrow-down-circle"
  | "arrow-down-right"
  | "arrow-left"
  | "arrow-left-circle"
  | "arrow-right"
  | "arrow-right-circle"
  | "arrow-up"
  | "arrow-up-circle"
  | "arrow-up-right"
  | "arrows-in-horizontal"
  | "arrows-out-horizontal"
  | "attachment"
  | "automation"
  | "backspace"
  | "bag"
  | "bank"
  | "barcode"
  | "battery-low"
  | "bill"
  | "blank"
  | "blog"
  | "bolt"
  | "bolt-filled"
  | "book"
  | "book-open"
  | "bug"
  | "bullet"
  | "business-entity"
  | "button"
  | "button-press"
  | "calculator"
  | "calendar"
  | "calendar-check"
  | "calendar-compare"
  | "calendar-list"
  | "calendar-time"
  | "camera"
  | "camera-flip"
  | "caret-down"
  | "caret-left"
  | "caret-right"
  | "caret-up"
  | "cart"
  | "cart-abandoned"
  | "cart-discount"
  | "cart-down"
  | "cart-filled"
  | "cart-sale"
  | "cart-send"
  | "cart-up"
  | "cash-dollar"
  | "cash-euro"
  | "cash-pound"
  | "cash-rupee"
  | "cash-yen"
  | "catalog-product"
  | "categories"
  | "channels"
  | "chart-cohort"
  | "chart-donut"
  | "chart-funnel"
  | "chart-histogram-first"
  | "chart-histogram-first-last"
  | "chart-histogram-flat"
  | "chart-histogram-full"
  | "chart-histogram-growth"
  | "chart-histogram-last"
  | "chart-histogram-second-last"
  | "chart-horizontal"
  | "chart-line"
  | "chart-popular"
  | "chart-stacked"
  | "chart-vertical"
  | "chat"
  | "chat-new"
  | "chat-referral"
  | "check"
  | "check-circle"
  | "check-circle-filled"
  | "checkbox"
  | "chevron-down"
  | "chevron-down-circle"
  | "chevron-left"
  | "chevron-left-circle"
  | "chevron-right"
  | "chevron-right-circle"
  | "chevron-up"
  | "chevron-up-circle"
  | "circle"
  | "circle-dashed"
  | "clipboard"
  | "clipboard-check"
  | "clipboard-checklist"
  | "clock"
  | "clock-list"
  | "clock-revert"
  | "code"
  | "code-add"
  | "collection-featured"
  | "collection-list"
  | "collection-reference"
  | "color-none"
  | "compass"
  | "compose"
  | "confetti"
  | "connect"
  | "content"
  | "contract"
  | "corner-pill"
  | "corner-round"
  | "corner-square"
  | "credit-card"
  | "credit-card-cancel"
  | "credit-card-percent"
  | "credit-card-reader"
  | "credit-card-reader-chip"
  | "credit-card-reader-tap"
  | "credit-card-secure"
  | "credit-card-tap-chip"
  | "crop"
  | "currency-convert"
  | "cursor"
  | "cursor-banner"
  | "cursor-option"
  | "data-presentation"
  | "data-table"
  | "database"
  | "database-add"
  | "database-connect"
  | "delete"
  | "delivered"
  | "delivery"
  | "desktop"
  | "disabled"
  | "disabled-filled"
  | "discount"
  | "discount-add"
  | "discount-automatic"
  | "discount-code"
  | "discount-remove"
  | "dns-settings"
  | "dock-floating"
  | "dock-side"
  | "domain"
  | "domain-landing-page"
  | "domain-new"
  | "domain-redirect"
  | "download"
  | "drag-drop"
  | "drag-handle"
  | "drawer"
  | "duplicate"
  | "email"
  | "email-follow-up"
  | "email-newsletter"
  | "empty"
  | "enabled"
  | "enter"
  | "envelope"
  | "envelope-soft-pack"
  | "eraser"
  | "exchange"
  | "exit"
  | "export"
  | "external"
  | "eye-check-mark"
  | "eye-dropper"
  | "eye-dropper-list"
  | "eye-first"
  | "eyeglasses"
  | "fav"
  | "favicon"
  | "file"
  | "file-list"
  | "filter"
  | "filter-active"
  | "flag"
  | "flip-horizontal"
  | "flip-vertical"
  | "flower"
  | "folder"
  | "folder-add"
  | "folder-down"
  | "folder-remove"
  | "folder-up"
  | "food"
  | "foreground"
  | "forklift"
  | "forms"
  | "games"
  | "gauge"
  | "geolocation"
  | "gift"
  | "gift-card"
  | "git-branch"
  | "git-commit"
  | "git-repository"
  | "globe"
  | "globe-asia"
  | "globe-europe"
  | "globe-lines"
  | "globe-list"
  | "graduation-hat"
  | "grid"
  | "hashtag"
  | "hashtag-decimal"
  | "hashtag-list"
  | "heart"
  | "hide"
  | "hide-filled"
  | "home"
  | "home-filled"
  | "icons"
  | "identity-card"
  | "image"
  | "image-add"
  | "image-alt"
  | "image-explore"
  | "image-magic"
  | "image-none"
  | "image-with-text-overlay"
  | "images"
  | "import"
  | "in-progress"
  | "incentive"
  | "incoming"
  | "info-filled"
  | "inheritance"
  | "inventory"
  | "inventory-edit"
  | "inventory-list"
  | "inventory-transfer"
  | "inventory-updated"
  | "iq"
  | "key"
  | "keyboard"
  | "keyboard-filled"
  | "keyboard-hide"
  | "keypad"
  | "label-printer"
  | "language"
  | "language-translate"
  | "layout-block"
  | "layout-buy-button"
  | "layout-buy-button-horizontal"
  | "layout-buy-button-vertical"
  | "layout-column-1"
  | "layout-columns-2"
  | "layout-columns-3"
  | "layout-footer"
  | "layout-header"
  | "layout-logo-block"
  | "layout-popup"
  | "layout-rows-2"
  | "layout-section"
  | "layout-sidebar-left"
  | "layout-sidebar-right"
  | "lightbulb"
  | "link-list"
  | "list-bulleted"
  | "list-bulleted-filled"
  | "list-numbered"
  | "live"
  | "live-critical"
  | "live-none"
  | "location"
  | "location-none"
  | "lock"
  | "map"
  | "markets"
  | "markets-euro"
  | "markets-rupee"
  | "markets-yen"
  | "maximize"
  | "measurement-size"
  | "measurement-size-list"
  | "measurement-volume"
  | "measurement-volume-list"
  | "measurement-weight"
  | "measurement-weight-list"
  | "media-receiver"
  | "megaphone"
  | "mention"
  | "menu"
  | "menu-filled"
  | "menu-horizontal"
  | "menu-vertical"
  | "merge"
  | "metafields"
  | "metaobject"
  | "metaobject-list"
  | "metaobject-reference"
  | "microphone"
  | "microphone-muted"
  | "minimize"
  | "minus"
  | "minus-circle"
  | "mobile"
  | "money-none"
  | "money-split"
  | "moon"
  | "nature"
  | "note"
  | "note-add"
  | "notification"
  | "number-one"
  | "order"
  | "order-batches"
  | "order-draft"
  | "order-filled"
  | "order-first"
  | "order-fulfilled"
  | "order-repeat"
  | "order-unfulfilled"
  | "orders-status"
  | "organization"
  | "outdent"
  | "outgoing"
  | "package"
  | "package-cancel"
  | "package-fulfilled"
  | "package-on-hold"
  | "package-reassign"
  | "package-returned"
  | "page"
  | "page-add"
  | "page-attachment"
  | "page-clock"
  | "page-down"
  | "page-heart"
  | "page-list"
  | "page-reference"
  | "page-remove"
  | "page-report"
  | "page-up"
  | "pagination-end"
  | "pagination-start"
  | "paint-brush-flat"
  | "paint-brush-round"
  | "paper-check"
  | "partially-complete"
  | "passkey"
  | "paste"
  | "pause-circle"
  | "payment"
  | "payment-capture"
  | "payout"
  | "payout-dollar"
  | "payout-euro"
  | "payout-pound"
  | "payout-rupee"
  | "payout-yen"
  | "person"
  | "person-add"
  | "person-exit"
  | "person-filled"
  | "person-list"
  | "person-lock"
  | "person-remove"
  | "person-segment"
  | "personalized-text"
  | "phablet"
  | "phone"
  | "phone-down"
  | "phone-down-filled"
  | "phone-in"
  | "phone-out"
  | "pin"
  | "pin-remove"
  | "plan"
  | "play"
  | "play-circle"
  | "plus"
  | "plus-circle"
  | "plus-circle-down"
  | "plus-circle-filled"
  | "plus-circle-up"
  | "point-of-sale"
  | "point-of-sale-register"
  | "price-list"
  | "print"
  | "product-add"
  | "product-cost"
  | "product-filled"
  | "product-list"
  | "product-reference"
  | "product-remove"
  | "product-return"
  | "product-unavailable"
  | "profile"
  | "profile-filled"
  | "question-circle"
  | "question-circle-filled"
  | "radio-control"
  | "receipt"
  | "receipt-dollar"
  | "receipt-euro"
  | "receipt-folded"
  | "receipt-paid"
  | "receipt-pound"
  | "receipt-refund"
  | "receipt-rupee"
  | "receipt-yen"
  | "receivables"
  | "redo"
  | "referral-code"
  | "refresh"
  | "remove-background"
  | "reorder"
  | "replay"
  | "reset"
  | "return"
  | "reward"
  | "rocket"
  | "rotate-left"
  | "rotate-right"
  | "sandbox"
  | "save"
  | "savings"
  | "scan-qr-code"
  | "search-add"
  | "search-list"
  | "search-recent"
  | "search-resource"
  | "send"
  | "settings"
  | "share"
  | "shield-check-mark"
  | "shield-none"
  | "shield-pending"
  | "shield-person"
  | "shipping-label"
  | "shipping-label-cancel"
  | "shopcodes"
  | "slideshow"
  | "smiley-happy"
  | "smiley-joy"
  | "smiley-neutral"
  | "smiley-sad"
  | "social-ad"
  | "social-post"
  | "sort"
  | "sort-ascending"
  | "sort-descending"
  | "sound"
  | "sports"
  | "star"
  | "star-circle"
  | "star-filled"
  | "star-half"
  | "star-list"
  | "status"
  | "status-active"
  | "stop-circle"
  | "store"
  | "store-import"
  | "store-managed"
  | "store-online"
  | "sun"
  | "table"
  | "table-masonry"
  | "tablet"
  | "target"
  | "tax"
  | "team"
  | "text"
  | "text-align-center"
  | "text-align-left"
  | "text-align-right"
  | "text-block"
  | "text-bold"
  | "text-color"
  | "text-font"
  | "text-font-list"
  | "text-grammar"
  | "text-in-columns"
  | "text-in-rows"
  | "text-indent"
  | "text-indent-remove"
  | "text-italic"
  | "text-quote"
  | "text-title"
  | "text-underline"
  | "text-with-image"
  | "theme"
  | "theme-edit"
  | "theme-store"
  | "theme-template"
  | "three-d-environment"
  | "thumbs-down"
  | "thumbs-up"
  | "tip-jar"
  | "toggle-off"
  | "toggle-on"
  | "transaction"
  | "transaction-fee-add"
  | "transaction-fee-dollar"
  | "transaction-fee-euro"
  | "transaction-fee-pound"
  | "transaction-fee-rupee"
  | "transaction-fee-yen"
  | "transfer"
  | "transfer-in"
  | "transfer-internal"
  | "transfer-out"
  | "truck"
  | "undo"
  | "unknown-device"
  | "unlock"
  | "upload"
  | "variant-list"
  | "video"
  | "video-list"
  | "view"
  | "viewport-narrow"
  | "viewport-short"
  | "viewport-tall"
  | "viewport-wide"
  | "wallet"
  | "wand"
  | "watch"
  | "wifi"
  | "work"
  | "work-list"
  | "wrench"
  | "x"
  | "x-circle"
  | "x-circle-filled"
  | (string & {});

type LabelAccessibilityVisibility = "visible" | "exclusive";

// Props interface
interface Props {
  autocomplete?: AutocompleteValue;
  defaultValue?: string;
  details?: string;
  disabled?: boolean;
  error?: string;
  icon?: IconType;
  id?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  prefix?: string;
  readOnly?: boolean;
  required?: boolean;
  suffix?: string;
  value?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  blur: [event: Event];
  change: [event: Event];
  focus: [event: Event];
  input: [event: Event];
}>();
</script>
