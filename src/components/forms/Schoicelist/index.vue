<template>
  <s-choicelist
    :details="details"
    :disabled="disabled"
    :error="error"
    :label="label"
    :labelAccessibilityVisibility="labelAccessibilityVisibility"
    :multiple="multiple"
    :name="name"
    :values="values"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
    <template v-if="$slots.details" #details>
      <slot name="details" />
    </template>
  </s-choicelist>
</template>

<script setup lang="ts">
// Type definitions for union types
type LabelAccessibilityVisibility = "visible" | "exclusive";

// Props interface
interface Props {
  details?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  multiple?: boolean;
  name?: string;
  values?: string[];
}

defineProps<Props>();

// Events
defineEmits<{
  change: [event: Event];
  input: [event: Event];
}>();
</script>
