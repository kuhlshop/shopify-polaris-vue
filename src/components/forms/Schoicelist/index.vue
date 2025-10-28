<template>
  <s-choicelist

  >
    <slot />
  </s-choicelist>
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
