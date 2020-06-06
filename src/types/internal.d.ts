export enum PropertyType {
  STRING = "string",
  NUMBER = "number",
  SELECT = "select",
}
export interface PropDefinition<P> {
  key: keyof P;
  type: any;
  default?: any;
  label: string;
}
export interface StringPropertyDefinition<P> extends PropDefinition<P> {
  default?: string;
  type: "string";
}
export interface NumberPropertyDefinition<P> extends PropDefinition<P> {
  default?: number;
  type: "number";
}
export interface SelectPropertyDefinition<P, T = string>
  extends PropDefinition<P> {
  type: "select";
  default?: T;
  options: T[];
}

export type PropertyDefinition<P> =
  | StringPropertyDefinition<P>
  | NumberPropertyDefinition<P>
  | SelectPropertyDefinition<P>;
export interface InteractiveComponentProps<P extends {}> {
  title: string;
  subtitle?: string;
  renderComponent: (props: P) => any;
  changeableProps: PropertyDefinition<P>[];
}
