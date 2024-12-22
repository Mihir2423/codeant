/**
 * @description icon path : /icons/icon-name.svg
 */
export const sideLinks = [
  {
    name: "Repositories",
    icon: "home",
    href: "/",
  },
  {
    name: "AI Code Review",
    icon: "code",
    href: "/",
  },
  {
    name: "Cloud Security",
    icon: "cloud",
    href: "/",
  },
  {
    name: "How to Use",
    icon: "book",
    href: "/",
  },
  {
    name: "Settings",
    icon: "settings",
    href: "/",
  },
];

export type SideLinkProps = {
  name: string;
  icon: string;
  href: string;
  isActive?: boolean;
  setIsActive?: (name: string) => void; 
};
