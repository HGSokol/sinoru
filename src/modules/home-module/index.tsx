import type { RouteObject } from "react-router-dom";

import HomePage from "~/modules/home-module/ui/pages/home-page";
import PrivacyPage from "~/modules/home-module/ui/pages/privacy-page";

const homeModule: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
];

export default homeModule;
