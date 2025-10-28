<template>
  <s-image
    :accessibility-role="accessibilityRole"
    :alt="alt"
    :aspect-ratio="aspectRatio"
    :border="border"
    :border-color="borderColor"
    :border-radius="borderRadius"
    :border-style="borderStyle"
    :border-width="borderWidth"
    :inline-size="inlineSize"
    :loading="loading"
    :object-fit="objectFit"
    :sizes="sizes"
    :src="src"
    :src-set="srcSet"
    @error="$emit('error', $event)"
    @load="$emit('load', $event)"
  >
    <slot />
  </s-image>
</template>

<script setup lang="ts">
// Type definitions
type AccessibilityRole = "none" | "presentation" | "img";

type AspectRatio = `${number}` | `${number}/${number}` | `${number}/ ${number}` | `${number} /${number}` | `${number} / ${number}`;

type SizeKeyword = 'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500';

type BorderSizeKeyword = SizeKeyword | 'none';

type ColorKeyword = 'subdued' | 'base' | 'strong';

type BorderStyleKeyword = 'none' | 'solid' | 'dashed' | 'dotted' | 'auto';

type BorderShorthand = BorderSizeKeyword | `${BorderSizeKeyword} ${ColorKeyword}` | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;

type BoxBorderRadii = 'small' | 'small-200' | 'small-100' | 'base' | 'large' | 'large-100' | 'large-200' | 'none';

type BoxBorderStyles = 'auto' | 'none' | 'solid' | 'dashed';

type BorderWidthKeyword = "small" | "small-100" | "base" | "large" | "large-100" | "none";

type MaybeAllValuesShorthandProperty<T> = T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`;

type InlineSize = "auto" | "fill";

type Loading = "eager" | "lazy";

type ObjectFit = "contain" | "cover";

// Props interface
interface Props {
  accessibilityRole?: AccessibilityRole;
  alt?: string;
  aspectRatio?: AspectRatio;
  border?: BorderShorthand;
  borderColor?: "" | ColorKeyword;
  borderRadius?: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  borderStyle?: "" | MaybeAllValuesShorthandProperty<BoxBorderStyles>;
  borderWidth?: "" | MaybeAllValuesShorthandProperty<BorderWidthKeyword>;
  inlineSize?: InlineSize;
  loading?: Loading;
  objectFit?: ObjectFit;
  sizes?: string;
  src?: string;
  srcSet?: string;
}

defineProps<Props>();

// Events
defineEmits<{
  error: [event: Event];
  load: [event: Event];
}>();
</script>
