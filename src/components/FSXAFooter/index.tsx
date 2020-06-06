import FSXABaseComponent from "../FSXABaseComponent";
import FSXAContainer from "../FSXAContainer";
import { Prop, Component } from "vue-property-decorator";
import "./style.css";
import { FSXAFooterProps } from "@/types/fsxa-ui";
import FSXARow from "../FSXARow";
import FSXACol from "../FSXACol";

@Component({
  name: "FSXAFooter",
})
class FSXAFooter extends FSXABaseComponent<FSXAFooterProps> {
  @Prop({ required: true }) copyright!: FSXAFooterProps["copyright"];
  @Prop({ required: true }) links!: FSXAFooterProps["links"];
  @Prop({ required: true }) handleClick!: FSXAFooterProps["handleClick"];

  render() {
    return (
      <div class="w-full h-64 bg-gray-100 flex items-center text-xs fixed bottom-0 left-0">
        <FSXAContainer paddingOnly>
          <FSXARow>
            <FSXACol
              width="12"
              md_width="4"
              class="flex justify-center lg:justify-start items-center"
            >
              {this.$slots.default}
            </FSXACol>
            <FSXACol
              width="12"
              md_width="4"
              class="flex justify-center items-center"
            >
              © {this.copyright}
            </FSXACol>
            <FSXACol
              width="12"
              md_width="4"
              class="flex justify-center lg:justify-end items-center"
            >
              <ul>
                {this.links.map(link => (
                  <li class="FSXAFooter--LinkWrapper">
                    <a
                      href="#"
                      class={`FSXAFooter--Link ${
                        link.isActive ? "active" : ""
                      }`}
                      onClick={event => {
                        event.preventDefault();
                        this.handleClick(link);
                      }}
                      data-preview-id={link.previewId}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FSXACol>
          </FSXARow>
        </FSXAContainer>
      </div>
    );
  }
}
export default FSXAFooter;
