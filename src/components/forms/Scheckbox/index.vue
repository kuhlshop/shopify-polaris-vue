<template>
  <s-checkbox
    :accessibility-label="accessibilityLabel"
    :checked="checked"
    :default-checked="defaultChecked"
    :default-indeterminate="defaultIndeterminate"
    :details="details"
    :disabled="disabled"
    :error="error"
    :id="id"
    :indeterminate="indeterminate"
    :label="label"
    :name="name"
    :required="required"
    :value="value"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-checkbox>
</template>

<script setup lang="ts">
interface Props {
  accessibilityLabel?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  defaultIndeterminate?: boolean;
  details?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  indeterminate?: boolean;
  label?: string;
  name?: string;
  required?: boolean;
  value?: string;
}

defineProps<Props>();

defineEmits<{
  change: [event: Event];
  input: [event: Event];
}>();
</script>
