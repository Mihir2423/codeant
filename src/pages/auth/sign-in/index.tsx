import { Logo } from "@/components/globals";
import classNames from "classnames";
import { useState } from "react";
import { SignInCard } from "./_components/sign-in-card";
import { signInOptions } from "@/constants/sign-in-options";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState("saas");
  return (
    <div className="grid md:grid-cols-2 h-screen">
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
              <div
                className={classNames(
                  "grid grid-cols-2 bg-surface-base border rounded-md w-full"
                )}
              >
                <button
                  className={classNames(
                    "flex-1 py-3 md:py-4 rounded-md text-center",
                    {
                      "bg-action": activeTab === "saas",
                      "bg-surface-base": activeTab !== "saas",
                    }
                  )}
                  onClick={() => setActiveTab("saas")}
                >
                  <h1
                    className={classNames("font-semibold text-lg", {
                      "text-surface-elevated": activeTab === "saas",
                      "text-content-strong": activeTab !== "saas",
                    })}
                  >
                    SAAS
                  </h1>
                </button>
                <button
                  className={classNames(
                    "flex-1 py-3 md:py-4  rounded-md text-center",
                    {
                      "bg-action": activeTab === "self-hosted",
                      "bg-surface-base": activeTab !== "self-hosted",
                    }
                  )}
                  onClick={() => setActiveTab("self-hosted")}
                >
                  <h1
                    className={classNames("font-semibold text-lg", {
                      "text-surface-elevated ": activeTab === "self-hosted",
                      "text-content-strong": activeTab !== "self-hosted",
                    })}
                  >
                    Self Hosted
                  </h1>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 pt-6 w-full">
            {signInOptions.map((option) => {
              return option.type === activeTab ? (
                <SignInCard
                  icon={option.icon}
                  text={option.text}
                  key={option.icon}
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
