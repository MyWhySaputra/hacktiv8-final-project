import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Compare from "../pages/ComparePage";
import Landing from "../pages/LandingPage";
import News from "../pages/NewsPage";
import CountryCompareResult from "../components/CountryCompareResult";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "compare",
        element: <Compare />,
      },
      {
        path: "compare/:code1/n/:code2",
        element: <CountryCompareResult />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

export default router;
