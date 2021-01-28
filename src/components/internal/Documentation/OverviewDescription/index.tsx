import BaseComponent from "@/components/BaseComponent";
import routes from "@/documentation/routes";
import { Component, Prop } from "vue-property-decorator";
export interface OverviewDescriptionProps {
  path: string;
}
@Component({
  name: "OverviewDescription",
})
class OverviewDescription extends BaseComponent<OverviewDescriptionProps> {
  @Prop({ required: true }) path!: OverviewDescriptionProps["path"];
  childrenRoutes = routes
    .find(item => item.path === this.path)
    ?.children.sort((a, b) => a.label.localeCompare(b.label));

  render() {
    return (
      <div class="ui-p-10 ui-mt-10 ui--mx-10 ui-space-y-4">
        {this.childrenRoutes
          ? this.childrenRoutes.map(item => {
              return (
                <router-link
                  class="ui-shadow-lg ui-p-4 ui-cursor-pointer"
                  to={item.path}
                  tag="div"
                >
                  <div class="ui-flex ui-flex-col">
                    <div class="ui-text-2xl">{item.label}</div>
                    {item.meta?.description ? (
                      <p>{item.meta?.description}</p>
                    ) : null}
                  </div>
                </router-link>
              );
            })
          : null}
      </div>
    );
  }
}
export default OverviewDescription;
