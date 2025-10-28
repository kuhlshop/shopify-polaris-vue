<template>
  <s-numberfield

  >
    <slot />
  </s-numberfield>
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
