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
import LeadsPage from "./pages/LeadsPage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import UserDetails from "./components/users/UserDetails.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import AdminLayout from "./layout/AdminLayout.jsx";
import ProtectedRoutes from "../src/components/ProtectedRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseDetails from "./components/courses/CourseDetails.jsx";
import LeadDetails from "./components/leads/LeadDetails.jsx";
import RequestPage from "./pages/RequestPage.jsx";
import employeeRoutes from "./routes/employeeRoutes.jsx";
import partnerRoutes from "./routes/partnerRoutes.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      // admin routes
      <Route
        path="/admin"
        element={
          <ProtectedRoutes role={"admin"}>
            <AdminLayout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Home />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:id" element={<CourseDetails />} />
        <Route path="leads" element={<LeadsPage />} />
        <Route path="leads/:id" element={<LeadDetails />} />
        <Route path="requests" element={<RequestPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      // employee
      {employeeRoutes}
      // Partner
      {partnerRoutes}
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
