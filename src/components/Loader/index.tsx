import BaseComponent from "../BaseComponent";
import { Prop, Component } from "vue-property-decorator";
import { LoaderProps } from "@/types/components";
import "./style.css";

@Component({
  name: "Loader",
})
class Loader extends BaseComponent<LoaderProps> {
  @Prop() renderLoader: LoaderProps["renderLoader"];
  render() {
    return (
      <div class="w-full h-full flex items-center justify-center">
        {this.renderLoader ? (
          this.renderLoader()
        ) : (
          <svg id="triangle" width="140px" height="140px" viewBox="-3 -4 39 39">
            <polygon
              fill="#fff"
              stroke="#000"
              stroke-width="2"
              points="16,0 32,32 0,32"
            ></polygon>
          </svg>
        )}
      </div>
    );
  }
}
export default Loader;
