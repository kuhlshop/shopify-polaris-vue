<template>
  <s-stack
    :accessibility-label="accessibilityLabel"
    :accessibility-role="accessibilityRole"
    :accessibility-visibility="accessibilityVisibility"
    :align-content="alignContent"
    :align-items="alignItems"
    :background="background"
    :block-size="blockSize"
    :border="border"
    :border-color="borderColor"
    :border-radius="borderRadius"
    :border-style="borderStyle"
    :border-width="borderWidth"
    :column-gap="columnGap"
    :direction="direction"
    :display="display"
    :gap="gap"
    :inline-size="inlineSize"
    :justify-content="justifyContent"
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
    :row-gap="rowGap"
  >
    <slot />
  </s-stack>
</template>

<script setup lang="ts">
// Type definitions
type AccessibilityRole = 'main' | 'header' | 'footer' | 'section' | 'aside' | 'navigation' | 'ordered-list' | 'list-item' | 'list-item-separator' | 'unordered-list' | 'separator' | 'status' | 'alert' | 'generic' | 'presentation' | 'none';

type BaselinePosition = 'baseline' | 'first baseline' | 'last baseline';
type ContentDistribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
type ContentPosition = 'center' | 'start' | 'end';
type OverflowPosition = `unsafe ${ContentPosition}` | `safe ${ContentPosition}`;
type AlignContentKeyword = 'normal' | BaselinePosition | ContentDistribution | OverflowPosition | ContentPosition;

type AlignItemsKeyword = 'normal' | 'stretch' | BaselinePosition | OverflowPosition | ContentPosition;

type ColorKeyword = 'subdued' | 'base' | 'strong';
type BackgroundColorKeyword = 'transparent' | ColorKeyword;

type SizeUnits = `${number}px` | `${number}%` | '0';
type SizeUnitsOrAuto = SizeUnits | 'auto';
type SizeUnitsOrNone = SizeUnits | 'none';

type SizeKeyword = 'small-500' | 'small-400' | 'small-300' | 'small-200' | 'small-100' | 'small' | 'base' | 'large' | 'large-100' | 'large-200' | 'large-300' | 'large-400' | 'large-500';

type BorderSizeKeyword = SizeKeyword | 'none';
type BorderStyleKeyword = 'none' | 'solid' | 'dashed' | 'dotted' | 'auto';
type BorderShorthand = BorderSizeKeyword | `${BorderSizeKeyword} ${ColorKeyword}` | `${BorderSizeKeyword} ${ColorKeyword} ${BorderStyleKeyword}`;

type BoxBorderRadii = 'small' | 'small-200' | 'small-100' | 'base' | 'large' | 'large-100' | 'large-200' | 'none';
type BoxBorderStyles = 'auto' | 'none' | 'solid' | 'dashed';
type BorderWidthValue = 'small' | 'small-100' | 'base' | 'large' | 'large-100' | 'none';

type MaybeAllValuesShorthandProperty<T extends string> = T | `${T} ${T}` | `${T} ${T} ${T}` | `${T} ${T} ${T} ${T}`;
type MaybeTwoValuesShorthandProperty<T extends string> = T | `${T} ${T}`;

type SpacingKeyword = SizeKeyword | 'none';

type MaybeResponsive<T extends string> = T | `@container${string}`;

type JustifyContentKeyword = 'normal' | ContentDistribution | OverflowPosition | ContentPosition;

type PaddingKeyword = SizeKeyword | 'none';

// Props interface
interface Props {
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityVisibility?: 'visible' | 'hidden' | 'exclusive';
  alignContent?: AlignContentKeyword;
  alignItems?: AlignItemsKeyword;
  background?: BackgroundColorKeyword;
  blockSize?: SizeUnitsOrAuto;
  border?: BorderShorthand;
  borderColor?: '' | ColorKeyword;
  borderRadius?: MaybeAllValuesShorthandProperty<BoxBorderRadii>;
  borderStyle?: '' | MaybeAllValuesShorthandProperty<BoxBorderStyles>;
  borderWidth?: '' | MaybeAllValuesShorthandProperty<BorderWidthValue>;
  columnGap?: MaybeResponsive<'' | SpacingKeyword>;
  direction?: MaybeResponsive<'inline' | 'block'>;
  display?: MaybeResponsive<'auto' | 'none'>;
  gap?: MaybeResponsive<MaybeTwoValuesShorthandProperty<SpacingKeyword>>;
  inlineSize?: SizeUnitsOrAuto;
  justifyContent?: JustifyContentKeyword;
  maxBlockSize?: SizeUnitsOrNone;
  maxInlineSize?: SizeUnitsOrNone;
  minBlockSize?: SizeUnits;
  minInlineSize?: SizeUnits;
  overflow?: 'visible' | 'hidden';
  padding?: MaybeResponsive<MaybeAllValuesShorthandProperty<PaddingKeyword>>;
  paddingBlock?: MaybeResponsive<'' | MaybeTwoValuesShorthandProperty<PaddingKeyword>>;
  paddingBlockEnd?: MaybeResponsive<'' | PaddingKeyword>;
  paddingBlockStart?: MaybeResponsive<'' | PaddingKeyword>;
  paddingInline?: MaybeResponsive<'' | MaybeTwoValuesShorthandProperty<PaddingKeyword>>;
  paddingInlineEnd?: MaybeResponsive<'' | PaddingKeyword>;
  paddingInlineStart?: MaybeResponsive<'' | PaddingKeyword>;
  rowGap?: MaybeResponsive<'' | SpacingKeyword>;
}

defineProps<Props>();
</script>
