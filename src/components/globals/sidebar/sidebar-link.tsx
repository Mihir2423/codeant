import { SideLinkProps } from "@/constants/side-links";
import classNames from "classnames";

export const SidebarLink = (props: SideLinkProps) => {
  return (
    <button onClick={() => props.setIsActive && props.setIsActive(props.name)}>
      <div
        className={classNames(
          "flex items-center gap-[11px] py-[10px] group hover:bg-action rounded-md cursor-pointer px-[14px] transition-all duration-100 ease-in-out",
          {
            "bg-action": props.isActive,
          }
        )}
      >
        <img
          src={`/icons/${props.icon}.svg`}
          alt={props.icon}
          className={classNames(
            "w-5 h-[18px] group-hover:[filter:brightness(0)_invert(1)]",
            {
              "[filter:brightness(0)_invert(1)]": props.isActive,
            }
          )}
        />
        <p
          className={classNames(
            "group-hover:text-white font-semibold text-base",
            {
              "text-content-primary": !props.isActive,
              "text-white": props.isActive,
            }
          )}
        >
          {props.name}
        </p>
      </div>
    </button>
  );
};
