import Component from "vue-class-component";
import "./style.css";
import { Prop } from "vue-property-decorator";
import BaseComponent from "@/components/FSXABaseComponent";

export interface IconButtonProps {
  active?: boolean;
  handleClick?: () => void;
}
@Component({
  name: "IconButton",
})
class IconButton extends BaseComponent<IconButtonProps> {
  @Prop() active: IconButtonProps["active"];
  @Prop() handleClick: IconButtonProps["handleClick"];

  render() {
    return (
      <div class="IconButton--wrapper">
        <button
          class={`IconButton--btn ${this.active && "active"}`}
          onClick={this.handleClick}
        >
          {this.$slots.default}
        </button>
      </div>
    );
  }
}
export default IconButton;
