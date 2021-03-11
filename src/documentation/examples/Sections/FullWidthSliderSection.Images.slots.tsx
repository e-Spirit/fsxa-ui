import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Sections } from "fsxa-ui";
import { Image } from "@/components";

@Component
class App extends Vue {
  render() {
    return (
      <div class="ui-pt-24" style="height: 800px">
        <Sections.FullWidthSliderSection
          onClick={console.log}
          scopedSlots={{
            title: text => (
              <div class="ui-font-extrabold ui-text-2xl lg:ui-text-3xl xl:ui-text-5xl ui-italic">
                {text}
              </div>
            ),
            teaser: text => (
              <div class="ui-border-2 ui-rounded p-2">{text}</div>
            ),
            button: props => (
              <button
                class="Button Button--variant--inverted ui-rounded"
                onClick={props.onClick}
              >
                {props.content}
              </button>
            ),
            media: slideMedia => (
              <Image
                src={slideMedia.src}
                class="HeaderSection--BackgroundImage"
                darken="0"
              />
            ),
            arrowButtonContent: props => (
              <div>
                {props.position}:<br />
                &rarr; {props.slideNumber}
              </div>
            ),
            stepperStep: props => (
              <li class="ui-inline-block ui-px-1 ui-pointer-events-auto">
                <a
                  class={`ui-block md:ui-hidden ui-w-10 ui-h-10 ui-rounded-lg ui-border-white ui-border hover:ui-bg-purple-600 active:ui-bg-purple-600 ui-transition-colors ui-transform ui-duration-300 ${props.currentSlideIndex ===
                    props.index && "ui-bg-purple-600"}`}
                  href="#"
                  onClick={event => {
                    event.preventDefault();
                    props.showSlide(props.index);
                  }}
                ></a>
              </li>
            ),
          }}
          slides={[
            {
              buttonContent: "more",
              teaser:
                "With a length of 28 to 34 cm and a wing-span of 50 to 60 cm, it is approximately as big as a house-dove.",
              title: (
                <span>
                  Puffin <span class="ui-text-highlight">all day</span> long
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
                  Zebra<span class="ui-text-highlight">away</span>
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
                  <span class="ui-text-highlight">smooth</span> transition of
                  light
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
