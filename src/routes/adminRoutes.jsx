import { Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Home from "../components/Home";
import ConvertedLeads from "../components/leads/ConvertedLeads";
import LeadDetails from "../components/leads/LeadDetails";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import AdminLayout from "../layout/AdminLayout";
import UsersPage from "../pages/UsersPage";
import LeadsPage from "../pages/LeadsPage";
import CoursesPage from "../pages/CoursesPage";
import UserDetails from "../components/users/UserDetails";
import CourseDetails from "../components/courses/CourseDetails";

const adminRoutes = (
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
    <Route path="converted" element={<ConvertedLeads />} />
    <Route path="profile" element={<ProfilePage />} />
    <Route path="settings" element={<SettingsPage />} />
  </Route>
);

export default adminRoutes;
