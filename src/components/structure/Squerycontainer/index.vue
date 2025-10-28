<template>
  <s-querycontainer

  >
    <slot />
  </s-querycontainer>
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
