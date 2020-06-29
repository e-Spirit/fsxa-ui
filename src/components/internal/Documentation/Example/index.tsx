import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Code from "@/components/internal/Documentation/Code";

export interface ExampleProps {
  code: string;
  renderCallback: () => JSX.Element;
}
@Component
class Example extends FSXABaseComponent<ExampleProps> {
  @Prop({ required: true }) code!: ExampleProps["code"];
  @Prop({ required: true }) renderCallback!: ExampleProps["renderCallback"];

  render() {
    const Component = this.renderCallback;
    return (
      <Code code={this.code} language="typescript">
        <Component />
      </Code>
    );
  }
}
export default Example;
