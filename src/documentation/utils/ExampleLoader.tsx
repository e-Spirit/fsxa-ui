import Example from "@/components/internal/Documentation/Example";
import Component from "vue-class-component";
import BaseComponent from "@/components/BaseComponent";
import { Prop } from "vue-property-decorator";

export interface ExampleLoaderProps {
  example: string;
}
@Component({
  name: "ExampleLoader",
})
class ExampleLoader extends BaseComponent<ExampleLoaderProps> {
  @Prop({ required: true }) example!: ExampleLoaderProps["example"];

  render() {
    // eslint-disable-next-line
    const content = require(`@/documentation/examples/${this.example}`);
    // eslint-disable-next-line
    const code = require(`!!raw-loader!@/documentation/examples/${this.example}`);
    if (!content)
      throw new Error(
        `Could not find file in @/documentation/examples/examples/${this.example}`,
      );
    return <Example renderCallback={content.default} code={code.default} />;
  }
}
export default ExampleLoader;
