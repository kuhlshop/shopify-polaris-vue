<template>
  <s-table
    :has-next-page="hasNextPage"
    :has-previous-page="hasPreviousPage"
    :loading="loading"
    :paginate="paginate"
    :variant="variant"
    @nextpage="$emit('nextpage', $event)"
    @previouspage="$emit('previouspage', $event)"
  >
    <template v-if="$slots.filters" #filters>
      <slot name="filters" />
    </template>
    <slot />
  </s-table>
</template>

<script setup lang="ts">
// Type definitions
type VariantType = "auto" | "list";

// Props interface
interface Props {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  loading?: boolean;
  paginate?: boolean;
  variant?: VariantType;
}

defineProps<Props>();

// Events
defineEmits<{
  nextpage: [event: Event];
  previouspage: [event: Event];
}>();
</script>
