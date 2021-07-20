import { Component, Prop } from "vue-property-decorator";
import SelectInput from "./components/SelectInput";
import "./style.css";
import Toggle from "../Toggle";
import { InteractiveComponentProps, Property } from "@/types/internal";
import TextInput from "./components/TextInput";
import BaseComponent from "@/components/BaseComponent";

@Component({
  name: "InteractiveComponent",
})
class InteractiveComponent extends BaseComponent<InteractiveComponentProps> {
  @Prop({ required: true, type: Function })
  renderComponent!: InteractiveComponentProps["renderComponent"];
  @Prop({ required: true })
  changeableProps!: InteractiveComponentProps["changeableProps"];

  viewMode = "light";

  data() {
    return {
      // spread props
      ...this.changeableProps.reduce(
        (result, entry) => ({
          ...result,
          [entry.key as string]: entry.default,
        }),
        {},
      ),
    };
  }

  get P() {
    return this.changeableProps.reduce((result, entry) => {
      return {
        ...result,
        [entry.key]: this.$data[entry.key as string],
      };
    }, {});
  }

  handleStoredValueChange(key: string, value: any) {
    this.$data[key] = value === "" ? undefined : value;
  }

  handleViewModeChange(value: string) {
    this.viewMode = value;
  }

  renderInputElement(definition: Property) {
    switch (definition.type) {
      case "string":
        return (
          <TextInput
            handleChange={this.handleStoredValueChange.bind(
              this,
              definition.key as string,
            )}
            value={this.$data[definition.key as string]}
            label={definition.key}
          />
        );
      case "select":
        return (
          <SelectInput
            handleChange={this.handleStoredValueChange.bind(
              this,
              definition.key as string,
            )}
            options={definition.values || []}
            value={this.$data[definition.key as string]}
            label={definition.key}
          />
        );
    }
  }
  render() {
    return (
      <div class="InteractiveComponent">
        <div class="ui-flex ui-w-full ui-flex-1">
          <div
            class={`InteractiveComponent--Content with-sidebar ${
              this.viewMode === "dark" ? "dark" : ""
            } `}
          >
            {this.renderComponent(this.P)}
            <div class="InteractiveComponent--Overlay">
              <div class="ui-flex-grow-0 ui-flex-shrink-0">
                <Toggle
                  labels={{ on: "Light", off: "Dark" }}
                  active={this.viewMode === "light"}
                  handleToggle={(value) =>
                    this.handleViewModeChange(value ? "light" : "dark")
                  }
                />
              </div>
              <div class="ui-ml-5 ui--mr-5"></div>
            </div>
          </div>
          <div class={`InteractiveComponent--Sidebar show`}>
            <span class="ui-uppercase ui-text-sm ui-mb-2 ui-block">
              Properties
            </span>
            {this.changeableProps.map(this.renderInputElement)}
          </div>
        </div>
      </div>
    );
  }
}
export default InteractiveComponent;
