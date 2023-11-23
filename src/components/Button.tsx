import React from "react";

type ButtonProps = {
  text: string;
  handleClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
