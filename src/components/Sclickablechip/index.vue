<template>
  <s-clickablechip
    :accessibility-label="accessibilityLabel"
    :color="color"
    :disabled="disabled"
    :hidden="hidden"
    :href="href"
    :removable="removable"
    @afterhide="$emit('afterhide', $event)"
    @click="$emit('click', $event)"
    @remove="$emit('remove', $event)"
  >
    <slot name="graphic" slot="graphic" />
    <slot />
  </s-clickablechip>
</template>

<script setup lang="ts">
// Type definitions
type ColorKeyword = 'subdued' | 'base' | 'strong';

// Props interface
interface Props {
  accessibilityLabel?: string;
  color?: ColorKeyword;
  disabled?: boolean;
  hidden?: boolean;
  href?: string;
  removable?: boolean;
}

defineProps<Props>();

// Events
defineEmits<{
  afterhide: [event: Event];
  click: [event: Event];
  remove: [event: Event];
}>();
</script>
