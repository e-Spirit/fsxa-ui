import { CreateElement } from "vue";
import InterestingFactsSection from "@/components/Sections/InterestingFactsSection";
import NewsTeaserSection from "@/components/Sections/NewsTeaserSection";

export default {
  title: "FSXA Sections",
};

export const interestingFacts = () => ({
  render: (h: CreateElement) => (
    <InterestingFactsSection
      props={{
        headline: "SMART LIVING GOES A SECOND LINE",
        tagline: "TAGLINE",
        text:
          "SMART LIVING IST EIN WELTWEIT FÜHRENDER ANBIETER FÜR SMART HOME LÖSUNGEN SOWOHL FÜR PRIVATE HAUSHALTE ALS AUCH FÜR UMFASSENDE UNTERNEHMENSLÖSUNGEN. SEIT 2014 HABEN WIR VIELE SMARTE PROJEKTE MIT NAMENHAFTEN PARTNERN IM NATIONALEN UND INTERNATIONALEN BEREICH DURCHGEFÜHRT.",
        backgroundImage:
          "https://enterpriseqa.e-spirit.cloud/media/img/Block-Bleistift-Kaffee.jpg",
        counters: [
          {
            label: "New Customers",
            value: 5233,
          },
          {
            label: "Millions earned",
            value: 54087,
          },
        ],
      }}
    />
  ),
});

export const newsTeaser = () => ({
  render: (h: CreateElement) => (
    <NewsTeaserSection
      props={{
        headline: "Latest News",
        handleItemClick: () => console.log("CLICKED"),
        items: [
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
        ],
      }}
    />
  ),
});
