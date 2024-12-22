import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

interface MobileHeaderProps {
  onMenuClick: () => void;
  isOpen: boolean;
}

export default function MobileHeader({ onMenuClick, isOpen }: MobileHeaderProps) {
  return (
    <header className="top-0 right-0 left-0 z-[32] fixed flex justify-between items-center border-gray-200 md:hidden bg-white px-4 border-b h-[60px]">
      <Logo />
      <button
        onClick={onMenuClick}
        className="hover:bg-gray-100 p-2 rounded-md"
        aria-label="Open menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
