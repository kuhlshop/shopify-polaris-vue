<template>
  <s-box
    :accessibility-label="accessibilityLabel"
    :accessibility-role="accessibilityRole"
    :accessibility-visibility="accessibilityVisibility"
    :background="background"
    :block-size="blockSize"
    :border="border"
    :border-color="borderColor"
    :border-radius="borderRadius"
    :border-style="borderStyle"
    :border-width="borderWidth"
    :display="display"
    :inline-size="inlineSize"
    :max-block-size="maxBlockSize"
    :max-inline-size="maxInlineSize"
    :min-block-size="minBlockSize"
    :min-inline-size="minInlineSize"
    :overflow="overflow"
    :padding="padding"
    :padding-block="paddingBlock"
    :padding-block-end="paddingBlockEnd"
    :padding-block-start="paddingBlockStart"
    :padding-inline="paddingInline"
    :padding-inline-end="paddingInlineEnd"
    :padding-inline-start="paddingInlineStart"
  >
    <slot />
  </s-box>
</template>

<script setup lang="ts">
// Type definitions
type AccessibilityRole = 
  | 'main' 
  | 'header' 
  | 'footer' 
  | 'section' 
  | 'aside' 
  | 'navigation' 
  | 'ordered-list' 
  | 'list-item' 
  | 'list-item-separator' 
  | 'unordered-list' 
  | 'separator' 
  | 'status' 
  | 'alert' 
  | 'generic' 
  | 'presentation' 
  | 'none';

type AccessibilityVisibility = "visible" | "hidden" | "exclusive";

type ColorKeyword = 'subdued' | 'base' | 'strong';

type BackgroundColorKeyword = 'transparent' | ColorKeyword;

type SizeUnits = `${number}px` | `${number}%` | '0';

type SizeUnitsOrAuto = SizeUnits | 'auto';

type SizeUnitsOrNone = SizeUnits | 'none';

type SizeKeyword = 
  | 'small-500' 
  | 'small-400' 
  | 'small-300' 
  | 'small-200' 
  | 'small-100' 
  | 'small' 
  | 'base' 
  | 'large' 
  | 'large-100' 
  | 'large-200' 
  | 'large-300' 
  | 'large-400' 
  | 'large-500';

type BorderSizeKeyword = SizeKeyword | 'none';

type BorderStyleKeyword = 'none' | 'solid' | 'dashed' | 'dotted' | 'auto';

type BorderShorthand = 
  | BorderSizeKeyword 
  | `${BorderSizeKeyword} ${ColorKeyword}` 
  | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;

type BoxBorderRadii = 
  | 'small' 
  | 'small-200' 
  | 'small-100' 
  | 'base' 
  | 'large' 
  | 'large-100' 
  | 'large-200' 
  | 'none';

type BoxBorderStyles = 'auto' | 'none' | 'solid' | 'dashed';

type PaddingKeyword = SizeKeyword | 'none';

type MaybeAllValuesShorthandProperty<T extends string> = 
  | T 
  | `${T} ${T}` 
  | `${T} ${T} ${T}` 
  | `${T} ${T} ${T} ${T}`;

type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;

type MaybeResponsive<T extends string> = T | `@container${string}`;

type BorderWidthKeyword = 
  | "small" 
  | "small-100" 
  | "base" 
  | "large" 
  | "large-100" 
  | "none";

// Props interface
interface Props {
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityVisibility?: AccessibilityVisibility;
  background?: BackgroundColorKeyword;
  blockSize?: SizeUnitsOrAuto;
  border?: BorderShorthand;
  borderColor?: "" | ColorKeyword;
  borderRadius?: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  borderStyle?: "" | MaybeAllValuesShorthandProperty<BoxBorderStyles>;
  borderWidth?: "" | MaybeAllValuesShorthandProperty<BorderWidthKeyword>;
  display?: MaybeResponsive<"auto" | "none">;
  inlineSize?: SizeUnitsOrAuto;
  maxBlockSize?: SizeUnitsOrNone;
  maxInlineSize?: SizeUnitsOrNone;
  minBlockSize?: SizeUnits;
  minInlineSize?: SizeUnits;
  overflow?: "visible" | "hidden";
  padding?: MaybeResponsive<MaybeAllValuesShorthandProperty<PaddingKeyword>>;
  paddingBlock?: MaybeResponsive<"" | MaybeTwoValuesShorthandProperty<PaddingKeyword>>;
  paddingBlockEnd?: MaybeResponsive<"" | PaddingKeyword>;
  paddingBlockStart?: MaybeResponsive<"" | PaddingKeyword>;
  paddingInline?: MaybeResponsive<"" | MaybeTwoValuesShorthandProperty<PaddingKeyword>>;
  paddingInlineEnd?: MaybeResponsive<"" | PaddingKeyword>;
  paddingInlineStart?: MaybeResponsive<"" | PaddingKeyword>;
}

defineProps<Props>();
</script>
