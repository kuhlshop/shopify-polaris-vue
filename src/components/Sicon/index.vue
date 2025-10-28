<template>
  <s-icon
    :color="color"
    :interest-for="interestFor"
    :size="size"
    :tone="tone"
    :type="type"
  >
    <slot />
  </s-icon>
</template>

<script setup lang="ts">
type ColorType = "base" | "subdued";
type SizeType = "small" | "base";
type ToneType = "info" | "success" | "warning" | "critical" | "auto" | "neutral" | "caution";
type IconType = "" | "replace" | "search" | "split" | "link" | "edit" | "product" | "variant" | "collection" | "select" | "info" | "incomplete" | "complete" | "color" | "money" | "adjust" | "affiliate" | "airplane" | "alert-bubble" | "alert-circle" | "alert-diamond" | "alert-location" | "alert-octagon" | "alert-octagon-filled" | "alert-triangle" | "home" | "order" | "settings" | "duplicate" | "save" | "export" | "check-circle" | "question-circle" | "plus" | "delete";

interface Props {
  color?: ColorType;
  interestFor?: string;
  size?: SizeType;
  tone?: ToneType;
  type?: IconType;
}

defineProps<Props>();
</script>
