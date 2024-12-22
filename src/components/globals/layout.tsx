import { ChildrenProps } from "@/types";
import { Sidebar } from "./sidebar";
import { useState } from "react";
import MobileHeader from "./mobile-header";

export const Layout = ({ children }: ChildrenProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar
        username="UtkarshDhairyaPanwar"
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <MobileHeader
        onMenuClick={() => setIsSidebarOpen((prev) => !prev)}
        isOpen={isSidebarOpen}
      />
      <main className="flex-1 bg-surface-base md:ml-64 pt-[60px] md:pt-0 overflow-auto">
        {children}
      </main>
      {isSidebarOpen && (
        <div
          className="z-30 fixed inset-0 md:hidden bg-black bg-opacity-50"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};
