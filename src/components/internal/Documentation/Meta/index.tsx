import BaseComponent from "@/components/BaseComponent";
import routes from "@/documentation/routes";
import { Component, Prop } from "vue-property-decorator";
export interface MetaProps {
  title?: string;
  subtitle?: string;
  component?: string[];
}
@Component({
  name: "Meta",
})
class Meta extends BaseComponent<MetaProps> {
  @Prop() title?: MetaProps["title"];
  @Prop() subtitle?: MetaProps["subtitle"];
  @Prop() component?: MetaProps["component"];

  metaItem: any = null;

  created() {
    if (this.component) {
      const getElementInTree: any = (label: string[], tree: any[]) => {
        const item = tree.find((item) => item.label === label[0]);
        if (item?.children?.length > 0 && label.length > 1) {
          label.shift();
          return getElementInTree(label, item.children);
        }
        return item;
      };
      this.metaItem = getElementInTree(this.component, routes);
    }
    const myTitle = this.title ? this.title : this.metaItem.label;
    document.title = myTitle + " - fsxa-ui";
  }

  render() {
    return (
      <div class="ui-py-10 ui-pb-4 ui--mt-10">
        {this.title || this.metaItem ? (
          <h1 class="ui-text-espirit ui-font-bold ui-mb-0 ui-page-headline ui-text-3xl">
            {this.title
              ? this.title
              : this.metaItem.label
              ? this.metaItem.label
              : ""}
          </h1>
        ) : null}
        {this.subtitle || this.metaItem ? (
          <span class="ui-block ui-mt-2 ui-text-lg">
            {this.subtitle
              ? this.subtitle
              : this.metaItem.meta?.description
              ? this.metaItem.meta?.description
              : ""}
          </span>
        ) : null}
      </div>
    );
  }
}
export default Meta;
