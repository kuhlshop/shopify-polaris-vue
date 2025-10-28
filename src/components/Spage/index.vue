<template>
  <s-page
    :heading="heading"
    :inline-size="inlineSize"
  >
    <template v-if="$slots['breadcrumb-actions']" #breadcrumb-actions>
      <slot name="breadcrumb-actions" />
    </template>
    <template v-if="$slots['primary-action']" #primary-action>
      <slot name="primary-action" />
    </template>
    <template v-if="$slots['secondary-actions']" #secondary-actions>
      <slot name="secondary-actions" />
    </template>
    <slot />
    <template v-if="$slots.aside" #aside>
      <slot name="aside" />
    </template>
  </s-page>
</template>

<script setup lang="ts">
// Type definitions
type InlineSize = "small" | "base" | "large";

// Props interface
interface Props {
  heading?: string;
  inlineSize?: InlineSize;
}

defineProps<Props>();
</script>
