<template>
  <s-select
    :details="details"
    :disabled="disabled"
    :error="error"
    :icon="icon"
    :id="id"
    :label="label"
    :label-accessibility-visibility="labelAccessibilityVisibility"
    :name="name"
    :placeholder="placeholder"
    :required="required"
    :value="value"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-select>
</template>

<script setup lang="ts">
// Type definitions for union types
type IconType = "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle";

type LabelAccessibilityVisibility = "visible" | "exclusive";

// Props interface
interface Props {
  details?: string;
  disabled?: boolean;
  error?: string;
  icon?: IconType;
  id?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  name?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  change: [event: Event];
  input: [event: Event];
}>();
</script>
