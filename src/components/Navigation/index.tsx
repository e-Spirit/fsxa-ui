import "./style.css";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { PropType } from "vue";
import BaseComponent from "@/components/BaseComponent";
import { NavigationProps, NavigationItem } from "@/types/components";

@Component({
  name: "Navigation",
})
class Navigation extends BaseComponent<NavigationProps> {
  @Prop({
    type: Array as PropType<NavigationProps["items"]>,
    required: true,
  })
  items!: NavigationProps["items"];
  @Prop({ type: Function, required: true })
  handleNavClick!: NavigationProps["handleNavClick"];
  @Prop({ type: Function })
  isActiveItem: NavigationProps["isActiveItem"];
  @Prop({ type: Number, default: 3 }) depth!: number;
  @Prop({ type: Function })
  isCollapsed = false;

  renderItem(item: NavigationItem, currentDepth: number) {
    const isActive = this.isActiveItem ? this.isActiveItem(item) : false;
    return (
      <li class="Navigation--Item">
        <a
          class={`Navigation--Link ${isActive ? "active" : ""}`}
          href={item.path}
          onClick={(event: any) => {
            event?.preventDefault();
            this.handleNavClick(item);
          }}
        >
          {item.label}
        </a>
        {item.children.length > 0 && currentDepth < this.depth && (
          <ul class="Navigation--Navigation">
            {item.children.map(item => this.renderItem(item, currentDepth + 1))}
          </ul>
        )}
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul class="Navigation--Navigation hidden lg:block">
          {this.items.map(item => this.renderItem(item, 0))}
        </ul>
        <div
          class="Navigation--Mobile w-full flex items-center justify-end lg:hidden hover:text-gray-600 text-xl cursor-pointer"
          onClick={(event: any) => {
            event?.preventDefault();
            this.isCollapsed = !this.isCollapsed;
          }}
        >
          <i class="fas fa-bars" />
          <div class={` Mobile ${this.isCollapsed ? "collapsed" : ""}`}>
            <ul class=" nav navbar-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="security.html">Security</a>
              </li>
              <li class="active">
                <a href="products.html">Products</a>
                <ul class="sub-menu">
                  <li>
                    <a href="category.html">Smart Door Lock</a>
                  </li>
                  <li>
                    <a href="category.html">Motion Detector</a>
                  </li>
                  <li>
                    <a href="category.html">Interior HD Camera</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="specialized_dealers.html">Specialized Dealers</a>
              </li>
              <li>
                <a href="about-us.html">About Us</a>
                <ul class="sub-menu">
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="company.html">Company</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
