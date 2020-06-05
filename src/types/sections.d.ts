import { FSXABaseComponent, FSXANewsTeaserItemProps } from "./components";

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
