// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfBottomNavigation from "./SfBottomNavigation.vue";

storiesOf("Organisms|BottomNavigation", module)
  .addDecorator(withKnobs)
  .add(
    "[slot] default",
    () => ({
      components: { SfBottomNavigation, SfIcon, SfCircleIcon },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-bottom-navigation__item--active":
                "sf-bottom-navigation__item--active"
            },
            "sf-bottom-navigation__item--active",
            { display: "multi-select" }
          )
        }
      },
      template: `<SfBottomNavigation
      >
        <SfBottomNavigationItem>
          <SfIcon icon="home" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfIcon icon="menu" size="20px" style="width: 25px" />
        </SfBottomNavigationItem>
        <SfBottomNavigationItem :class="customClass">
          <SfIcon icon="heart" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfIcon icon="profile" size="20px"/>
        </SfBottomNavigationItem>
        <SfBottomNavigationItem>
          <SfCircleIcon class="sf-bottom-navigation__floating-icon sf-circle-icon--big">
            <SfIcon icon="add_to_cart" size="20px" color="white" style="margin-right: 4px;"/>
          </SfCircleIcon>
        </SfBottomNavigationItem>
      </SfBottomNavigation>`
    }));
