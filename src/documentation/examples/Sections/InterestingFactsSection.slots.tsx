import Vue from "vue";
import Component from "vue-class-component";
import InterestingFactsSection from "@/components/Sections/InterestingFactsSection";

const text =
  "Trees get lonely too, so we'll give him a little friend. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. No worries. No cares. Just float and wait for the wind to blow you around. La- da- da- da- dah. Just be happy.";
const counters = [
  {
    value: 123456,
    label: "lonely trees",
  },
  {
    value: 789,
    label: "trees with a friend",
  },
];
const imageSrc =
  "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="ui-space-x-5">
        <InterestingFactsSection
          headline="Trees get lonely too"
          text={text}
          tagline="Did you know?"
          counters={counters}
          backgroundImage={{
            type: "image",
            src: imageSrc,
            previewId: "1000",
          }}
          scopedSlots={{
            tagline: txt => <i class="ui-uppercase">{txt}</i>,
            headline: txt => (
              <h1 class="ui-lowercase ui-leading-none">{txt}</h1>
            ),
            text: txt => (
              <div>
                <b>What follows is a text about trees: </b>
                <small class="ui-lowercase">{txt}</small>
              </div>
            ),
            counter: counter => (
              <div class="ui-pl-10">
                {counter.value}: {counter.label}
              </div>
            ),
          }}
        />
      </div>
    );
  }
}
