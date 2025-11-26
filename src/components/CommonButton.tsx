import React from "react";

interface BtnProps {
  title: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function CommonButton({
  title,
  onClick,
  className = "",
  type = "button"
}: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 bg-green-600 hover:bg-green-700 
                  text-white text-lg font-semibold rounded-lg 
                  transition-all duration-300 ${className}`}
    >
      {title}
    </button>
  );
}
