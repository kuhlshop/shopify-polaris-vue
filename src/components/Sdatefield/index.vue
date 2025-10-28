<template>
  <s-datefield
    :allow="allow"
    :allowDays="allowDays"
    :autocomplete="autocomplete"
    :defaultValue="defaultValue"
    :defaultView="defaultView"
    :details="details"
    :disabled="disabled"
    :disallow="disallow"
    :disallowDays="disallowDays"
    :error="error"
    :id="id"
    :label="label"
    :labelAccessibilityVisibility="labelAccessibilityVisibility"
    :name="name"
    :placeholder="placeholder"
    :readOnly="readOnly"
    :required="required"
    :value="value"
    :view="view"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
    @invalid="$emit('invalid', $event)"
    @viewchange="$emit('viewchange', $event)"
  >
    <slot />
  </s-datefield>
</template>

<script setup lang="ts">
type DateAutocompleteField = 'bday-day' | 'bday-month' | 'bday-year' | 'bday' | 'cc-expiry-month' | 'cc-expiry-year' | 'cc-expiry';
type LabelAccessibilityVisibility = "visible" | "exclusive";

interface Props {
  allow?: string;
  allowDays?: string;
  autocomplete?: DateAutocompleteField;
  defaultValue?: string;
  defaultView?: string;
  details?: string;
  disabled?: boolean;
  disallow?: string;
  disallowDays?: string;
  error?: string;
  id?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
  view?: string;
}

defineProps<Props>();

defineEmits<{
  blur: [event: Event];
  change: [event: Event];
  focus: [event: Event];
  input: [event: Event];
  invalid: [event: Event];
  viewchange: [event: Event];
}>();
</script>
