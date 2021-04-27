import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import BaseComponent from "@/components/BaseComponent";
import {
  FirstLevelNavigationItem,
  NavigationEventsWithOn,
  NavigationItem,
  NavigationProps,
  NavigationSlots,
} from "@/types/fsxa-ui";

@Component({
  name: "BaseNavigation",
})
class BaseNavigation extends BaseComponent<
  NavigationProps,
  NavigationEventsWithOn,
  NavigationSlots
> {
  @Prop({
    required: true,
  })
  activeItemKeys!: NavigationProps["activeItemKeys"];
  @Prop({
    required: true,
  })
  items!: NavigationProps["items"];

  triggerItemClick(item: FirstLevelNavigationItem | NavigationItem) {
    this.$emit("itemClicked", item);
  }
}
export default BaseNavigation;
