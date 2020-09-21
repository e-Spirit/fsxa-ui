import Vue from "vue";
import Component from "vue-class-component";
import NewsTeaserSection from "@/components/Sections/NewsTeaserSection";
import { NewsTeaserItemProps } from "@/types/fsxa-ui";

const imageSrc =
  "https://enterpriseprod.e-spirit.cloud/smartliving/media/images/Content/Couple-with-tablet-2_welcome_slider.jpg";

const items: NewsTeaserItemProps[] = [
  {
    title: "text1",
    date: "02.02.2020",
    description: "test",
    handleClick: () => {
      return;
    },
    image: {
      src: imageSrc,
      dimensions: { width: 400, height: 400 },
      previewId: "1000",
    },
    latest: true,
  },
  {
    title: "text2",
    date: "02.04.2020",
    description: "test",
    handleClick: () => {
      return;
    },
    image: {
      src: imageSrc,
      dimensions: { width: 400, height: 400 },
      previewId: "1001",
    },
    latest: false,
  },
  {
    title: "text3",
    date: "02.04.2020",
    description: "test",
    handleClick: () => {
      return;
    },
    image: {
      src: imageSrc,
      dimensions: { width: 600, height: 1000 },
      previewId: "1001",
    },
    latest: false,
  },
];

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5">
        ä
        <NewsTeaserSection
          headline="text"
          items={items}
          handleItemClick={() => {
            return;
          }}
        ></NewsTeaserSection>
      </div>
    );
  }
}
