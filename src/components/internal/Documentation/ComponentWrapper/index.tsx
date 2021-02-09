import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "vue-tsx-support/enable-check";
import Button from "@/components/Button";
import Meta from "@/components/internal/Documentation/Meta";
import ResponsiveButton from "../ResponsiveButton";

interface ComponentWrapperSlots {
  infoSlot: void;
  codeSlot: void;
}

@Component({
  name: "ComponentWrapper",
})
class ComponentWrapper extends BaseComponent<{}, {}, ComponentWrapperSlots> {
  state = 1;
  render() {
    return (
      <div class="ui-h-full ui-w-full">
        <div class="ui-flex ui-flex-row ui-flex-wrap">
          <div class="ui-flex ui-flex-row ui-space-x-2">
            <ResponsiveButton
              class={`${
                this.state === 1 ? "ui-bg-gray-900 ui-text-gray-100" : ""
              } ui-rounded`}
              handleOnClick={() => (this.state = 1)}
            >
              <i class="fas fa-code" />
            </ResponsiveButton>
            <ResponsiveButton
              class={`${
                this.state === 2 ? "ui-bg-gray-900 ui-text-gray-100" : ""
              } ui-rounded`}
              handleOnClick={() => (this.state = 2)}
            >
              <i class="fas fa-book"></i>
            </ResponsiveButton>
          </div>
        </div>
        {this.state === 1
          ? this.$scopedSlots.codeSlot()
          : this.$scopedSlots.infoSlot()}
      </div>
    );
  }
}

export default ComponentWrapper;
