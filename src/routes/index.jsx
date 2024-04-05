import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/overview";
import AllPayments from "../pages/payments";

const CustomRoutes = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/payments",
        element: <AllPayments />,
      },
    ],
  },
]);

export default CustomRoutes;
