import { FC } from "react";

import style from "./styles/index.module.scss";

type ButtonProps = {
  text: string;
  width?: string;
  variant?: "default" | "alternative";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  text,
  width,
  variant = "default",
  ...props
}) => {
  return (
    <button
      className={`${style.button} ${style[variant]}`}
      style={{ width: `${width}%` }}
      {...props}
    >
      {text}
    </button>
  );
};
