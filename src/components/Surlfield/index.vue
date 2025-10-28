<template>
  <s-urlfield
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
  </s-urlfield>
</template>

<script setup lang="ts">
// Type definitions
type URLAutocompleteField = 'url' | 'photo' | 'impp' | 'home impp' | 'mobile impp' | 'fax impp' | 'pager impp';

type AutocompleteType = 
  | "on" 
  | "off" 
  | `section-${string} url` 
  | `section-${string} photo` 
  | `section-${string} impp` 
  | `section-${string} home impp` 
  | `section-${string} mobile impp` 
  | `section-${string} fax impp` 
  | `section-${string} pager impp` 
  | "shipping url" 
  | "shipping photo" 
  | "shipping impp" 
  | "shipping home impp" 
  | "shipping mobile impp" 
  | "shipping fax impp" 
  | "shipping pager impp" 
  | "billing url" 
  | "billing photo" 
  | "billing impp" 
  | "billing home impp" 
  | "billing mobile impp" 
  | "billing fax impp" 
  | "billing pager impp" 
  | `section-${string} shipping url` 
  | `section-${string} shipping photo` 
  | `section-${string} shipping impp` 
  | `section-${string} shipping home impp` 
  | `section-${string} shipping mobile impp` 
  | `section-${string} shipping fax impp` 
  | `section-${string} shipping pager impp` 
  | `section-${string} billing url` 
  | `section-${string} billing photo` 
  | `section-${string} billing impp` 
  | `section-${string} billing home impp` 
  | `section-${string} billing mobile impp` 
  | `section-${string} billing fax impp` 
  | `section-${string} billing pager impp` 
  | URLAutocompleteField;

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
