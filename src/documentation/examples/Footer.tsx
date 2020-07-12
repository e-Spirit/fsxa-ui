import Vue from "vue";
import Component from "vue-class-component";

import { Footer } from "fsxa-ui";
import { FooterLink } from "@/types/components";

const linkArr: FooterLink[] = [
  {
    isActive: true,
    label: "Link 1",
    referenceId: "",
    referenceType: "page",
  },
  {
    isActive: false,
    label: "inactive Link",
    referenceId: "",
    referenceType: "page",
  },
  {
    isActive: true,
    label: "Link 3",
    referenceId: "",
    referenceType: "fragment",
  },
];

const handleClick = (item: FooterLink) => {
  if (item.isActive) {
    console.log(item.label);
  }
};

@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <Footer
          class="relative"
          copyright="Some Text"
          links={linkArr}
          handleClick={handleClick}
        >
          Content
        </Footer>
      </div>
    );
  }
}
