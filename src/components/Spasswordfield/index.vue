<template>
  <s-passwordfield
    :autocomplete="autocomplete"
    :defaultValue="defaultValue"
    :details="details"
    :disabled="disabled"
    :error="error"
    :id="id"
    :label="label"
    :labelAccessibilityVisibility="labelAccessibilityVisibility"
    :maxLength="maxLength"
    :minLength="minLength"
    :name="name"
    :placeholder="placeholder"
    :readOnly="readOnly"
    :required="required"
    :value="value"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-passwordfield>
</template>

<script setup lang="ts">
// Type definitions
type PasswordAutocompleteField = 'current-password' | 'new-password';

type AutocompleteType = 
  | "on" 
  | "off" 
  | PasswordAutocompleteField 
  | `section-${string} current-password` 
  | `section-${string} new-password` 
  | "shipping current-password" 
  | "shipping new-password" 
  | "billing current-password" 
  | "billing new-password" 
  | `section-${string} shipping current-password` 
  | `section-${string} shipping new-password` 
  | `section-${string} billing current-password` 
  | `section-${string} billing new-password`;

type LabelAccessibilityVisibility = "visible" | "exclusive";

// Props interface
interface Props {
  autocomplete?: AutocompleteType;
  defaultValue?: string;
  details?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
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
