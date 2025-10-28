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
type ColorType = "base" | "strong";
type DirectionType = "inline" | "block";

// Props interface
interface Props {
  color?: ColorType;
  direction?: DirectionType;
}

defineProps<Props>();
</script>
