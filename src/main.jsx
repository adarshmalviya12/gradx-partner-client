import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import Dashboard from "./components/Dashboard.jsx";
import UserPage from "./pages/UserPage.jsx";
import UserLayout from "./layout/UserLayout.jsx";
import Home from "./components/Home.jsx";
import LeadsTable from "./components/leads/LeadsTable.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <UserLayout />,
    children: [
      { path: "home", element: <Home />, index: true },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "leads",
        element: <LeadsTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
