<template>
  <s-paragraph
    :accessibilityVisibility="accessibilityVisibility"
    :color="color"
    :dir="dir"
    :fontVariantNumeric="fontVariantNumeric"
    :lineClamp="lineClamp"
    :tone="tone"
  >
    <slot />
  </s-paragraph>
</template>

<script setup lang="ts">
// Type definitions for union types
type AccessibilityVisibility = "visible" | "hidden" | "exclusive";
type Color = "base" | "subdued";
type Dir = "" | "auto" | "ltr" | "rtl";
type FontVariantNumeric = "auto" | "normal" | "tabular-nums";
type Tone = "info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution";

// Props interface
interface Props {
  accessibilityVisibility?: AccessibilityVisibility;
  color?: Color;
  dir?: Dir;
  fontVariantNumeric?: FontVariantNumeric;
  lineClamp?: number;
  tone?: Tone;
}

defineProps<Props>();
</script>
