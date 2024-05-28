import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Loader from "./components/Loader.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import employeeRoutes from "./routes/employeeRoutes.jsx";
import partnerRoutes from "./routes/partnerRoutes.jsx";
import adminRoutes from "./routes/adminRoutes.jsx";
import ReferralPage from "./pages/ReferralPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      // admin routes
      {adminRoutes} // employee
      {employeeRoutes}
      // Partner
      {partnerRoutes}
      //public routes
      <Route path="/refer/:id" element={<ReferralPage />} />
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <ToastContainer transition:Slide autoClose={1000} />
        <RouterProvider router={router} />
      </Suspense>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
