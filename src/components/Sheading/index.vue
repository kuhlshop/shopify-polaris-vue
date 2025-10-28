<template>
  <s-heading
    :accessibilityRole="accessibilityRole"
    :accessibilityVisibility="accessibilityVisibility"
    :lineClamp="lineClamp"
  >
    <slot />
  </s-heading>
</template>

<script setup lang="ts">
// Type definitions for union types
type AccessibilityRole = "none" | "presentation" | "heading";
type AccessibilityVisibility = "visible" | "hidden" | "exclusive";

// Props interface
interface Props {
  accessibilityRole?: AccessibilityRole;
  accessibilityVisibility?: AccessibilityVisibility;
  lineClamp?: number;
}

defineProps<Props>();
</script>
