import { useNavigate } from "react-router-dom";

type Props = {
  icon: string;
  text: string;
};

export const SignInCard = ({ icon, text }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/repositories");
  };

  return (
    <div className="w-full md:w-2/3">
      <div
        className="flex justify-center items-center gap-4 py-4 border border-border-strong rounded-[8px] w-full cursor-pointer"
        onClick={handleClick}
      >
        <img src={`/icons/${icon}.svg`} alt={icon} width={24} height={24} />
        <h1 className="text-content-light font-semibold text-base">{text}</h1>
      </div>
    </div>
  );
};
