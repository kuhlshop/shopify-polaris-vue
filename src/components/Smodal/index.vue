<template>
  <s-modal
    :accessibility-label="accessibilityLabel"
    :heading="heading"
    :hide-overlay="hideOverlay"
    :padding="padding"
    :show-overlay="showOverlay"
    :size="size"
    :toggle-overlay="toggleOverlay"
    @afterhide="$emit('afterhide', $event)"
    @aftershow="$emit('aftershow', $event)"
    @hide="$emit('hide', $event)"
    @show="$emit('show', $event)"
  >
    <slot />
    <template v-if="$slots['primary-action']" #primary-action>
      <slot name="primary-action" />
    </template>
    <template v-if="$slots['secondary-actions']" #secondary-actions>
      <slot name="secondary-actions" />
    </template>
  </s-modal>
</template>

<script setup lang="ts">
type PaddingType = "base" | "none";
type SizeType = "small" | "small-100" | "base" | "large" | "large-100";

interface Props {
  accessibilityLabel?: string;
  heading?: string;
  hideOverlay?: () => void;
  padding?: PaddingType;
  showOverlay?: () => void;
  size?: SizeType;
  toggleOverlay?: () => void;
}

defineProps<Props>();

defineEmits<{
  afterhide: [event: Event];
  aftershow: [event: Event];
  hide: [event: Event];
  show: [event: Event];
}>();
</script>
