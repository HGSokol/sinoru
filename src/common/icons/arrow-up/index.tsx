import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

export const ArrowUp: FC<IIcon> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.59961 9.60005L9.99961 1.20005M9.99961 1.20005L18.3996 9.60005M9.99961 1.20005L9.99961 22.8"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
