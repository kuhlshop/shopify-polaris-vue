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
type AccessibilityRole = "none" | "presentation" | "heading";
type AccessibilityVisibility = "visible" | "hidden" | "exclusive";

interface Props {
  accessibilityRole?: AccessibilityRole;
  accessibilityVisibility?: AccessibilityVisibility;
  lineClamp?: number;
}

defineProps<Props>();
</script>
