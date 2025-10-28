<template>
  <s-choicelist
    :details="details"
    :disabled="disabled"
    :error="error"
    :label="label"
    :label-accessibility-visibility="labelAccessibilityVisibility"
    :multiple="multiple"
    :name="name"
    :values="values"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-choicelist>
</template>

<script setup lang="ts">
type LabelAccessibilityVisibility = "visible" | "exclusive";

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

defineEmits<{
  change: [event: Event];
  input: [event: Event];
}>();
</script>
