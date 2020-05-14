export interface NavigationProps<T extends NavigationItemBase<T> = any> {
  /**
   * Pass in a callback to determine if the passed item is active
   *
   * With this you can return true for multiple items.
   * For example to show an active parent-child path
   */
  isActiveItem?: (item: T) => boolean;
  /**
   * If an item is clicked this callback will be invoked
   *
   * The Component will not make any decision about your routing strategy
   * so you have to route yourself
   */
  handleNavClick: (item: T) => void;
  /**
   * The items that should be displayed
   */
  items: T[];
  /**
   * Optional depth property
   *
   * The default depth after the children are cut is 3
   */
  depth?: number;
}

export interface NavigationItemBase<T> {
  /**
   * The label that should be displayed
   */
  label: string;
  /**
   * Optional children that should be displayed
   */
  children: T[] | null;
}
