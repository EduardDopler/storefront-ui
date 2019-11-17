import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfBanner",
  props: {
    /** Banner title */
    title: {
      type: String,
      default: ""
    },
    /** Banner subtitle */
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Button text */
    buttonText: {
      type: String,
      default: ""
    },
    /** Background color (any CSS color value) */
    background: {
      type: String,
      default: ""
    },
    /** Background image. Influenced by $banner-background-size, $banner-background-position CSS props. */
    image: {
      type: String,
      default: ""
    }
  },
  components: {
    SfButton
  }
};
