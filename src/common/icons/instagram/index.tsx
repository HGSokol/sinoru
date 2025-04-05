import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

export const Instagram: FC<IIcon> = ({ ...props }) => {
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
        d="M14.9999 11.131C13.9738 11.131 12.9897 11.5386 12.2641 12.2642C11.5385 12.9898 11.1309 13.9739 11.1309 15C11.1309 16.0262 11.5385 17.0103 12.2641 17.7359C12.9897 18.4614 13.9738 18.8691 14.9999 18.8691C16.026 18.8691 17.0101 18.4614 17.7357 17.7359C18.4613 17.0103 18.869 16.0262 18.869 15C18.869 13.9739 18.4613 12.9898 17.7357 12.2642C17.0101 11.5386 16.026 11.131 14.9999 11.131Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.39604 3.73925C12.7853 3.25301 17.2149 3.25301 21.6042 3.73925C24.0022 4.00695 25.9354 5.89474 26.217 8.30151C26.7372 12.7522 26.7372 17.2484 26.217 21.6991C25.9354 24.1059 24.0022 25.9937 21.6055 26.2626C17.2158 26.749 12.7858 26.749 8.39604 26.2626C5.9981 25.9937 4.06486 24.1059 3.78327 21.7004C3.263 17.2492 3.263 12.7527 3.78327 8.30151C4.06486 5.89474 5.9981 4.00695 8.39604 3.73925ZM21.3138 7.42391C20.9789 7.42391 20.6577 7.55695 20.4209 7.79376C20.1841 8.03057 20.0511 8.35175 20.0511 8.68665C20.0511 9.02155 20.1841 9.34273 20.4209 9.57954C20.6577 9.81634 20.9789 9.94938 21.3138 9.94938C21.6487 9.94938 21.9699 9.81634 22.2067 9.57954C22.4435 9.34273 22.5765 9.02155 22.5765 8.68665C22.5765 8.35175 22.4435 8.03057 22.2067 7.79376C21.9699 7.55695 21.6487 7.42391 21.3138 7.42391ZM9.00215 15.0003C9.00215 13.4096 9.63408 11.8839 10.7589 10.7591C11.8838 9.63426 13.4094 9.00233 15.0001 9.00233C16.5909 9.00233 18.1165 9.63426 19.2414 10.7591C20.3662 11.8839 20.9981 13.4096 20.9981 15.0003C20.9981 16.5911 20.3662 18.1167 19.2414 19.2415C18.1165 20.3664 16.5909 20.9983 15.0001 20.9983C13.4094 20.9983 11.8838 20.3664 10.7589 19.2415C9.63408 18.1167 9.00215 16.5911 9.00215 15.0003Z"
        fill="white"
      />
    </svg>
  );
};
