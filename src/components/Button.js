import React from "react";

const Button = ({
  className,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  width,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} flex py-2 px-4 border border-aquamarine rounded text-aquamarine transition-colors duration-400 ease-out items-center justify-center hover:bg-aquamarine-tint`}
      style={{ paddingLeft, paddingRight, paddingTop, paddingBottom, width }}
    >
      {text}
    </button>
  );
};

export default Button;
