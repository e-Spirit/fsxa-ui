import * as tsx from "vue-tsx-support";
import Component from "vue-class-component";
import { ButtonProps } from "@/types/button";
import InteractiveComponent from "@/components/internal/InteractiveComponent";
import Button from "@/components/Button";

@Component({
  name: "ButtonDocs"
})
class ButtonDocs extends tsx.Component<{}> {
  render() {
    return (
      <div class="w-full h-full p-10">
        <h1 class="text-lg uppercase">Button</h1>
        <p>Hier kommt die Description hin</p>
        <div>Properties incoming</div>

        <InteractiveComponent<ButtonProps>
          changeableProps={[
            {
              key: "size",
              label: "Size",
              options: ["sm", "md", "lg"],
              type: "select",
              default: "md"
            },
            {
              key: "variant",
              label: "Variant",
              options: ["default", "inverted", "tag"],
              type: "select",
              default: "default"
            }
          ]}
          renderComponent={props => <Button {...{ props }}>Button</Button>}
          title="Interactive Playground"
          subtitle="Play around with the Button component by changing its properties"
        />
      </div>
    );
  }
}
export default ButtonDocs;
