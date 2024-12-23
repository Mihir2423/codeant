import { sideLinks, type SideLinkProps } from "@/constants/side-links";
import { useState } from "react";
import { Logo } from "../logo";
import { ProfileDropdown } from "./profile-dropdown";
import { SidebarLink } from "./sidebar-link";

interface SidebarProps {
  username: string;
  isOpen: boolean;
  onClose: () => void;
}

const FIXED_LINKS: SideLinkProps[] = [
  { name: "Support", icon: "phone", href: "/" },
  { name: "Logout", icon: "sign-out", href: "/sign-in" },
];

export const Sidebar = ({ username, isOpen }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState<string>("Repositories");

  const renderSidebarLinks = (links: SideLinkProps[]) => (
    <div className="flex flex-col gap-[2px]">
      {links.map((link) => (
        <SidebarLink
          key={link.name}
          {...link}
          isActive={link.name === activeLink}
          setIsActive={setActiveLink}
        />
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="md:fixed md:inset-y-0 md:flex md:flex-col md:justify-between hidden bg-surface-elevated px-5 py-6 border-r border-border md:w-64 h-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            <Logo />
            <ProfileDropdown username={username} />
          </div>
          {renderSidebarLinks(sideLinks)}
        </div>
        {renderSidebarLinks(FIXED_LINKS)}
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-[60px]" : "-translate-y-full"}
        `}
      >
        <div className="absolute inset-0 bg-white h-fit">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center border-gray-200 p-4 pb-0">
              <ProfileDropdown username={username} />
            </div>
            <nav className="flex-1 space-y-1 px-4 py-3 overflow-y-auto">
              {renderSidebarLinks([...sideLinks, ...FIXED_LINKS])}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
