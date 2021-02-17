import BaseComponent from "@/components/BaseComponent";
import { Component } from "vue-property-decorator";
import "vue-tsx-support/enable-check";
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
                this.state === 1 ? "ui-bg-gray-800 ui-text-gray-200" : ""
              } ui-rounded`}
              handleOnClick={() => (this.state = 1)}
              title="example"
            >
              <i class="fas fa-code" />
            </ResponsiveButton>
            <ResponsiveButton
              class={`${
                this.state === 2 ? "ui-bg-gray-800 ui-text-gray-200" : ""
              } ui-rounded`}
              handleOnClick={() => (this.state = 2)}
              title="props and slots"
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
