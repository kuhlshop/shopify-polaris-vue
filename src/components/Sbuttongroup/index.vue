<template>
  <s-buttongroup
    :accessibility-label="accessibilityLabel"
    :gap="gap"
  >
    <slot name="primary-action" />
    <slot name="secondary-actions" />
    <slot />
  </s-buttongroup>
</template>

<script setup lang="ts">
// Type definitions for union types
type Gap = "base" | "none";

// Props interface
interface Props {
  accessibilityLabel?: string;
  gap?: Gap;
}

defineProps<Props>();

// Events
defineEmits<{}>();
</script>
