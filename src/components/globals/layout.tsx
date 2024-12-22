import { ChildrenProps } from "@/types";
import { Sidebar } from "./sidebar";

export const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar username="UtkarshDhairyaPanwar" />
      <main className="flex-1 bg-surface-base md:ml-64 pt-[60px] md:pt-0 overflow-auto">
        {children}
      </main>
    </div>
  );
};

