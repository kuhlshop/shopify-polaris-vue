<template>
  <s-datepicker

  >
    <slot />
  </s-datepicker>
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
