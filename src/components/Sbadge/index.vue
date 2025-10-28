<template>
  <s-badge
    :color="color"
    :icon="icon"
    :size="size"
    :tone="tone"
  >
    <slot />
  </s-badge>
</template>

<script setup lang="ts">
// Type definitions for union types
type ColorType = "base" | "strong";
type IconType = "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle";
type SizeType = "base" | "large" | "large-100";
type ToneType = "info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution";

// Props interface
interface Props {
  color?: ColorType;
  icon?: IconType;
  size?: SizeType;
  tone?: ToneType;
}

defineProps<Props>();
</script>
