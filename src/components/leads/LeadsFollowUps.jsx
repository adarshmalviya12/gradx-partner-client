import { useParams } from "react-router-dom";
import ConfirmationDialog from "../ConfirmationDialog";
import CreateFollowUps from "./CreateFollowUps";
import LeadDetail from "./LeadDetail";
import LeadFollowUpsTable from "./LeadFollowUpsTable";
import { useDispatch, useSelector } from "react-redux";
import { convertLead } from "../../features/lead/singleLeadActions";

const LeadsFollowUps = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { lead } = useSelector((state) => state.lead);
  const submitRequest = () => {
    dispatch(convertLead(id));
  };

  return (
    <>
      <div className="flex justify-end">
        {lead?.status && lead?.status !== "converted" ? (
          <ConfirmationDialog
            title={"do you want convert"}
            buttonTitle={"convert"}
            onConfirm={submitRequest}
          />
        ) : (
          <button
            className=" mb-1 mr-1 rounded bg-primary bg-opacity-50 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
            type="button"
            disabled
          >
            converted
          </button>
        )}

        <CreateFollowUps />
      </div>
      <LeadDetail />
      <LeadFollowUpsTable />
    </>
  );
};
export default LeadsFollowUps;
