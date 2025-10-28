<template>
  <s-passwordfield

  >
    <slot />
  </s-passwordfield>
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
