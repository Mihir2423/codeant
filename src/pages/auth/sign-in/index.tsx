import { Logo } from "@/components/globals";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { SignInCard } from "./_components/sign-in-card";
import { signInOptions } from "@/constants/sign-in-options";
import { ScaleLoader } from "@/components/ui/scale-loader";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState("saas");
  const [isLoading, setIsLoading] = useState(false);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleLoadingChange = (loading: boolean) => {
    setIsLoading(loading);
  };

  useEffect(() => {
    const currentTab = tabsRef.current[activeTab === "saas" ? 0 : 1];
    setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
    setTabUnderlineWidth(currentTab?.clientWidth ?? 0);

    // Adjust options container height
    if (optionsRef.current) {
      optionsRef.current.style.height = `${optionsRef.current.scrollHeight}px`;
    }
  }, [activeTab]);
  return (
    <div className="relative grid md:grid-cols-2 h-screen">
      {isLoading && <ScaleLoader />}
      <div className="flex justify-start items-end max-md:hidden col-span-1 bg-[url('/bg/auth.png')] bg-cover bg-no-repeat bg-center border-r w-full h-full">
        <img
          src="/images/auth-sub.png"
          alt="auth-sub"
          width={284}
          height={319}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center bg-surface-elevated shadow-shadow-accent shadow-xs py-4 md:py-6 pt-9 border rounded-xl w-full">
          <div className="flex flex-col items-center gap-6 md:gap-9 pb-9 border-b border-border-strong w-full">
            <Logo />
            <div className="flex flex-col gap-5 px-4 md:px-6 w-full">
              <h1 className="text-content-strong font-semibold text-2xl text-center md:text-[32px]">
                Welcome to CodeAnt AI
              </h1>
              <div className="relative bg-gray-100 p-1 rounded-lg">
                {["saas", "self-hosted"].map((tab, idx) => (
                  <button
                    key={tab}
                    ref={(el) => (tabsRef.current[idx] = el)}
                    className={`relative z-10 w-1/2 py-2 text-sm font-medium transition-colors duration-200`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <h1
                      className={classNames(
                        "font-semibold text-lg transition-all ease-in-out duration-150",
                        {
                          "text-surface-elevated": activeTab === tab,
                          "text-content-strong": activeTab !== tab,
                        }
                      )}
                    >
                      {tab === "saas" ? "SAAS" : "Self Hosted"}
                    </h1>
                  </button>
                ))}
                <div
                  className="absolute inset-y-1 bg-action shadow-sm rounded-md w-fit transition-all duration-300 ease-in-out"
                  style={{
                    left: tabUnderlineLeft,
                    width: tabUnderlineWidth,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-4 max-md:px-4 pt-6 w-full min-h-[310px]">
            {signInOptions.map((option) => {
              return option.type === activeTab ? (
                <SignInCard
                  icon={option.icon}
                  text={option.text}
                  key={option.icon}
                  onRouteChange={handleLoadingChange}
                />
              ) : null;
            })}
          </div>
        </div>
        <p className="text-content-strong font-normal text-base">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
