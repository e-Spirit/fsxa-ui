export interface ButtonProps {
  handleClick?: () => void;
  /**
   * The button variant
   */
  variant?: "default" | "inverted" | "tag" | "animated";
}
