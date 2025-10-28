<template>
  <s-unorderedlist>
    <slot />
  </s-unorderedlist>
</template>

<script setup lang="ts">
// Props interface - component has no props based on documentation
interface Props {}

defineProps<Props>();
</script>
