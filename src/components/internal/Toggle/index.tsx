import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import "./style.css";
import FSXABaseComponent from "@/components/FSXABaseComponent";

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
class Toggle extends FSXABaseComponent<ToggleProps> {
  @Prop({ required: true }) labels!: ToggleProps["labels"];
  @Prop({ required: true }) active!: ToggleProps["active"];
  @Prop({ required: true }) handleToggle!: ToggleProps["handleToggle"];

  render() {
    return (
      <div class="bg-gray-200 text-xs text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex overflow-hidden">
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
