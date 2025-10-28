<template>
  <s-datepicker
    :allow="allow"
    :allow-days="allowDays"
    :default-value="defaultValue"
    :default-view="defaultView"
    :disallow="disallow"
    :disallow-days="disallowDays"
    :name="name"
    :type="type"
    :value="value"
    :view="view"
    @blur="$emit('blur', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus', $event)"
    @input="$emit('input', $event)"
    @viewchange="$emit('viewchange', $event)"
  >
    <slot />
  </s-datepicker>
</template>

<script setup lang="ts">
// Type definitions for union types if needed
type DatePickerType = "single" | "range";

// Props interface
interface Props {
  allow?: string;
  allowDays?: string;
  defaultValue?: string;
  defaultView?: string;
  disallow?: string;
  disallowDays?: string;
  name?: string;
  type?: DatePickerType;
  value?: string;
  view?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  blur: [event: Event];
  change: [event: Event];
  focus: [event: Event];
  input: [event: Event];
  viewchange: [event: Event];
}>();
</script>
