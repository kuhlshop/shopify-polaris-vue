<template>
  <s-tooltip

  >
    <slot />
  </s-tooltip>
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
