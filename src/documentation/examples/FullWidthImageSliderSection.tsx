import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Sections } from "fsxa-ui";

@Component
class App extends Vue {
  getBGColorByIndex = (index: number) => {
    return (
      [
        "bg-blue-600",
        "bg-red-600",
        "bg-green-600",
        "bg-yellow-600",
        "bg-gray-600",
      ][index] || "bg-purple-600"
    );
  };

  getSlide(index: number) {
    return {
      render: () => (
        <div
          class={`w-full h-full ${this.getBGColorByIndex(
            index,
          )} transition-opacity duration-300 opacity-100`}
        />
      ),
      animateIn: async (element: HTMLElement) => {
        element.classList.remove("opacity-25");
        element.classList.add("opacity-100");
        return new Promise(resolve => {
          window.setTimeout(resolve, 300);
        });
      },
      animateOut: async (element: HTMLElement) => {
        element.classList.remove("opacity-100");
        element.classList.add("opacity-25");
        return new Promise(resolve => {
          window.setTimeout(resolve, 300);
        });
      },
    };
  }

  render() {
    return (
      <div class="pt-24 h-full">
        <Sections.FullWidthImageSliderSection
          handleButtonClick={console.log}
          slides={[
            {
              buttonText: "more",
              description:
                "With a length of 28 to 34 cm and a wing-span of 50 to 60 cm, it is approximately as big as a house-dove.",
              title: 'Puffin <span class="text-highlight">all day</span> long',
              image: {
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
            {
              buttonText: "more",
              description:
                "As zebras, the three types Grevyzebra, mountain-zebra and steppe-zebra from the type of the horses are called. They are especially characterized by their black and white stripe pattern. All representatives of the zebras occur exclusively in Africa where they live in open landscapes mostly.",
              title: 'Zebra <span class="text-highlight">away</span>',
              image: {
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
            {
              buttonText: "more",
              description:
                "Twilight is the smooth transition of light conditions at the beginning and end of the day, alternating with the night due to the position of the sun and light scattering in the atmosphere. The perceived light is called twilight or twilight shine.",
              title:
                '<span class="text-highlight">smooth</span> transition of light',
              image: {
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
          ]}
        />
      </div>
    );
  }
}
export default App;
