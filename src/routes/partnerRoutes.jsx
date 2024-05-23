import { Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PartnerLayout from "../layout/PartnerLayout";
import Home from "../components/Home";
import LeadDetails from "../components/leads/LeadDetails";
import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import CreateLead from "../components/leads/CreateLead";
import LeadsTable from "../components/leads/LeadsTable";
import ConvertedLeads from "../components/leads/ConvertedLeads";
import ConvertedLeadsByUser from "../components/leads/ConvertedLeadsByUser";

const partnerRoutes = (
  <Route
    path="/partner"
    element={
      <ProtectedRoutes role={"partner"}>
        <PartnerLayout />
      </ProtectedRoutes>
    }
  >
    <Route index element={<Home />} />
    <Route path="createLeads" element={<CreateLead />} />
    <Route path="myLeads" element={<LeadsTable />} />
    <Route path="myLeads/:id" element={<LeadDetails />} />
    <Route path="convertedLeads" element={<ConvertedLeadsByUser />} />
    <Route path="profile" element={<ProfilePage />} />
    <Route path="settings" element={<SettingsPage />} />
  </Route>
);

export default partnerRoutes;
