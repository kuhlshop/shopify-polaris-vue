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
type Gap = "base" | "none";

interface Props {
  accessibilityLabel?: string;
  gap?: Gap;
}

defineProps<Props>();
</script>
