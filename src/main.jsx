import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import Dashboard from "./components/Dashboard.jsx";
import UserPage from "./pages/UserPage.jsx";
import UserLayout from "./layout/UserLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "users",
        element: <UserPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
