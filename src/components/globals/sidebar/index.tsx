import { sideLinks } from "@/constants/side-links";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Logo } from "../logo";
import { SidebarLink } from "./sidebar-link";

interface SidebarProps {
  username: string;
}

export const Sidebar = ({ username }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState<string>("Repositories");

  return (
    <aside className="md:fixed md:inset-y-0 md:flex md:flex-col justify-between hidden bg-surface-elevated px-5 py-6 border-r border-border md:w-64 h-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5">
          <Logo />
          <button className="flex justify-between items-center shadow-[#0A0D120D] shadow-xs px-3 py-2 border border-border-strong rounded-md">
            <div className="flex-1 min-w-0">
              <p className="text-content-primary text-base truncate">
                {username}
              </p>
            </div>
            <ChevronDown
              size={18}
              className="flex-shrink-0 text-content-primary ml-2"
            />
          </button>
        </div>
        <div className="flex flex-col gap-[2px]">
          {sideLinks.map((link) => (
            <SidebarLink
              key={link.name}
              name={link.name}
              icon={link.icon}
              href={link.href}
              isActive={link.name === activeLink}
              setIsActive={setActiveLink}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[2px]">
        <SidebarLink name="Support" icon="phone" href="/" />
        <SidebarLink name="Logout" icon="sign-out" href="/" />
      </div>
    </aside>
  );
};
