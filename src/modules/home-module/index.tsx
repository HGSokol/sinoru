import type { RouteObject } from "react-router-dom";

import HomePage from "~/modules/home-module/ui/pages/home-page";

const homeModule: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/privacy",
    async lazy() {
      const PrivacyPage = await import(
        "~/modules/home-module/ui/pages/privacy-page"
      );
      return { Component: PrivacyPage.default };
    },
  },
];

export default homeModule;
