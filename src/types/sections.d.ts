import {
  FSXABaseComponent,
  FSXANewsTeaserItemProps,
  Breadcrumb,
} from "./components";

export interface NewsTeaserSectionProps {
  headline: string;
  items: Omit<FSXANewsTeaserItemProps, "handleClick" | "latest">[];
  handleItemClick: (item: FSXANewsTeaserItemProps) => void;
}
export class NewsTeaserSection extends FSXABaseComponent<
  NewsTeaserSectionProps
> {}

export interface InterestingFactsSectionProps {
  backgroundImage?: string;
  headline: string;
  tagline: string;
  text: string;
  counters: Array<{
    previewId?: string;
    value: number;
    label: string;
  }>;
}
export class InterestingFactsSection extends FSXABaseComponent<
  InterestingFactsSectionProps
> {}

export interface WelcomeSectionProps {
  headline: string;
  jumboHeadline: string;
  kicker: string;
  text: string;
  image?: {
    src: string;
    previewId: string;
  };
  buttonText: string;
  handleButtonClick?: () => void;
}
export class WelcomeSection extends FSXABaseComponent<WelcomeSectionProps> {}

export interface HeaderSectionProps {
  backgroundImage?: string;
  title: string;
  breadcrumbs: Breadcrumb[];
  handleItemClick?: (item: Breadcrumb) => void;
}
export class HeaderSection extends FSXABaseComponent<HeaderSectionProps> {}
