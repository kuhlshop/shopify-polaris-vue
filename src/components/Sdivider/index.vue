<template>
  <s-divider
    :color="color"
    :direction="direction"
  >
    <slot />
  </s-divider>
</template>

<script setup lang="ts">
// Type definitions for union types
type Color = "base" | "strong";
type Direction = "inline" | "block";

// Props interface
interface Props {
  color?: Color;
  direction?: Direction;
}

defineProps<Props>();
</script>
