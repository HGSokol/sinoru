import { FC } from "react";
import style from "./styles/light.module.scss";

type ButtonProps = {
  text: string;
  width?: string;
  variant?: "default" | "alternative";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
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

export default Button;
