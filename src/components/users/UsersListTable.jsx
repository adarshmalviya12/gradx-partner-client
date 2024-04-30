import { FaEdit, FaEye } from "react-icons/fa";
import { useEffect } from "react";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/users/usersAction";

const UsersListTable = () => {
  const dispatch = useDispatch();

  const { isLoading, usersList, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) return <p> something went wrong {error} </p>;

  return (
    <div className="rounded-sm border border-stroke bg-white px-2 pb-1.5 pt-1 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="flex justify-between px-1 py-1.5 md:px-1.5 xl:px-2.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Users
        </h4>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray text-left text-sm dark:bg-meta-4 md:text-base">
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[220px] md:font-medium xl:pl-11">
                User Name
              </th>
              <th className="min-w-25 px-2 py-2 font-normal text-black dark:text-white md:min-w-[150px] md:font-medium">
                Number
              </th>

              <th className=" min-w-15 px-2 py-2 font-normal text-black dark:text-white md:font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {usersList &&
              usersList.map((user) => (
                <tr key={user._id}>
                  <td className="border-b  border-t  border-stroke px-2 py-2.5 pl-3 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {user.firstname} {user.lastname}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <p className="text-black dark:text-white">{user.number}</p>
                  </td>

                  <td className="border-b border-[#eee] px-1 py-1.5 dark:border-strokedark">
                    <div className="flex items-center space-x-3.5">
                      <div className="flex justify-center gap-2">
                        <Link to={`${user._id}`}>
                          <FaEye />
                        </Link>
                        <button>
                          <FaEdit />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UsersListTable;
