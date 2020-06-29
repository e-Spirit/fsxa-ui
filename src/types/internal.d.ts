import { FSXABaseComponent } from "./components";

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
export class PropsTable extends FSXABaseComponent<PropsTableProps> {}
