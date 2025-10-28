<template>
  <s-popover
    :block-size="blockSize"
    :inline-size="inlineSize"
    :max-block-size="maxBlockSize"
    :max-inline-size="maxInlineSize"
    :min-block-size="minBlockSize"
    :min-inline-size="minInlineSize"
    @afterhide="$emit('afterhide', $event)"
    @aftershow="$emit('aftershow', $event)"
    @aftertoggle="$emit('aftertoggle', $event)"
    @hide="$emit('hide', $event)"
    @show="$emit('show', $event)"
    @toggle="$emit('toggle', $event)"
  >
    <slot />
  </s-popover>
</template>

<script setup lang="ts">
// Type definitions
type SizeUnits = `${number}px` | `${number}%` | '0';
type SizeUnitsOrAuto = SizeUnits | 'auto';
type SizeUnitsOrNone = SizeUnits | 'none';

// Props interface
interface Props {
  blockSize?: SizeUnitsOrAuto;
  inlineSize?: SizeUnitsOrAuto;
  maxBlockSize?: SizeUnitsOrNone;
  maxInlineSize?: SizeUnitsOrNone;
  minBlockSize?: SizeUnits;
  minInlineSize?: SizeUnits;
}

defineProps<Props>();

// Events
defineEmits<{
  afterhide: [event: Event];
  aftershow: [event: Event];
  aftertoggle: [event: Event];
  hide: [event: Event];
  show: [event: Event];
  toggle: [event: Event];
}>();
</script>
