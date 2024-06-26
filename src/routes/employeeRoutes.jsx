import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import ProtectedRoutes from "../components/ProtectedRoutes";
import AllLeadsTable from "../components/leads/AllLeadsTable";
import LeadDetails from "../components/leads/LeadDetails";
import LeadsFollowUps from "../components/leads/LeadsFollowUps";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import LeadsTable from "../components/leads/LeadsTable";
import CreateLead from "../components/leads/CreateLead";
import EmployeeLayout from "../layout/EmployeeLayout";
import AssignedLeads from "../components/leads/AssignedLeads";
import ConvertedAssignedLeads from "../components/leads/ConvertedAssignedLeads";
import ConvertedLeadsByUser from "../components/leads/ConvertedLeadsByUser";
import EmployeeProfile from "../pages/EmployeeProfile";

const employeeRoutes = (
  <Route
    path="/employee"
    element={
      <ProtectedRoutes role={"employee"}>
        <EmployeeLayout />
      </ProtectedRoutes>
    }
  >
    <Route index element={<Home />} />
    <Route path="createLeads" element={<CreateLead />} />
    <Route path="myLeads" element={<LeadsTable />} />
    <Route path="myLeads/:id" element={<LeadDetails />} />
    <Route path="convertedLeads" element={<ConvertedLeadsByUser />} />
    <Route path="convertedLeadsEmployee" element={<ConvertedAssignedLeads />} />
    <Route path="assigned" element={<AssignedLeads />} />
    <Route path="assigned/:id" element={<LeadsFollowUps />} />
    <Route path="all-leads" element={<AllLeadsTable />} />
    <Route path="all-leads/:id" element={<LeadsFollowUps />} />
    <Route path="profile" element={<EmployeeProfile />} />
    <Route path="settings" element={<SettingsPage />} />
  </Route>
);

export default employeeRoutes;
