import Vue from "vue";
import Component from "vue-class-component";
import InterestingFactsSection from "@/components/Sections/InterestingFactsSection";

const text =
  "Trees get lonely too, so we'll give him a little friend. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. No worries. No cares. Just float and wait for the wind to blow you around. La- da- da- da- dah. Just be happy.";
const counters = [
  {
    value: 12,
    label: "test",
  },
  {
    value: 222,
    label: "test2",
  },
];
const imageSrc =
  "https://images.pexels.com/photos/5592596/pexels-photo-5592596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

@Component
export default class App extends Vue {
  render() {
    return (
      <div class="space-x-5">
        <InterestingFactsSection
          headline="test"
          text={text}
          tagline="123"
          counters={counters}
          backgroundImage={{
            src: imageSrc,
            dimensions: { width: 400, height: 400 },
            previewId: "1000",
          }}
          scopedSlots={{
            tagline: txt => (
              <i class="Headline xl light uppercase include-margin">{txt}</i>
            ),
            headline: txt => (
              <h1 class="Headline xxl bold lowercase include-margin leading-none">
                {txt}
              </h1>
            ),
            text: txt => (
              <div>
                <b>What follows is a text about trees: </b>
                <small class="lowercase">{txt}</small>
              </div>
            ),
            counters: ctrs => (
              <div class="pl-10">
                Some figures:
                <ul class="mt-4">
                  {ctrs.map(counter => (
                    <li>
                      {counter.label}: {counter.value}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          }}
        />
      </div>
    );
  }
}
