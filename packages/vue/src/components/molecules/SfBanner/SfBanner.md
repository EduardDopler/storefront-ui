# component-description
Banner component which features various text levels and a [button](Button.html).

# common-usage
<br>
<div style="border: 1px solid #dddddd">
  <SfBanner
    title="Eco Sandals"
    subtitle="Summer shoes"
    description="The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort."
    buttonText="Shop Now"
    background="white"
    image="https://storybook.storefrontui.io/assets/storybook/Banner2.jpg" />
</div>

```html
<template>
  <SfBanner
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :buttonText="buttonText"
    :background="background"
    :image="image"
    @click="onClick"
  />
</template>

<script>
import { SfBanner } from "@storefront-ui/vue";

export default {
  components: {
    SfBanner
  },
  data() {
    return {
      title: "Eco Sandals",
      subtitle: "Summer shoes",
      description:
        "The collection features formal and casual comfort shoes with a Danish design focus. Made from premium leathers and comfort.",
      buttonText: "Shop Now",
      background: "white",
      image: "https://storybook.storefrontui.io/assets/storybook/Banner2.jpg"
    };
  },
  methods: {
    onClick() {
      // handle button click event
    }
  }
};
</script>
```
