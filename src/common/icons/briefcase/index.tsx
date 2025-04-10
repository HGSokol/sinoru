import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

export const Вriefcase: FC<IIcon> = ({ ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 7.5H21.25V5C21.25 3.62125 20.1287 2.5 18.75 2.5H11.25C9.87125 2.5 8.75 3.62125 8.75 5V7.5H5C3.62125 7.5 2.5 8.62125 2.5 10V15H8.75V12.5H11.25V15H18.75V12.5H21.25V15H27.5V10C27.5 8.62125 26.3787 7.5 25 7.5ZM11.25 5H18.75V7.5H11.25V5ZM21.25 18.75H18.75V16.25H11.25V18.75H8.75V16.25H2.5V23.75C2.5 25.1287 3.62125 26.25 5 26.25H25C26.3787 26.25 27.5 25.1287 27.5 23.75V16.25H21.25V18.75Z"
        fill="#ED1C24"
      />
    </svg>
  );
};
