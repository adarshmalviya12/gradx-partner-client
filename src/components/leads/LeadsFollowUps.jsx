import FormModal from "../users/FormModal";
import CreateFollowUps from "./CreateFollowUps";
import LeadDetail from "./LeadDetail";
import LeadFollowUpsTable from "./LeadFollowUpsTable";

const LeadsFollowUps = () => {
  return (
    <>
      <div className="flex justify-end">
        <CreateFollowUps />
      </div>
      <LeadDetail />
      <LeadFollowUpsTable />
    </>
  );
};
export default LeadsFollowUps;
