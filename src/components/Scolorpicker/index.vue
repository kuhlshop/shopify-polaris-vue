<template>
  <s-colorpicker
    :alpha="alpha"
    :default-value="defaultValue"
    :form-reset-callback="formResetCallback"
    :name="name"
    :value="value"
    @change="$emit('change', $event)"
    @input="$emit('input', $event)"
  >
    <slot />
  </s-colorpicker>
</template>

<script setup lang="ts">
// Props interface
interface Props {
  alpha?: boolean;
  defaultValue?: string;
  formResetCallback?: () => void;
  name?: string;
  value?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  change: [event: Event];
  input: [event: Event];
}>();
</script>
