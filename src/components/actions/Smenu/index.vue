<template>
  <s-menu
    :accessibilityLabel="accessibilityLabel"
  >
    <slot />
  </s-menu>
</template>

<script setup lang="ts">
// Props interface
interface Props {
  accessibilityLabel?: string;
}

defineProps<Props>();
</script>
