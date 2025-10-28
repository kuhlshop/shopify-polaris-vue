<template>
  <s-icon
    :color="color"
    :interest-for="interestFor"
    :size="size"
    :tone="tone"
    :type="type"
  >
    <slot />
  </s-icon>
</template>

<script setup lang="ts">
// Type definitions for union types
type ColorType = "base" | "subdued";
type SizeType = "small" | "base";
type ToneType = "info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution";

// Props interface
interface Props {
  color?: ColorType;
  interestFor?: string;
  size?: SizeType;
  tone?: ToneType;
  type?: string;
}

defineProps<Props>();
</script>
