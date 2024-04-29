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
import UserLayout from "./layout/UserLayout.jsx";
import Home from "./components/Home.jsx";
import LeadsPage from "./pages/LeadsPage.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import UserDetails from "./components/users/UserDetails.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="users" index element={<UsersPage />}></Route>
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="leads" index element={<LeadsPage />} />
        <Route path="courses" index element={<CoursesPage />} />
        <Route path="profile" index element={<ProfilePage />} />
        <Route path="settings" index element={<SettingsPage />} />
      </Route>
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
