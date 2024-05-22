import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { convertDob } from "../../constant";
import Loader from "../Loader";
import { getLeadById } from "../../features/lead/singleLeadActions";
import { useDispatch, useSelector } from "react-redux";

const LeadDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { lead, isLoading } = useSelector((state) => state.lead);

  useEffect(() => {
    dispatch(getLeadById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-strokedark px-3.5 py-2 dark:border-stroke">
        <h3 className="font-medium text-black dark:text-white">Lead Details</h3>
      </div>
      {/* lead details */}
      {lead && (
        <div className="px-3.5 py-2 text-black dark:text-white">
          <p>
            <span className="font-semibold">Name: </span>
            {lead.firstname} {lead.middlename} {lead.lastname}
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            {lead.email}
          </p>
          <p>
            <span className="font-semibold">Number: </span>
            {lead.phone}
          </p>
          <p>
            <span className="font-semibold">Date of birth: </span>
            {lead.dob ? convertDob(lead.dob) : ""}
          </p>
          <p>
            <span className="font-semibold">Course Interested: </span>
            {lead.courseInterest.name}
          </p>
          <p>
            <span className="font-semibold">Status: </span>
            {lead.status}
          </p>

          {lead && (
            <p>
              <span className="font-semibold">Address: </span>
              {lead.address.street} {lead.address.city} {lead.address.state}{" "}
              {lead.address.country} {lead.address.pinCode}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
export default LeadDetail;
