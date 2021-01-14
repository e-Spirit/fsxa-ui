import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Sections } from "fsxa-ui";
import { Image } from "@/components";

@Component
class App extends Vue {
  render() {
    return (
      <div class="pt-24" style="height: 800px">
        <Sections.FullWidthSliderSection
          onClick={console.log}
          scopedSlots={{
            title: txt => (
              <div class="font-extrabold text-2xl lg:text-3xl xl:text-5xl italic">
                {txt}
              </div>
            ),
            teaser: txt => <div class="border-2 rounded p-2">{txt}</div>,
            button: props => (
              <button
                class="Button Button--variant--inverted rounded"
                onClick={props.onClick}
              >
                {props.content}
              </button>
            ),
            media: slideMedia => (
              <Image
                src={slideMedia.src}
                class="HeaderSection--BackgroundImage"
                opacity="0"
              />
            ),
          }}
          slides={[
            {
              buttonContent: "more",
              teaser:
                "With a length of 28 to 34 cm and a wing-span of 50 to 60 cm, it is approximately as big as a house-dove.",
              title: (
                <span>
                  Puffin <span class="text-highlight">all day</span> long
                </span>
              ),
              media: {
                type: "image",
                src:
                  "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                resolutions: {
                  ORIGINAL: {
                    url:
                      "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    height: 1300,
                    width: 1950,
                  },
                  HALF: {
                    url:
                      "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
                    height: 650,
                    width: 975,
                  },
                  SMALL: {
                    url:
                      "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80",
                    height: 320,
                    width: 480,
                  },
                },
              },
            },
            {
              buttonContent: "more",
              teaser:
                "As zebras, the three types Grevyzebra, mountain-zebra and steppe-zebra from the type of the horses are called. They are especially characterized by their black and white stripe pattern. All representatives of the zebras occur exclusively in Africa where they live in open landscapes mostly.",
              title: (
                <span>
                  Zebra<span class="text-highlight">away</span>
                </span>
              ),
              media: {
                type: "image",
                src:
                  "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                resolutions: {
                  ORIGINAL: {
                    url:
                      "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    height: 1300,
                    width: 1950,
                  },
                  HALF: {
                    url:
                      "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
                    height: 650,
                    width: 975,
                  },
                  SMALL: {
                    url:
                      "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80",
                    height: 320,
                    width: 480,
                  },
                },
              },
            },
            {
              buttonContent: "more",
              teaser:
                "Twilight is the smooth transition of light conditions at the beginning and end of the day, alternating with the night due to the position of the sun and light scattering in the atmosphere. The perceived light is called twilight or twilight shine.",
              title: (
                <span>
                  <span class="text-highlight">smooth</span> transition of light
                </span>
              ),
              media: {
                type: "image",
                src:
                  "https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
                resolutions: {
                  ORIGINAL: {
                    url:
                      "https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
                    height: 1301,
                    width: 1949,
                  },
                  HALF: {
                    url:
                      "https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
                    height: 650,
                    width: 975,
                  },
                  SMALL: {
                    url:
                      "https://images.unsplash.com/photo-1549799521-b6b4c1aaf2ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80",
                    height: 320,
                    width: 480,
                  },
                },
              },
            },
          ]}
        />
      </div>
    );
  }
}
export default App;
