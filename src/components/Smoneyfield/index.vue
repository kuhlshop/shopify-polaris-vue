<template>
  <s-moneyfield
    :autocomplete="autocomplete"
    :default-value="defaultValue"
    :details="details"
    :disabled="disabled"
    :error="error"
    :id="id"
    :label="label"
    :label-accessibility-visibility="labelAccessibilityVisibility"
    :max="max"
    :min="min"
    :name="name"
    :placeholder="placeholder"
    :read-only="readOnly"
    :required="required"
    :value="value"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-moneyfield>
</template>

<script setup lang="ts">
type LabelAccessibilityVisibility = "visible" | "exclusive";

interface Props {
  autocomplete?: string;
  defaultValue?: string;
  details?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
}

defineProps<Props>();

defineEmits<{
  blur: [event: Event];
  change: [event: Event];
  focus: [event: Event];
  input: [event: Event];
}>();
</script>
