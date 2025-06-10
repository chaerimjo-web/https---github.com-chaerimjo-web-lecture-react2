import React from "react";

const Button = ({ styleType, block, children, ...rest }) => {
  let className = "Button";
  if (styleType) className += `${styleType}`;
  if (block) className += ` block`;

  return <button className={className} {...rest}>{children}</button>;
};
export default Button;
