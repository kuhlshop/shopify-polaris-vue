<template>
  <s-clickable

  >
    <slot />
  </s-clickable>
</template>

<script setup lang="ts">

// Props
interface Props {

}

defineProps<Props>();

// Events
defineEmits<{

}>();
</script>
