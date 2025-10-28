<template>
  <s-modal

  >
    <slot />
  </s-modal>
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
