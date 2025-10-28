<template>
  <s-button
    :accessibilityLabel="accessibilityLabel"
    :command="command"
    :commandFor="commandFor"
    :disabled="disabled"
    :download="download"
    :href="href"
    :icon="icon"
    :interestFor="interestFor"
    :loading="loading"
    :target="target"
    :tone="tone"
    :type="type"
    :variant="variant"
    @blur="$emit('blur', $event)"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
  >
    <slot />
  </s-button>
</template>

<script setup lang="ts">
// Type definitions
type CommandType = '--auto' | '--show' | '--hide' | '--toggle';
type IconType = "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle" | "plus" | "order" | "duplicate" | "view" | "menu-horizontal" | string;
type TargetType = "auto" | "_blank" | "_self" | "_parent" | "_top" | string;
type ToneType = "critical" | "auto" | "neutral";
type ButtonType = "button" | "reset" | "submit";
type VariantType = "auto" | "primary" | "secondary" | "tertiary";

// Props interface
interface Props {
  accessibilityLabel?: string;
  command?: CommandType;
  commandFor?: string;
  disabled?: boolean;
  download?: string;
  href?: string;
  icon?: IconType;
  interestFor?: string;
  loading?: boolean;
  target?: TargetType;
  tone?: ToneType;
  type?: ButtonType;
  variant?: VariantType;
}

defineProps<Props>();

// Events
defineEmits<{
  blur: [event: Event];
  click: [event: Event];
  focus: [event: Event];
}>();
</script>
