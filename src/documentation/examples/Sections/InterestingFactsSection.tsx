import Vue from "vue";
import Component from "vue-class-component";
import InterestingFactsSection from "@/components/Sections/InterestingFactsSection";

const text =
  "SMART LIVING IS A GLOBAL LEADER IN SMART HOME SOLUTIONS FOR BOTH HOME AND ENTERPRISE CUSTOMERS. SINCE 2014, WE HAVE CARRIED OUT MANY SMART PROJECTS WITH WELL-KNOWN PARTNERS NATIONWIDE AND GLOBALLY.";
const counters = [
  {
    value: 21500,
    label: "individual products",
  },
  {
    value: 180,
    label: "employees",
  },
  {
    value: 3200,
    label: "specialized dealers",
  },
];
const imageSrc =
  "https://images.unsplash.com/photo-1534337621606-e3df5ee0e97f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5">
        <InterestingFactsSection
          tagline="Who we are?"
          headline="Smart Living"
          text={text}
          counters={counters}
          backgroundImage={{
            type: "image",
            src: imageSrc,
            previewId: "1000",
          }}
        />
      </div>
    );
  }
}
