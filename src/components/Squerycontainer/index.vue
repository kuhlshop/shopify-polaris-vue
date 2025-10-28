<template>
  <s-query-container
    :container-name="containerName"
  >
    <slot />
  </s-query-container>
</template>

<script setup lang="ts">
// Props interface
interface Props {
  containerName?: string;
}

defineProps<Props>();
</script>
