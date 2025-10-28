<template>
  <s-datefield

  >
    <slot />
  </s-datefield>
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
