import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLeadsConvertedByLoggedInUser } from "../../features/lead/leadAction";
import Loader from "../Loader";
import { useEffect } from "react";

const ConvertedLeadsByUser = () => {
  const dispatch = useDispatch();

  const { isLoading, leadList } = useSelector((state) => state.leads);

  useEffect(() => {
    dispatch(getLeadsConvertedByLoggedInUser());
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-2 pb-1.5 pt-1 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="px-1 py-1.5 md:px-1.5 xl:px-2.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Leads
        </h4>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray   text-left text-sm dark:bg-meta-4 md:text-base">
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[220px] md:font-medium xl:pl-11">
                Lead Name
              </th>

              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[150px] md:font-medium">
                Status
              </th>
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[150px] md:font-medium">
                Course Interested
              </th>
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[150px] md:font-medium">
                Referred By
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {leadList && leadList.length === 0 ? (
              <h1>No leads converted </h1>
            ) : null}
            {leadList &&
              leadList.map((lead) => (
                <tr key={lead._id}>
                  <td className="border-b  border-t  border-stroke px-2 py-2.5 pl-3 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {lead.firstname} {lead.lastname}
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <p className=" text-black dark:text-white">{lead.status}</p>
                  </td>
                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <p className=" text-black dark:text-white">
                      {lead.courseInterest.name}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <p className=" text-black dark:text-white">
                      {lead.referredBy.firstname} {lead.referredBy.lastname}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ConvertedLeadsByUser;
