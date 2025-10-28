<template>
  <s-popover

  >
    <slot />
  </s-popover>
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
