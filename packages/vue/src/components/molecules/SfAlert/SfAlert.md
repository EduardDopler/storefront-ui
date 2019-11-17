# component-description
Component for displaying brief information of various importance to the user, enriched with an icon.

# common-usage
<br>
<SfAlert message="Low in stock" type="secondary" />

```html
<template>
  <SfAlert :message="msgLowInStock" :type="msgType" />
</template>

<script>
import { SfAlert } from '@storefront-ui/vue'

export default {
  components: {
    SfAlert
  },
  data() {
    return {
      msgLowInStock: "Low in stock",
      msgType: "secondary"
    }
  }
}
</script>
```
