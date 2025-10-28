<template>
  <s-dropzone

  >
    <slot />
  </s-dropzone>
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
