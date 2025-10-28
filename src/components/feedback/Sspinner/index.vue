<template>
  <s-spinner

  >
    <slot />
  </s-spinner>
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
