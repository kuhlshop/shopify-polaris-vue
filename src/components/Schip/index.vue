<template>
  <s-chip
    :accessibilityLabel="accessibilityLabel"
    :color="color"
  >
    <slot name="graphic" slot="graphic"></slot>
    <slot></slot>
  </s-chip>
</template>

<script setup lang="ts">
type ColorKeyword = 'subdued' | 'base' | 'strong';

interface Props {
  accessibilityLabel?: string;
  color?: ColorKeyword;
}

defineProps<Props>();
</script>
