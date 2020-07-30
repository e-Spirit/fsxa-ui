import { Component } from "vue-tsx-support";

export interface BaseLayoutProps {
  /**
   * Callback that will be invoked when content-sections should be rendered
   */
  renderContentElements: (index: number) => JSX.Element;
}
export class BaseLayout<Props = {}> extends Component<
  Props & BaseLayoutProps
> {}

export class HomepageLayoutProps {}
export class HomepageLayout extends Component<HomepageLayoutProps> {}

export class StandardLayoutProps {}
export class StandardLayout extends Component<StandardLayoutProps> {}
