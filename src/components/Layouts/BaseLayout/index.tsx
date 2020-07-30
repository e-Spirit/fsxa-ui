import BaseComponent from "@/components/BaseComponent";
import { Prop, Component } from "vue-property-decorator";
import { BaseLayoutProps } from "@/types/layouts";

@Component({
  name: "BaseLayout",
})
class BaseLayout<Props = {}> extends BaseComponent<Props & BaseLayoutProps> {
  @Prop({ required: true })
  renderContentElements!: BaseLayoutProps["renderContentElements"];
}
export default BaseLayout;
