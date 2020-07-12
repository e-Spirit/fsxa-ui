import { Component } from "vue-tsx-support";

export interface Property {
  key: string;
  type: string;
  default?: any;
  values?: string[];
  required: boolean;
  description: string;
}

export interface InteractiveComponentProps {
  title: string;
  subtitle?: string;
  renderComponent: (props: any) => any;
  changeableProps: Property[];
}

// eslint-disable-next-line
export interface PropsTableProps {}
export class PropsTable extends Component<PropsTableProps> {}

export interface DevInfoProps {
  headline: string;
  content?: string;
  devModeHint: string;
  isOverlay?: boolean;
}
export class DevInfo extends Component<DevInfoProps> {}

export class DevInfoTarget extends Component<{}> {}
