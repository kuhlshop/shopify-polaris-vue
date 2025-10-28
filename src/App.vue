<script setup>
import SButton from "./components/actions/SButton/index.vue";
import SOrderedlist from "./components/lists/SOrderedlist/index.vue";
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

    <!-- Ordered list examples -->
    <SOrderedlist>
      <s-list-item>First item</s-list-item>
      <s-list-item>Second item</s-list-item>
      <s-list-item>Third item</s-list-item>
    </SOrderedlist>

    <!-- Nested ordered list -->
    <SOrderedlist>
      <s-list-item>
        Main item 1
        <SOrderedlist>
          <s-list-item>Sub item 1</s-list-item>
          <s-list-item>Sub item 2</s-list-item>
        </SOrderedlist>
      </s-list-item>
      <s-list-item>Main item 2</s-list-item>
    </SOrderedlist>
  </div>
</template>
