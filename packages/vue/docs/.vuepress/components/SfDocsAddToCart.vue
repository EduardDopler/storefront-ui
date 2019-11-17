<template>
  <SfAddToCart :stock="stock" :canAddToCart="canAddToCart" v-model="qty" v-bind="$attrs" />
</template>

<script>
export default {
  data() {
    return {
      stock: 5,
      qty: "1",
      canAddToCart: true
    }
  }
};
</script>
