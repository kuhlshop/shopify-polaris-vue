<template>
  <s-buttongroup
    :accessibility-label="accessibilityLabel"
    :gap="gap"
  >
    <slot />
    <slot name="primary-action" slot="primary-action" />
    <slot name="secondary-actions" slot="secondary-actions" />
  </s-buttongroup>
</template>

<script setup lang="ts">
// Type definitions
type Gap = "base" | "none";

// Props interface
interface Props {
  accessibilityLabel?: string;
  gap?: Gap;
}

defineProps<Props>();
</script>
