import Vue from "vue";
import Component from "vue-class-component";

import HeaderSection from "@/components/Sections/HeaderSection";
import { Breadcrumb } from "@/types/sections";

const imageSrc =
  "https://enterpriseprod.e-spirit.cloud/smartliving/media/images/Content/Couple-with-tablet-2_welcome_slider.jpg";

const breadItems: Breadcrumb[] = [
  {
    referenceId: "1",
    referenceType: "test",
    path: "/",
    label: "Link 1",
  },
  {
    referenceId: "2",
    referenceType: "test",
    path: "/",
    label: "Link 2",
  },
  {
    referenceId: "3",
    referenceType: "test",
    path: "/",
    label: "Link 3",
  },
];

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5">
        <HeaderSection
          backgroundImage={{
            src: imageSrc,
            dimensions: { width: 400, height: 400 },
            previewId: "1000",
          }}
          title="test123"
          breadcrumbs={breadItems}
          handleItemClick={() => {
            return;
          }}
        ></HeaderSection>
      </div>
    );
  }
}
