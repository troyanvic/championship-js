import React from "react";

export default function Button({
  color,
  text,
  isOutlined = false,
  onClick,
}: {
  color: string;
  text: string;
  isOutlined?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className={`btn btn-${color} ${isOutlined ? "btn-outline" : ""} btn-xl w-full`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
