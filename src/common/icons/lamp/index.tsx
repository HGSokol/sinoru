import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

export const Lamp: FC<IIcon> = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="26"
      viewBox="0 0 18 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.25 23H12.75V25.5H5.25V23ZM15.1325 15.14C16.42 13.6325 17.75 12.0738 17.75 9.25C17.75 4.42625 13.8237 0.5 9 0.5C4.17625 0.5 0.25 4.42625 0.25 9.25C0.25 12.1062 1.58375 13.66 2.87625 15.1625C3.32375 15.685 3.7875 16.2263 4.23125 16.8488C4.41125 17.1063 4.70625 18.0938 4.97 19.25H3.98V21.75H14.02V19.25H13.0325C13.2987 18.0912 13.595 17.1012 13.7738 16.8438C14.2137 16.215 14.6813 15.6687 15.1325 15.14Z"
        fill="#ED1C24"
      />
    </svg>
  );
};
