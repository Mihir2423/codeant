import { sideLinks } from "@/constants/side-links";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Logo } from "../logo";
import { SidebarLink } from "./sidebar-link";

interface SidebarProps {
  username: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ username, isOpen }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState<string>("Repositories");

  return (
    <>
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
          <SidebarLink name="Logout" icon="sign-out" href="/sign-in" />
        </div>
      </aside>
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 h-fit transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-[60px] opacity-1"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center border-gray-200 p-4 pb-0">
            <button className="flex justify-between items-center shadow-[#0A0D120D] shadow-xs px-3 py-2 border border-border-strong rounded-md w-full">
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
          <nav className="flex-1 space-y-1 px-4 py-3 overflow-y-auto">
            <div className="flex flex-col gap-[2px]">
              {sideLinks.map((link) => (
                <SidebarLink
                  key={link.name}
                  name={link.name}
                  icon={link.icon}
                  href={link.href}
                />
              ))}
              <SidebarLink name="Support" icon="phone" href="/" />
              <SidebarLink name="Logout" icon="sign-out" href="/sign-in" />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
