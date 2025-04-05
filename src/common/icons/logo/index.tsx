import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

export const Logo: FC<IIcon> = ({ ...props }) => {
  return (
    <svg
      width="102"
      height="48"
      viewBox="0 0 102 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M58.6148 33.333C57.3026 33.389 55.9322 33.389 54.5593 33.389C28.4207 33.389 7.11621 27.2357 7.11621 19.7162C7.11621 13.0927 23.6378 7.53094 45.4307 6.29841V12.5407C34.403 14.4049 26.8674 18.0696 26.8674 22.2773C26.8674 28.0309 40.8328 32.8206 58.6148 33.333Z"
        fill="#C6C6C6"
      />
      <path
        d="M75.8007 7.49804V11.1678L60.886 11.2264V11.2335C58.0655 11.2617 55.3268 11.395 52.707 11.624V6.05294C53.3222 6.0458 53.9396 6.04366 54.5594 6.04366C56.704 6.04366 58.8161 6.08581 60.886 6.16512C63.419 6.26337 65.8887 6.4202 68.2816 6.62812C70.8892 6.85748 73.4032 7.14722 75.8007 7.49804Z"
        fill="#C6C6C6"
      />
      <path
        d="M102 19.7162C102 22.9647 98.1198 25.9235 91.6202 28.2621C95.077 26.5522 97.1069 24.5037 97.1069 22.277C97.1069 18.6891 91.6434 15.4945 83.2051 13.476V8.83097C94.614 11.3339 102 15.2866 102 19.7162Z"
        fill="#C6C6C6"
      />
      <path
        d="M96.499 5.96867V1.21896H98.3078C98.6858 1.21896 98.9644 1.26326 99.1445 1.35186C99.3246 1.44046 99.4721 1.58765 99.5875 1.79343C99.7029 1.99957 99.7604 2.23893 99.7604 2.51044C99.7604 2.86877 99.6625 3.15957 99.4671 3.38143C99.2713 3.604 98.9869 3.74547 98.6136 3.8062C98.7654 3.89302 98.8808 3.9809 98.9598 4.07021C99.1206 4.2517 99.262 4.45355 99.3842 4.67612L100.097 5.96902H99.4178L98.8737 4.98157C98.6629 4.59538 98.5039 4.3353 98.3964 4.20061C98.2896 4.06664 98.1853 3.9759 98.0849 3.92945C97.9841 3.88301 97.843 3.85979 97.6626 3.85979H97.0388V5.96902L96.499 5.96867ZM97.0388 3.31498H98.1992C98.4525 3.31498 98.6447 3.28604 98.7762 3.22745C98.9073 3.16922 99.0112 3.07704 99.0881 2.95201C99.1652 2.82661 99.2034 2.68085 99.2034 2.51473C99.2034 2.27501 99.1298 2.08638 98.983 1.94919C98.8358 1.81201 98.6176 1.74341 98.3282 1.74341H97.0388V3.31498Z"
        fill="white"
      />
      <path
        d="M98.2973 7.12868C96.256 7.12868 94.5947 5.54247 94.5947 3.594C94.5947 1.64482 96.256 0.0589638 98.2973 0.0589638C100.338 0.0589638 102 1.64518 102 3.594C102 5.54247 100.338 7.12868 98.2973 7.12868ZM98.2973 0.475166C96.4957 0.475166 95.0309 1.87382 95.0309 3.594C95.0309 5.31347 96.496 6.71212 98.2973 6.71212C100.098 6.71212 101.563 5.31347 101.563 3.594C101.563 1.87382 100.098 0.475166 98.2973 0.475166Z"
        fill="white"
      />
      <path
        d="M70.6739 0.0585899V3.30496H68.2814V6.62851C65.8889 6.42023 63.4188 6.26375 60.8859 6.1655V3.30496H45.4893V0.0585899H70.6739Z"
        fill="#E30613"
      />
      <path
        d="M83.2055 20.0016V0.0585899H75.8007V11.1681L60.8861 11.2267V20.1142L55.8691 23.9918H88.8723L83.2055 20.0016ZM75.8011 20.6282L72.459 23.7014L68.282 20.3989V17.3211H75.8011V20.6282Z"
        fill="#E30613"
      />
      <path
        d="M52.7074 5.1852V15.7239C52.7074 16.4487 52.6653 17.12 52.621 17.7799C52.3427 21.8376 50.5324 24.9485 44.049 24.9507C36.9996 24.9532 35.587 22.2027 35.4491 17.4008C35.4023 16.5798 35.4023 16.5798 35.4023 16.5798L41.4271 15.6699C41.4271 15.7892 41.4296 15.9343 41.4317 16.0979V16.1004C41.4317 18.4508 41.3313 20.3546 43.4313 20.3546C45.5291 20.3546 45.4308 18.4508 45.4308 16.1004V5.1852H52.7074Z"
        fill="#E30613"
      />
      <path
        d="M24.7061 47.9414V46.5592C24.7061 46.5592 25.2455 46.6267 25.5217 46.6267C26.3466 46.6267 27.174 46.099 27.174 45.3878V38.0122H31.5171L31.5168 46.5667C31.5168 46.9429 31.5168 47.9414 27.9317 47.9414H24.7061Z"
        fill="white"
      />
      <path
        d="M42.8063 39.7057C42.8063 39.7057 42.8059 43.8284 42.8059 45.2764C42.8059 45.724 42.2558 46.2135 41.3398 46.2135C40.4227 46.2135 39.8732 45.724 39.8732 45.2757V39.7057H35.7666V45.724C35.7666 46.0784 35.7666 47.5825 38.7168 47.5825C39.1477 47.5825 39.5314 47.5635 39.8732 47.5264V47.5271C41.0072 47.4213 42.1207 47.1355 42.8542 46.8315L42.8067 47.5014H46.9126V39.7057H42.8063Z"
        fill="white"
      />
      <path
        d="M85.4373 47.4992C85.4373 47.4992 85.4377 43.3765 85.4377 41.9286C85.4377 41.4809 85.9879 40.9915 86.9039 40.9915C87.8209 40.9915 88.3704 41.4809 88.3704 41.9293V47.4992H92.477V41.4809C92.477 41.1265 92.477 39.6225 89.5268 39.6225C89.096 39.6225 88.7123 39.6414 88.3704 39.6786V39.6778C87.2365 39.7836 86.1229 40.0694 85.3895 40.3734L85.437 39.7036H81.3311V47.4992H85.4373Z"
        fill="white"
      />
      <path
        d="M55.299 47.5014C55.299 47.5014 55.2994 43.4212 55.2994 41.9879C55.2994 41.5449 55.8496 41.0604 56.7656 41.0604C57.6826 41.0604 58.2321 41.5445 58.2321 41.9886V47.5014H62.3384V41.5449C62.3384 41.194 62.3384 39.7057 59.3882 39.7057C58.9573 39.7057 58.5736 39.7243 58.2317 39.7615V39.7607C57.0978 39.8654 56.0325 40.1291 55.299 40.4295V38.0127H51.1924V47.5017H55.299V47.5014Z"
        fill="white"
      />
      <path
        d="M68.9683 47.5782C69.3778 47.5789 69.74 47.5603 70.0676 47.5264C71.2019 47.421 72.3151 47.1359 73.0496 46.8304L73.0007 47.4846L77.1566 47.5049L77.098 41.9571C77.098 40.0626 75.8609 39.5439 71.3377 39.5439C68.1242 39.5439 66.295 40.7157 66.295 42.3658L70.0676 42.1007V41.5173C70.0676 40.9068 70.1073 40.3591 71.4313 40.3591C71.96 40.3591 72.3901 40.4356 72.6031 40.5499C72.9049 40.7114 72.9843 40.9718 73.0007 41.2165V41.6874C73.0007 42.3137 72.9024 42.5834 72.5913 42.6959H72.5888C71.9153 42.8485 68.1077 43.668 67.6819 43.7555C66.8634 43.9238 66.2646 44.7255 66.2646 45.4954C66.2646 46.7183 67.2096 47.575 68.9683 47.5782ZM73.0003 45.2771C73.0003 45.7237 72.4509 46.2131 71.5338 46.2131C70.6167 46.2131 70.0673 45.7237 70.0673 45.2746V45.0702C70.1516 44.7358 70.3384 44.4125 70.6732 44.1857C71.1247 43.8802 72.2144 43.6266 73.0003 43.4404V45.2771Z"
        fill="white"
      />
    </svg>
  );
};
