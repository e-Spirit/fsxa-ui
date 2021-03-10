import BaseComponent from "@/components/BaseComponent";
import Component from "vue-class-component";

@Component({ name: "TableLegend" })
class TableLegend extends BaseComponent {
  render() {
    return (
      <div class="ui-text-xs">
        <p class="ui-m-2">
          <span class="ui-bg-gray-900 ui-text-white ui-py-1 ui-px-2 ui-mr-2 ui-w-auto ui-rounded-lg">
            prop / slot
          </span>{" "}
          - This property or slot is <strong>required</strong> and must be set
          by the user.
        </p>
        <p class="ui-m-2">
          <span class="ui-bg-gray-200 ui-text-black ui-py-1 ui-px-2 ui-mr-2 ui-w-auto ui-rounded-lg">
            prop / slot
          </span>{" "}
          - This property or slot is <strong>optional</strong> and can be
          omitted.
        </p>
      </div>
    );
  }
}

export default TableLegend;
