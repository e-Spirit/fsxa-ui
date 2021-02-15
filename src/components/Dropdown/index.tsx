import BaseComponent from "../BaseComponent";
import { Prop, Component } from "vue-property-decorator";
import "./style.css";
import { DropdownProps } from "@/types/components";

@Component({
  name: "Dropdown",
})
class Dropdown extends BaseComponent<DropdownProps> {
  @Prop({ required: false }) value: DropdownProps["value"];
  @Prop({ required: true }) options!: DropdownProps["options"];
  @Prop({ required: true }) handleChange!: DropdownProps["handleChange"];

  render() {
    const currentOptionIndex = this.value
      ? this.options.findIndex(option => option.key === this.value)
      : 0;
    const currentOption =
      currentOptionIndex !== -1
        ? this.options[currentOptionIndex]
        : this.options[0];
    return (
      <div class="Dropdown">
        <div class="ui-mx-8">{this.$slots.default || currentOption?.label}</div>
        <ul>
          {this.options.map(option => (
            <li>
              <a
                href={option.path || undefined}
                onClick={event => {
                  event.preventDefault();
                  this.handleChange(option);
                }}
                data-testid={`option-${option.key}`}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Dropdown;
