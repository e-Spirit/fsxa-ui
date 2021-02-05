import { ImageProps, SocialElement } from "@/types/fsxa-ui";
import { Button, NewsDetail } from "fsxa-ui";
import Vue from "vue";
import Component from "vue-class-component";

const image: ImageProps = {
  resolutions: {
    ORIGINAL: {
      url:
        "https://images.pexels.com/photos/2564028/pexels-photo-2564028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500",
      width: 500,
      height: 1,
    },
    LARGE: {
      url:
        "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1000",
      width: 1000,
      height: 1,
    },
  },
  src:
    "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1000",
};
@Component
export default class App extends Vue {
  render() {
    return (
      <div>
        <NewsDetail
          headline="Futuring Human Mobility: Preparing the future for human mobility"
          teaser="Berlin has „a special intensity“ says architect David Chipperfield at the opening of the exhibition „Futuring Human Mobility“ at the Bötzow site."
          image={image}
          date={new Date(2020, 0, 18).toLocaleDateString()}
          author="Max Mustermann"
          social={{
            handleSocialClick: (socialElement: SocialElement) =>
              alert(
                `Title: ${socialElement.title} with id: ${socialElement.id}`,
              ),
            title: "Social Media",
            items: [
              {
                title: "Facebook",
                id: 1,
                options: {
                  icon: "fab fa-facebook-f",
                },
              },
              {
                title: "Twitter",
                id: 2,
                options: {
                  icon: "fab fa-twitter",
                },
              },
              {
                title: "Instagram",
                id: 3,
                options: {
                  icon: "fab fa-instagram",
                },
              },
            ],
          }}
          scopedSlots={{
            social: socialElement => {
              return (
                <div class="ui-mx-auto lg:ui-mx-px ui-text-center lg:ui-text-left">
                  {socialElement.title ? (
                    <h6 class="ui-font-extrabold ui-text-2xl">
                      {socialElement.title}
                    </h6>
                  ) : null}
                  {socialElement.items && socialElement.items.length > 0 ? (
                    <div class="ui-space-x-2">
                      {socialElement.items.map(element => (
                        <Button
                          handleClick={() => {
                            if (socialElement.handleSocialClick)
                              socialElement.handleSocialClick(element);
                          }}
                          variant="tag"
                        >
                          <i class={`${element.options.icon} fa-lg`}></i>
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            },
          }}
        >
          <div>
            <p>
              Otto Bock was founded 100 years ago in Berlin and today employs
              7000 people. The company’s goal is to give people back their
              complete mobility. According to Prof. Näder, however, the
              anniversary is not meant to be the usual review of what has been
              achieved, but rather to look into the future and to show visions
              for human mobility. Especially with regard to artificial
              intelligence. The result is a major work entitled „Futuring Human
              Mobility“ and a matching exhibition. This can be seen until March
              and is intended to attract more people to the Bötzow site. Due to
              extensive restoration work, these have recently become rather
              quiet.
            </p>
          </div>
        </NewsDetail>
      </div>
    );
  }
}
