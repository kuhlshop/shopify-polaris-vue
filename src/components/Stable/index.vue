<template>
  <s-table
    :hasNextPage="hasNextPage"
    :hasPreviousPage="hasPreviousPage"
    :loading="loading"
    :paginate="paginate"
    :variant="variant"
    @nextpage="$emit('nextpage', $event)"
    @previouspage="$emit('previouspage', $event)"
  >
    <slot name="filters" />
    <slot />
  </s-table>
</template>

<script setup lang="ts">
// Type definitions
type Variant = "auto" | "list";

// Props interface
interface Props {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  loading?: boolean;
  paginate?: boolean;
  variant?: Variant;
}

defineProps<Props>();

// Events
defineEmits<{
  nextpage: [event: Event];
  previouspage: [event: Event];
}>();
</script>
