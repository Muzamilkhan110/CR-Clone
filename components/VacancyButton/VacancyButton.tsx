import React from "react";
interface VacancyButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const VacancyButton: React.FC<VacancyButtonProps> = ({
  text,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`bg-bguseclass text-base px-6 py-3 md:px-6 md:py-4 text-center text-white rounded-lg   font-bold
      } ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default VacancyButton;
