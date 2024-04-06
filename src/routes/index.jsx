import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../pages/overview";
import AllPaymentsPage from "../pages/all-payments";
import ReconcilledPaymentPage from "../pages/reconcilled-payments";
import UnreconcilledPaymentPage from "../pages/unreconcilled-payments";
import ManualSettlementPage from "../pages/manual-settlement";

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
        path: "/all-payments",
        element: <AllPaymentsPage />,
      },
      {
        path: "/reconcilled-payments",
        element: <ReconcilledPaymentPage />,
      },
      {
        path: "/unreconcilled-payments",
        element: <UnreconcilledPaymentPage />,
      },
      {
        path: "/manual-settlement",
        element: <ManualSettlementPage />,
      },
    ],
  },
]);

export default CustomRoutes;
