import { CreateElement } from "vue";
import InterestingFactsSection from "@/components/Sections/InterestingFactsSection";
import NewsTeaserSection from "@/components/Sections/NewsTeaserSection";
import HeaderSection from "@/components/Sections/HeaderSection";
import WelcomeSection from "@/components/Sections/WelcomeSection";

export default {
  title: "FSXA Sections",
};

export const header = () => ({
  render: (h: CreateElement) => (
    <HeaderSection
      backgroundImage="https://demoprod.e-spirit.cloud/comspace/smartlivingglobal/Images/Content/Controlpanel-on-a-tablet_header_banner.jpg"
      title="EXPLORE THE WORLD OF SMART LIVING"
      breadcrumbs={[
        {
          referenceId: "dsfgh",
          referenceType: "PageRef",
          label: "Home",
        },
        {
          referenceId: "dsfgh",
          referenceType: "PageRef",
          label: "Our Solutions",
        },
      ]}
      handleItemClick={console.log}
    />
  ),
});

export const welcome = () => ({
  render: (h: CreateElement) => (
    <WelcomeSection
      headline={`<div data-fs-style="format.standard">YOUR <div data-fs-style=format.span_yellow_text">INDIVIDUAL</div> HOME</div>`}
      image={{
        src:
          "https://enterpriseqa.e-spirit.cloud/media/img/Block-Bleistift-Kaffee.jpg",
        previewId: "blafasel",
      }}
      jumboHeadline="Smart Living"
      kicker="Welcome"
      buttonText="Read More"
      text={`<div data-fs-style="format.standard">With simple functions and tools, our Smart Living customers can create their own individual home. From light control to central media control.</div>`}
    />
  ),
});

export const interestingFacts = () => ({
  render: (h: CreateElement) => (
    <InterestingFactsSection
      headline={"SMART LIVING GOES A SECOND LINE"}
      tagline={"TAGLINE"}
      text="SMART LIVING IST EIN WELTWEIT FÜHRENDER ANBIETER FÜR SMART HOME LÖSUNGEN SOWOHL FÜR PRIVATE HAUSHALTE ALS AUCH FÜR UMFASSENDE UNTERNEHMENSLÖSUNGEN. SEIT 2014 HABEN WIR VIELE SMARTE PROJEKTE MIT NAMENHAFTEN PARTNERN IM NATIONALEN UND INTERNATIONALEN BEREICH DURCHGEFÜHRT."
      backgroundImage="https://enterpriseqa.e-spirit.cloud/media/img/Block-Bleistift-Kaffee.jpg"
      counters={[
        {
          label: "New Customers",
          value: 5233,
        },
        {
          label: "Millions earned",
          value: 54087,
        },
      ]}
    />
  ),
});

export const newsTeaser = () => ({
  render: (h: CreateElement) => (
    <NewsTeaserSection
      headline="Latest News"
      handleItemClick={() => console.log("CLICKED")}
      items={[
        {
          date: "11 AUG 2020",
          description:
            "There are individual devices available that let you monitor your home from anywhere by using your phone. There are individual devices available that let you monitor your home from anywhere by using your phone. There are individual devices available that let you monitor your home from anywhere by using your phone.",
          image: {
            src:
              "https://enterpriseqa.e-spirit.cloud/media/media/images/Content/Black-vacuum-cleaning-robot-horizontal.jpeg",
            previewId: "lökjhgvhjkl",
          },
          title: "SECURITY HARDWARE INCLUDES LOCKS AND MOTION DETECTORS.",
        },
        {
          date: "10 AUG 2020",
          description: "This is my description",
          image: {
            src:
              "https://enterpriseqa.e-spirit.cloud/media/media/images/Content/Black-vacuum-cleaning-robot-horizontal.jpeg",
            previewId: "lökjhgvhjkl",
          },
          title: "This is my title",
        },
        {
          date: "9 AUG 2020",
          description: "This is my description",
          image: {
            src:
              "https://enterpriseqa.e-spirit.cloud/media/media/images/Content/Black-vacuum-cleaning-robot-horizontal.jpeg",
            previewId: "lökjhgvhjkl",
          },
          title: "This is my title",
        },
      ]}
    />
  ),
});
