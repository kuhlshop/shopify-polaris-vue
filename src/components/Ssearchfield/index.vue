<template>
  <s-searchfield
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
  </s-searchfield>
</template>

<script setup lang="ts">
// Type definitions
type TextAutocompleteField = 'language' | 'organization' | 'additional-name' | 'address-level1' | 'address-level2' | 'address-level3' | 'address-level4' | 'address-line1' | 'address-line2' | 'address-line3' | 'country-name' | 'country' | 'family-name' | 'given-name' | 'honorific-prefix' | 'honorific-suffix' | 'name' | 'nickname' | 'one-time-code' | 'organization-title' | 'postal-code' | 'sex' | 'street-address' | 'transaction-currency' | 'username' | 'cc-additional-name' | 'cc-family-name' | 'cc-given-name' | 'cc-name' | 'cc-type';

type AutocompleteType = "on" | "off" | TextAutocompleteField | `section-${string} one-time-code` | "shipping one-time-code" | "billing one-time-code" | `section-${string} shipping one-time-code` | `section-${string} billing one-time-code` | `section-${string} language` | `section-${string} organization` | `section-${string} additional-name` | `section-${string} address-level1` | `section-${string} address-level2` | `section-${string} address-level3` | `section-${string} address-level4` | `section-${string} address-line1` | `section-${string} address-line2` | `section-${string} address-line3` | `section-${string} country-name` | `section-${string} country` | `section-${string} family-name` | `section-${string} given-name` | `section-${string} honorific-prefix` | `section-${string} honorific-suffix` | `section-${string} name` | `section-${string} nickname` | `section-${string} organization-title` | `section-${string} postal-code` | `section-${string} sex` | `section-${string} street-address` | `section-${string} transaction-currency` | `section-${string} username` | `section-${string} cc-additional-name` | `section-${string} cc-family-name` | `section-${string} cc-given-name` | `section-${string} cc-name` | `section-${string} cc-type` | "shipping language" | "shipping organization" | "shipping additional-name" | "shipping address-level1" | "shipping address-level2" | "shipping address-level3" | "shipping address-level4" | "shipping address-line1" | "shipping address-line2" | "shipping address-line3" | "shipping country-name" | "shipping country" | "shipping family-name" | "shipping given-name" | "shipping honorific-prefix" | "shipping honorific-suffix" | "shipping name" | "shipping nickname" | "shipping organization-title" | "shipping postal-code" | "shipping sex" | "shipping street-address" | "shipping transaction-currency" | "shipping username" | "shipping cc-additional-name" | "shipping cc-family-name" | "shipping cc-given-name" | "shipping cc-name" | "shipping cc-type" | "billing language" | "billing organization" | "billing additional-name" | "billing address-level1" | "billing address-level2" | "billing address-level3" | "billing address-level4" | "billing address-line1" | "billing address-line2" | "billing address-line3" | "billing country-name" | "billing country" | "billing family-name" | "billing given-name" | "billing honorific-prefix" | "billing honorific-suffix" | "billing name" | "billing nickname" | "billing organization-title" | "billing postal-code" | "billing sex" | "billing street-address" | "billing transaction-currency" | "billing username" | "billing cc-additional-name" | "billing cc-family-name" | "billing cc-given-name" | "billing cc-name" | "billing cc-type" | `section-${string} shipping language` | `section-${string} shipping organization` | `section-${string} shipping additional-name` | `section-${string} shipping address-level1` | `section-${string} shipping address-level2` | `section-${string} shipping address-level3` | `section-${string} shipping address-level4` | `section-${string} shipping address-line1` | `section-${string} shipping address-line2` | `section-${string} shipping address-line3` | `section-${string} shipping country-name` | `section-${string} shipping country` | `section-${string} shipping family-name` | `section-${string} shipping given-name` | `section-${string} shipping honorific-prefix` | `section-${string} shipping honorific-suffix` | `section-${string} shipping name` | `section-${string} shipping nickname` | `section-${string} shipping organization-title` | `section-${string} shipping postal-code` | `section-${string} shipping sex` | `section-${string} shipping street-address` | `section-${string} shipping transaction-currency` | `section-${string} shipping username` | `section-${string} shipping cc-additional-name` | `section-${string} shipping cc-family-name` | `section-${string} shipping cc-given-name` | `section-${string} shipping cc-name` | `section-${string} shipping cc-type` | `section-${string} billing language` | `section-${string} billing organization` | `section-${string} billing additional-name` | `section-${string} billing address-level1` | `section-${string} billing address-level2` | `section-${string} billing address-level3` | `section-${string} billing address-level4` | `section-${string} billing address-line1` | `section-${string} billing address-line2` | `section-${string} billing address-line3` | `section-${string} billing country-name` | `section-${string} billing country` | `section-${string} billing family-name` | `section-${string} billing given-name` | `section-${string} billing honorific-prefix` | `section-${string} billing honorific-suffix` | `section-${string} billing name` | `section-${string} billing nickname` | `section-${string} billing organization-title` | `section-${string} billing postal-code` | `section-${string} billing sex` | `section-${string} billing street-address` | `section-${string} billing transaction-currency` | `section-${string} billing username` | `section-${string} billing cc-additional-name` | `section-${string} billing cc-family-name` | `section-${string} billing cc-given-name` | `section-${string} billing cc-name` | `section-${string} billing cc-type`;

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
