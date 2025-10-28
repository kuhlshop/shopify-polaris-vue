<template>
  <s-textfield
    :autocomplete="autocomplete"
    :default-value="defaultValue"
    :details="details"
    :disabled="disabled"
    :error="error"
    :icon="icon"
    :id="id"
    :label="label"
    :label-accessibility-visibility="labelAccessibilityVisibility"
    :max-length="maxLength"
    :min-length="minLength"
    :name="name"
    :placeholder="placeholder"
    :prefix="prefix"
    :read-only="readOnly"
    :required="required"
    :suffix="suffix"
    :value="value"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
    <slot name="accessory" slot="accessory" />
  </s-textfield>
</template>

<script setup lang="ts">
type LabelAccessibilityVisibility = "visible" | "exclusive";

interface Props {
  autocomplete?: string;
  defaultValue?: string;
  details?: string;
  disabled?: boolean;
  error?: string;
  icon?: string;
  id?: string;
  label?: string;
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  maxLength?: number;
  minLength?: number;
  name?: string;
  placeholder?: string;
  prefix?: string;
  readOnly?: boolean;
  required?: boolean;
  suffix?: string;
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
