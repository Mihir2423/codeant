import { ChevronDown, PlusCircle, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  username: string;
};
interface Account {
  username: string;
  email: string;
  isActive: boolean;
}

export const ProfileDropdown = ({ username }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const accounts: Account[] = [
    { username: "John Doe", email: "john@company.com", isActive: true },
    { username: "John Personal", email: "john@gmail.com", isActive: false },
    { username: "John Client", email: "john@client.com", isActive: false },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center shadow-[#0A0D120D] shadow-xs px-3 py-2 border border-border-strong rounded-md w-full"
      >
        <div className="flex-1 min-w-0 w">
          <p className="text-content-primary text-base text-start truncate">{username}</p>
        </div>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 text-content-primary ml-1 transition-all ease-in-out duration-150 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="top-full right-0 left-0 z-50 absolute bg-white shadow-lg mt-1 border border-border-strong rounded-md">
          {accounts.map((account, index) => (
            <div
              key={account.email}
              className={`p-3 ${index !== accounts.length - 1 ? "border-b border-gray-100" : ""} ${
                account.isActive ? "bg-gray-50" : "hover:bg-gray-50"
              } cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center bg-gray-200 rounded-full w-8 h-8">
                  <User size={16} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {account.username}
                  </p>
                  <p className="text-gray-500 text-xs">{account.email}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="border-gray-100 pb-2 border-t">
            <button className="flex items-center gap-2 hover:bg-gray-50 px-3 py-2 w-full text-gray-700 text-left text-sm">
              <PlusCircle size={16} className="text-gray-500" />
              <span>Add another account</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
