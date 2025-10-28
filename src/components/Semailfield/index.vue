<template>
  <s-emailfield
    :autocomplete="autocomplete"
    :default-value="defaultValue"
    :details="details"
    :disabled="disabled"
    :error="error"
    :id="id"
    :label="label"
    :label-accessibility-visibility="labelAccessibilityVisibility"
    :max-length="maxLength"
    :min-length="minLength"
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
  </s-emailfield>
</template>

<script setup lang="ts">
type EmailAutocompleteField = 'email' | 'home email' | 'mobile email' | 'fax email' | 'pager email';

type AutocompleteType = 
  | "on" 
  | "off" 
  | EmailAutocompleteField 
  | `section-${string} email` 
  | `section-${string} home email` 
  | `section-${string} mobile email` 
  | `section-${string} fax email` 
  | `section-${string} pager email` 
  | "shipping email" 
  | "shipping home email" 
  | "shipping mobile email" 
  | "shipping fax email" 
  | "shipping pager email" 
  | "billing email" 
  | "billing home email" 
  | "billing mobile email" 
  | "billing fax email" 
  | "billing pager email" 
  | `section-${string} shipping email` 
  | `section-${string} shipping home email` 
  | `section-${string} shipping mobile email` 
  | `section-${string} shipping fax email` 
  | `section-${string} shipping pager email` 
  | `section-${string} billing email` 
  | `section-${string} billing home email` 
  | `section-${string} billing mobile email` 
  | `section-${string} billing fax email` 
  | `section-${string} billing pager email`;

type LabelAccessibilityVisibility = "visible" | "exclusive";

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

defineEmits<{
  blur: [event: Event];
  change: [event: Event];
  focus: [event: Event];
  input: [event: Event];
}>();
</script>
