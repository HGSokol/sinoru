import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

export const Schedule: FC<IIcon> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.75 3H18.25V0.5H15.75V3H8.25V0.5H5.75V3H3.25C1.87125 3 0.75 4.12125 0.75 5.5V23C0.75 24.3787 1.87125 25.5 3.25 25.5H20.75C22.1287 25.5 23.25 24.3787 23.25 23V5.5C23.25 4.12125 22.1287 3 20.75 3ZM15.015 21.75L11.9538 20.14L8.8925 21.75L9.4775 18.34L7 15.9275L10.4225 15.43L11.9538 12.33L13.485 15.43L16.9075 15.9275L14.4312 18.3413L15.015 21.75ZM20.75 9.25H3.25V6.75H20.75V9.25Z"
        fill="#ED1C24"
      />
    </svg>
  );
};
