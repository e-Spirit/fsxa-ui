import Vue from "vue";
import Component from "vue-class-component";
import InterestingFactsSection from "@/components/Sections/InterestingFactsSection";

const text =
  "A SECURITY SOLUTION FROM SMART LIVING PROIVIDES YOU PEACE OF MIND WITH INDUSTRY LEADING WHOLE-HOME PROTECTION. OUR AFFORDABLE SOLUTIONS THAT PROVIDE A SIMPLE START AND GROW WITH YOU. \n LIFE IS EASIER BECAUSE YOUR HOME SECURITY SYSTEM WILL INTERFACE WITH YOUR EXISTING SMART HOME ADDING SECURE AND INTELLIGENT INTERACTIONS TO FULLY ENHANCE YOUR COMFORT WHILE YOU'RE HOME AND KEEP YOU AT EASE WHEN YOU ARE AWAY. \n PREPARE FOR THE UNEXPECTED WITH INDUSTRY LEADING BRANDS AND THE CHOICE OF THE EXPERTS.";

const counters = [
  {
    value: 105,
    label: "intelligent devices",
  },
  {
    value: 100,
    label: "percent secure",
  },
];
const imageSrc =
  "https://images.unsplash.com/photo-1558002038-1055907df827?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5">
        <InterestingFactsSection
          headline="Peace of Mind"
          text={text}
          tagline="Home Security"
          counters={counters}
          backgroundImage={{
            type: "image",
            src: imageSrc,
            previewId: "1000",
          }}
          scopedSlots={{
            tagline: tagline => (
              <span class="ui-text-2xl ui-font-thin">{tagline}</span>
            ),
            headline: headline => (
              <h3 class="ui-bg-gray-200 ui-bg-opacity-25 ui-pl-4 ui-rounded ui-text-gray-100 ui-text-4xl">
                {headline}
              </h3>
            ),
            text: text => {
              if (typeof text === "string") {
                const splitText = text.split("\n");
                return splitText.map(item => <p class="ui-my-4">{item}</p>);
              }
              return <div>{text}</div>;
            },
            counter: counter => (
              <div class="ui-bg-gray-200 ui-bg-opacity-25 ui-p-4 ui-rounded ui-text-center ui-flex ui-flex-row ui-justify-center ui-items-center">
                <div class="ui-text-3xl ui-text-gray-100">{counter.value}</div>
                <div class="ui-uppercase ui-text-gray-300 ui-ml-2">
                  {counter.label}
                </div>
              </div>
            ),
          }}
        />
      </div>
    );
  }
}
