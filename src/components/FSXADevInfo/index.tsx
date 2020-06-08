import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import "./style.css";

@Component({
  name: "FSXADevInfo",
})
class FSXADevInfo extends FSXABaseComponent {
  collapsed = true;

  render() {
    return (
      <div class={`DevInfo ${this.collapsed ? "collapsed" : ""}`}>
        <div
          class="fixed top-0 right-0 flex w-8 h-8 items-center justify-center text-white cursor-pointer"
          onClick={() => (this.collapsed = !this.collapsed)}
        >
          <i class={`fa ${this.collapsed ? "fa-question" : "fa-times"}`} />
        </div>
        <div class="flex flex-1 pt-8 pl-4">
          <div class="flex-1 w-full h-full overflow-x-hidden overflow-y-auto text-white pr-4 pb-4 text-xs">
            {!this.collapsed && this.$slots.default}
          </div>
        </div>
      </div>
    );
  }
}
export default FSXADevInfo;
