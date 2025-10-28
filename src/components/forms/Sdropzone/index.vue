<template>
  <s-dropzone
    :accept="accept"
    :accessibilityLabel="accessibilityLabel"
    :disabled="disabled"
    :error="error"
    :label="label"
    :labelAccessibilityVisibility="labelAccessibilityVisibility"
    :multiple="multiple"
    :name="name"
    :required="required"
    :value="value"
    @change="$emit('change', $event)"
    @droprejected="$emit('droprejected', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-dropzone>
</template>

<script setup lang="ts">
// Type definitions
type LabelAccessibilityVisibility = "visible" | "exclusive";

// Props interface
interface Props {
  accept?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  multiple?: boolean;
  name?: string;
  required?: boolean;
  value?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  change: [event: Event];
  droprejected: [event: Event];
  input: [event: Event];
}>();
</script>
