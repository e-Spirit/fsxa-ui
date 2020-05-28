import { Component, Prop } from "vue-property-decorator";
import SelectInput from "./components/SelectInput";
import "./style.css";
import Toggle from "../Toggle";
import IconButton from "../IconButton";
import {
  InteractiveComponentProps,
  PropertyDefinition
} from "@/types/internal";
import TextInput from "./components/TextInput";
import BaseComponent from "@/components/BaseComponent";

@Component({
  name: "InteractiveComponent"
})
class InteractiveComponent<P> extends BaseComponent<
  InteractiveComponentProps<P>
> {
  @Prop({ required: true, type: Function })
  renderComponent!: InteractiveComponentProps<P>["renderComponent"];
  @Prop({ required: true })
  changeableProps!: InteractiveComponentProps<P>["changeableProps"];
  @Prop({ required: true }) title!: InteractiveComponentProps<P>["title"];
  @Prop() subtitle: InteractiveComponentProps<P>["subtitle"];

  viewMode = "light";
  showProperties = false;

  data() {
    return {
      // spread props
      ...this.changeableProps.reduce(
        (result, entry) => ({
          ...result,
          [entry.key as string]: entry.default
        }),
        {}
      )
    };
  }

  get P() {
    return this.changeableProps.reduce((result, entry) => {
      return {
        ...result,
        [entry.key]: this.$data[entry.key as string]
      };
    }, {});
  }

  handleStoredValueChange(key: string, value: any) {
    this.$data[key] = value === "" ? undefined : value;
  }

  handleViewModeChange(value: string) {
    this.viewMode = value;
  }

  renderInputElement(definition: PropertyDefinition<P>) {
    switch (definition.type) {
      case "string":
        return (
          <TextInput
            handleChange={this.handleStoredValueChange.bind(
              this,
              definition.key as string
            )}
            value={this.$data[definition.key as string]}
            label={definition.label}
          />
        );
      case "select":
        return (
          <SelectInput
            handleChange={this.handleStoredValueChange.bind(
              this,
              definition.key as string
            )}
            options={definition.options}
            value={this.$data[definition.key as string]}
            label={definition.label}
          />
        );
    }
  }

  handlePropertyToggle() {
    this.showProperties = !this.showProperties;
  }

  render() {
    return (
      <div class="InteractiveComponent">
        <div class="InteractiveComponent--Header">
          <div class="flex-grow">
            <h1 class="text-lg font-bold">{this.title}</h1>
            {this.subtitle ? (
              <h2 class="text-sm text-gray-700">{this.subtitle}</h2>
            ) : null}
          </div>
          <div class="flex-grow-0 flex-shrink-0">
            <Toggle
              labels={{ on: "Light", off: "Dark" }}
              active={this.viewMode === "light"}
              handleToggle={value =>
                this.handleViewModeChange(value ? "light" : "dark")
              }
            />
          </div>
          <div class="ml-5 -mr-5">
            <IconButton
              active={this.showProperties}
              handleClick={this.handlePropertyToggle}
            >
              PR
            </IconButton>
          </div>
        </div>
        <div class="flex w-full flex-1">
          <div
            class={`InteractiveComponent--Content ${
              this.viewMode === "dark" ? "dark" : ""
            } ${this.showProperties ? "with-sidebar" : ""}`}
          >
            {this.renderComponent(this.P as P)}
          </div>
          <div
            class={`InteractiveComponent--Sidebar ${
              this.showProperties ? "show" : ""
            }`}
          >
            <span class="uppercase text-sm mb-2 block">Properties</span>
            {this.changeableProps.map(this.renderInputElement)}
          </div>
        </div>
      </div>
    );
  }
}
export default InteractiveComponent;
