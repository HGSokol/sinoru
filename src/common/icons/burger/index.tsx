import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

const Burger: FC<IIcon> = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="9"
      viewBox="0 0 18 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1H17M1 7.98254H17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Burger;
