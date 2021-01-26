import { Component, Prop } from "vue-property-decorator";
import "./style.css";
import BaseComponent from "@/components/BaseComponent";

export interface ToggleProps {
  labels: {
    on: JSX.Element | string;
    off: JSX.Element | string;
  };
  active: boolean;
  handleToggle: (value: boolean) => void;
}
@Component({
  name: "Toggle",
})
class Toggle extends BaseComponent<ToggleProps> {
  @Prop({ required: true }) labels!: ToggleProps["labels"];
  @Prop({ required: true }) active!: ToggleProps["active"];
  @Prop({ required: true }) handleToggle!: ToggleProps["handleToggle"];

  render() {
    return (
      <div class="ui-bg-gray-200 ui-text-xs ui-text-gray-500 ui-leading-none ui-border-2 ui-border-gray-200 ui-rounded-full ui-inline-flex ui-overflow-hidden">
        <button
          class={`Toggle ${this.active && "active"}`}
          id="on"
          onClick={this.handleToggle.bind(this, true)}
        >
          <span>{this.labels.on}</span>
        </button>
        <button
          class={`Toggle ${!this.active && "active"}`}
          id="off"
          onClick={this.handleToggle.bind(this, false)}
        >
          <span>{this.labels.off}</span>
        </button>
      </div>
    );
  }
}
export default Toggle;
