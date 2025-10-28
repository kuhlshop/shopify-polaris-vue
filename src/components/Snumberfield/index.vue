<template>
  <s-numberfield
    :autocomplete="autocomplete"
    :default-value="defaultValue"
    :details="details"
    :disabled="disabled"
    :error="error"
    :id="id"
    :input-mode="inputMode"
    :label="label"
    :label-accessibility-visibility="labelAccessibilityVisibility"
    :max="max"
    :min="min"
    :name="name"
    :placeholder="placeholder"
    :prefix="prefix"
    :read-only="readOnly"
    :required="required"
    :step="step"
    :suffix="suffix"
    :value="value"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-numberfield>
</template>

<script setup lang="ts">
// Type definitions
type NumberAutocompleteField = 'one-time-code' | 'cc-number' | 'cc-csc';

type AutocompleteType =
  | "on"
  | "off"
  | NumberAutocompleteField
  | `section-${string} one-time-code`
  | `section-${string} cc-number`
  | `section-${string} cc-csc`
  | "shipping one-time-code"
  | "shipping cc-number"
  | "shipping cc-csc"
  | "billing one-time-code"
  | "billing cc-number"
  | "billing cc-csc"
  | `section-${string} shipping one-time-code`
  | `section-${string} shipping cc-number`
  | `section-${string} shipping cc-csc`
  | `section-${string} billing one-time-code`
  | `section-${string} billing cc-number`
  | `section-${string} billing cc-csc`;

type InputModeType = "decimal" | "numeric";

type LabelAccessibilityVisibilityType = "visible" | "exclusive";

// Props interface
interface Props {
  autocomplete?: AutocompleteType;
  defaultValue?: string;
  details?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  inputMode?: InputModeType;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibilityType;
  max?: number;
  min?: number;
  name?: string;
  placeholder?: string;
  prefix?: string;
  readOnly?: boolean;
  required?: boolean;
  step?: number;
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
