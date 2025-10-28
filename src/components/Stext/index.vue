<template>
  <s-text
    :accessibility-visibility="accessibilityVisibility"
    :color="color"
    :dir="dir"
    :font-variant-numeric="fontVariantNumeric"
    :interest-for="interestFor"
    :tone="tone"
    :type="type"
  >
    <slot />
  </s-text>
</template>

<script setup lang="ts">
// Type definitions for union types
type AccessibilityVisibility = "visible" | "hidden" | "exclusive";
type Color = "base" | "subdued";
type Dir = "" | "auto" | "ltr" | "rtl";
type FontVariantNumeric = "auto" | "normal" | "tabular-nums";
type Tone = "info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution";
type Type = "strong" | "generic" | "address" | "redundant";

// Props interface
interface Props {
  accessibilityVisibility?: AccessibilityVisibility;
  color?: Color;
  dir?: Dir;
  fontVariantNumeric?: FontVariantNumeric;
  interestFor?: string;
  tone?: Tone;
  type?: Type;
}

defineProps<Props>();
</script>
