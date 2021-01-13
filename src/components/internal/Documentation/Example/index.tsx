import BaseComponent from "@/components/BaseComponent";
import { Component, Prop } from "vue-property-decorator";
import Code from "@/components/internal/Documentation/Code";

export interface ExampleProps {
  code: string;
  renderCallback: () => JSX.Element;
  filename: string;
}
@Component
class Example extends BaseComponent<ExampleProps> {
  @Prop({ required: true }) code!: ExampleProps["code"];
  @Prop({ required: true }) filename!: ExampleProps["filename"];
  @Prop({ required: true }) renderCallback!: ExampleProps["renderCallback"];

  render() {
    const Component = this.renderCallback;
    return (
      <Code filename={this.filename} code={this.code} language="typescript">
        <Component />
      </Code>
    );
  }
}
export default Example;
