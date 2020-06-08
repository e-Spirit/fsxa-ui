import FSXABaseComponent from "@/components/FSXABaseComponent";
import Component from "vue-class-component";
import "./style.css";

@Component({
  name: "FSXADevInfo",
})
class FSXADevInfo extends FSXABaseComponent {
  collapsed = false;

  render() {
    return (
      <div class={`DevInfo ${this.collapsed ? "collapsed" : ""}`}>
        <div
          class="absolute top-0 right-0 flex w-8 h-8 items-center justify-center text-white cursor-pointer"
          onClick={() => (this.collapsed = !this.collapsed)}
        >
          <i class={`fa ${this.collapsed ? "fa-question" : "fa-times"}`} />
        </div>
        {!this.collapsed ? (
          <div class="rounded-lg text-white">{this.$slots.default}</div>
        ) : null}
      </div>
    );
  }
}
export default FSXADevInfo;
