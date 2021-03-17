import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import "vue-tsx-support/enable-check";
import ResponsiveButton from "../ResponsiveButton";
import TableLegend from "@/components/internal/Documentation/TableLegend";

interface ComponentWrapperSlots {
  infoSlot: void;
  codeSlot: void;
}
interface ComponentWrapperProps {
  url: string;
}

@Component({
  name: "ComponentWrapper",
})
class ComponentWrapper extends BaseComponent<
  ComponentWrapperProps,
  {},
  ComponentWrapperSlots
> {
  @Prop() url!: ComponentWrapperProps["url"];
  state = 2;
  render() {
    return (
      <div class="ui-h-full ui-w-full">
        <div class="ui-flex ui-flex-row ui-flex-wrap">
          <div class="ui-flex ui-flex-row ui-space-x-2">
            <ResponsiveButton
              class={`${
                this.state !== 1 ? "ui-bg-gray-800 ui-text-gray-200" : ""
              } ui-rounded`}
              handleOnClick={() => (this.state = 2)}
              title="props and slots"
            >
              <i class="fas fa-book" /> Props
            </ResponsiveButton>
            <ResponsiveButton
              class={`${
                this.state === 1 ? "ui-bg-gray-800 ui-text-gray-200" : ""
              } ui-rounded`}
              handleOnClick={() => (this.state = 1)}
              title="example"
            >
              <i class="fas fa-code" /> Example
            </ResponsiveButton>
            <a href={this.url} target="_blank">
              <ResponsiveButton class={`ui-rounded`} title="codesandbox">
                <i class="fas fa-code" /> Code Sandbox
              </ResponsiveButton>
            </a>
          </div>
        </div>
        {this.state === 1 ? (
          this.$scopedSlots.codeSlot()
        ) : (
          <div>
            {this.$scopedSlots.infoSlot()}
            <TableLegend></TableLegend>
          </div>
        )}
      </div>
    );
  }
}

export default ComponentWrapper;
