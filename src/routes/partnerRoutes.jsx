import { Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PartnerLayout from "../layout/PartnerLayout";
import LeadDetails from "../components/leads/LeadDetails";
import SettingsPage from "../pages/SettingsPage";
import CreateLead from "../components/leads/CreateLead";
import LeadsTable from "../components/leads/LeadsTable";
import ConvertedLeadsByUser from "../components/leads/ConvertedLeadsByUser";
import PartnerProfile from "../pages/PartnerProfile";
import Home from "../components/partner/Home";

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
    <Route path="profile" element={<PartnerProfile />} />
    <Route path="settings" element={<SettingsPage />} />
  </Route>
);

export default partnerRoutes;
