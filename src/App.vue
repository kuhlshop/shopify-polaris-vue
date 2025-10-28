<script setup>
import SButton from "./components/actions/SButton/index.vue";
</script>

<template>
  <div>
    <!-- Basic usage -->
    <SButton>Save</SButton>

    <!-- With variant and events -->
    <SButton variant="primary" @blur="onBlur">Add Product</SButton>

    <!-- With icon -->
    <SButton icon="plus" variant="secondary">Add product</SButton>

    <!-- Loading state -->
    <SButton :loading="true" variant="primary">Saving...</SButton>

    <!-- Critical tone -->
    <SButton tone="critical" variant="primary">Delete</SButton>

    <!-- Icon-only with accessibility -->
    <SButton icon="plus" accessibility-label="Add product" />

    <!-- Link button -->
    <SButton href="/products" target="_blank">View Products</SButton>
  </div>
</template>
