import React from "react";

export default function Button({
  color = "primary",
  text = "Button",
  isOutlined = false,
  hasMargin = false,
  isDisabled = false,
  onClick,
}: {
  color?: string;
  text: string;
  isOutlined?: boolean;
  hasMargin?: boolean;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className={`btn btn-${color} ${isOutlined ? "btn-outline" : ""} btn-xl w-full ${hasMargin ? "mt-2" : ""}`}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      data-theme={isDisabled ? "light" : "dark"}
    >
      {text}
    </button>
  );
}
