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
type AccessibilityRole =
  | "main"
  | "header"
  | "footer"
  | "section"
  | "aside"
  | "navigation"
  | "ordered-list"
  | "list-item"
  | "list-item-separator"
  | "unordered-list"
  | "separator"
  | "status"
  | "alert"
  | "generic"
  | "presentation"
  | "none";

type AccessibilityVisibility = "visible" | "hidden" | "exclusive";

type ColorKeyword = "subdued" | "base" | "strong";

type BackgroundColorKeyword = "transparent" | ColorKeyword;

type SizeKeyword =
  | "small-500"
  | "small-400"
  | "small-300"
  | "small-200"
  | "small-100"
  | "small"
  | "base"
  | "large"
  | "large-100"
  | "large-200"
  | "large-300"
  | "large-400"
  | "large-500";

type SpacingKeyword = SizeKeyword | "none";

type BoxBorderRadii =
  | "small"
  | "small-200"
  | "small-100"
  | "base"
  | "large"
  | "large-100"
  | "large-200"
  | "none";

type BoxBorderStyles = "auto" | "none" | "solid" | "dashed";

type OverflowType = "visible" | "hidden";

// Props interface
interface Props {
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityVisibility?: AccessibilityVisibility;
  alignContent?: string;
  alignItems?: string;
  background?: BackgroundColorKeyword;
  blockSize?: string;
  border?: string;
  borderColor?: string | ColorKeyword;
  borderRadius?: string;
  borderStyle?: string;
  borderWidth?: string;
  columnGap?: string;
  direction?: string;
  display?: string;
  gap?: string;
  inlineSize?: string;
  justifyContent?: string;
  maxBlockSize?: string;
  maxInlineSize?: string;
  minBlockSize?: string;
  minInlineSize?: string;
  overflow?: OverflowType;
  padding?: string;
  paddingBlock?: string;
  paddingBlockEnd?: string;
  paddingBlockStart?: string;
  paddingInline?: string;
  paddingInlineEnd?: string;
  paddingInlineStart?: string;
  rowGap?: string;
}

defineProps<Props>();
</script>
