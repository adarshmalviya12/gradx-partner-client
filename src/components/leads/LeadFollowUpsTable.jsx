import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowUpsForUser } from "../../features/followUps/followAction";
import { useParams } from "react-router-dom";
import { convertDob } from "../../constant";

const LeadFollowUpsTable = () => {
  const dispatch = useDispatch();

  const { followUps } = useSelector((state) => state.followUps);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getFollowUpsForUser(id));
  }, [id]);

  return (
    <div className="mt-5 rounded-sm border border-stroke bg-white px-2 pb-1.5 pt-1 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="px-1 py-1.5 md:px-1.5 xl:px-2.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Follow Ups
        </h4>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray   text-left text-sm dark:bg-meta-4 md:text-base">
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[220px] md:font-medium xl:pl-11">
                Lead Name
              </th>
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[220px] md:font-medium ">
                Lead Status
              </th>

              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[150px] md:font-medium">
                Date
              </th>
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[150px] md:font-medium">
                Next Date
              </th>

              <th className=" min-w-15 px-2 py-2 font-normal text-black dark:text-white md:font-medium">
                Remarks
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {followUps &&
              followUps.map((followUp) => (
                <tr key={followUp._id}>
                  <td className="border-b  border-t  border-stroke px-2 py-2.5 pl-3 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {followUp.lead.firstname} {followUp.lead.lastname}
                    </h5>
                  </td>
                  <td className="border-b  border-t  border-stroke px-2 py-2.5  dark:border-strokedark ">
                    <h5 className="font-medium text-black dark:text-white">
                      {followUp.lead.status}
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <p className=" text-black dark:text-white">
                      {convertDob(followUp.date)}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <p className=" text-black dark:text-white">
                      {convertDob(followUp.nextFollowUpDate)}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <p className=" text-black dark:text-white">
                      {followUp.remarks}
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
export default LeadFollowUpsTable;
