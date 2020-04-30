export interface NavigationProps {
  activePath: string;
  handleNavClick: (item: NavigationItem) => void;
  items: NavigationItem[];
}

export interface NavigationItem {
  label: string;
  path: string;
  children: NavigationItem[];
}
