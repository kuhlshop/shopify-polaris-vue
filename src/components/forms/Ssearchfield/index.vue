<template>
  <s-searchfield

  >
    <slot />
  </s-searchfield>
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
