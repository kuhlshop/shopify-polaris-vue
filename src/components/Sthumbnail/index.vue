<template>
  <s-thumbnail
    :alt="alt"
    :size="size"
    :src="src"
    @error="$emit('error', $event)"
    @load="$emit('load', $event)"
  >
    <slot />
  </s-thumbnail>
</template>

<script setup lang="ts">
// Type definitions
type ThumbnailSize = "small" | "small-200" | "small-100" | "base" | "large" | "large-100";

// Props interface
interface Props {
  alt?: string;
  size?: ThumbnailSize;
  src?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  error: [event: Event];
  load: [event: Event];
}>();
</script>
