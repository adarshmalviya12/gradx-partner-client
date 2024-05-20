import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL, { convertDob } from "../../constant";
import axios from "axios";
import Loader from "../Loader";

const LeadDetail = () => {
  const [LeadDetails, setLeadDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchLeadDetails = async () => {
      setIsLoading(true);

      try {
        const token = localStorage.getItem("userToken") ?? "";

        const response = await axios.get(`${BASE_URL}/gradx/lead/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setLeadDetails(response.data.data.lead);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchLeadDetails();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-strokedark px-3.5 py-2 dark:border-stroke">
        <h3 className="font-medium text-black dark:text-white">Lead Details</h3>
      </div>
      {/* lead details */}
      {LeadDetails && (
        <div className="px-3.5 py-2 text-black dark:text-white">
          <p>
            <span className="font-semibold">Name: </span>
            {LeadDetails.firstname} {LeadDetails.middlename}{" "}
            {LeadDetails.lastname}
          </p>
          <p>
            <span className="font-semibold">Email: </span>
            {LeadDetails.email}
          </p>
          <p>
            <span className="font-semibold">Number: </span>
            {LeadDetails.phone}
          </p>
          <p>
            <span className="font-semibold">Date of birth: </span>
            {LeadDetails.dob ? convertDob(LeadDetails.dob) : ""}
          </p>
          <p>
            <span className="font-semibold">Course Interested: </span>
            {LeadDetails.courseInterest.name}
          </p>
          <p>
            <span className="font-semibold">Status: </span>
            {LeadDetails.status}
          </p>

          {LeadDetails && (
            <p>
              <span className="font-semibold">Address: </span>
              {LeadDetails.address.street} {LeadDetails.address.city}{" "}
              {LeadDetails.address.state} {LeadDetails.address.country}{" "}
              {LeadDetails.address.pinCode}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
export default LeadDetail;
