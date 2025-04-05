import type { FC } from "react";

export interface IFlame {
  width?: number;
  opacity?: number;
  color?: string;
  onClick?: () => void;
  className?: string;
}

export const Cross: FC<IFlame> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.7625 10L20 18.2375L18.2375 20L10 11.7625L1.7625 20L0 18.2375L8.2375 10L0 1.7625L1.7625 0L10 8.2375L18.2375 0L20 1.7625L11.7625 10Z"
        fill={props.color}
      />
    </svg>
  );
};
