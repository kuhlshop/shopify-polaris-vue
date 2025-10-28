<template>
  <s-avatar
    :alt="alt"
    :initials="initials"
    :size="size"
    :src="src"
    @error="$emit('error', $event)"
    @load="$emit('load', $event)"
  >
    <slot />
  </s-avatar>
</template>

<script setup lang="ts">
// Type definitions
type AvatarSize = "small" | "small-200" | "base" | "large" | "large-200";

// Props interface
interface Props {
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  src?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  error: [event: Event];
  load: [event: Event];
}>();
</script>
