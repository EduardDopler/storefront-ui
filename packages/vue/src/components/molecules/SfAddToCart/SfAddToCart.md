# component-description
Add-to-cart [button](Button.html) and amount input field with maximum stock validation.

# common-usage
<br>
<div style="max-width: 20rem;">
  <SfDocsAddToCart />
</div>

```html
<template>
  <SfAddToCart
      :stock="stock"
      :canAddToCart="canAddToCart"
      v-model="qty"
      @click="addToCart"
    />
</template>

<script>
import { SfAddToCart } from "@storefront-ui/vue";

export default {
  components: {
    SfAddToCart
  },
  data() {
    return {
      stock: 5,
      qty: "1",
      canAddToCart: true
    };
  },
  methods: {
    addToCart() {
      // handle add-to-cart event
    }
  }
};
</script>
```
