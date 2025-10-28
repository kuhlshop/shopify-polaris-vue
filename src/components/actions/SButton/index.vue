<template>
  <s-button
    :accessibility-label="accessibilityLabel"
    :command="command"
    :command-for="commandFor"
    :disabled="disabled"
    :download="download"
    :href="href"
    :icon="icon"
    :interest-for="interestFor"
    :loading="loading"
    :target="target"
    :tone="tone"
    :type="type"
    :variant="variant"
    @blur="$emit('blur', $event)"
    @click="$emit('click', $event)"
    @focus="$emit('focus', $event)"
  >
    <slot />
  </s-button>
</template>

<script setup lang="ts">
// Type definitions
type Command = '--auto' | '--show' | '--hide' | '--toggle';
type Target = 'auto' | '_blank' | '_self' | '_parent' | '_top' | string;
type Tone = 'critical' | 'auto' | 'neutral';
type ButtonType = 'button' | 'reset' | 'submit';
type Variant = 'auto' | 'primary' | 'secondary' | 'tertiary';
type Icon = '' | 'replace' | 'search' | 'split' | 'link' | 'edit' | 'product' | 'variant' | 'collection' | 'select' | 'info' | 'incomplete' | 'complete' | 'color' | 'money' | 'adjust' | 'affiliate' | 'airplane' | 'alert-bubble' | 'alert-circle' | 'alert-diamond' | 'alert-location' | 'alert-octagon' | 'alert-octagon-filled' | 'alert-triangle' | 'plus' | 'duplicate' | 'view' | 'menu-horizontal' | 'order' | string;

// Props interface
interface Props {
  accessibilityLabel?: string;
  command?: Command;
  commandFor?: string;
  disabled?: boolean;
  download?: string;
  href?: string;
  icon?: Icon;
  interestFor?: string;
  loading?: boolean;
  target?: Target;
  tone?: Tone;
  type?: ButtonType;
  variant?: Variant;
}

defineProps<Props>();

// Events
defineEmits<{
  blur: [event: Event];
  click: [event: Event];
  focus: [event: Event];
}>();
</script>
