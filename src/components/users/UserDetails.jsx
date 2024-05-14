import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Loader from "../Loader";
import BASE_URL, { convertDob } from "../../constant";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserDetails = () => {
  const [editUser, setEditUser] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    number: "",
    gender: "",
    role: "",
    dob: "",
  });

  const { id } = useParams();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("userToken") ?? "";

      const { data } = await axios.patch(
        `${BASE_URL}/gradx/user/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUserDetails(data.data.updatedUser);
      toast.success(data.message);
      setIsLoading(false);
      setEditUser(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("userToken") ?? "";

        const response = await axios.get(`${BASE_URL}/gradx/user/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUserDetails(response.data.data.user);

        // Set initial form data once user details are obtained
        setFormData({
          firstname: response.data.data.user.firstname,
          middlename: response.data.data.user.middlename,
          lastname: response.data.data.user.lastname,
          email: response.data.data.user.email,
          number: response.data.data.user.number,
          gender: response.data.data.user.gender,
          role: response.data.data.user.role,
          dob: response.data.data.user.dob
            ? response.data.data.user.dob.split("T")[0]
            : "",
        });

        setIsLoading(false);
        setEditUser(false);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };

    fetchUserDetails();
  }, [id]); // Fetch user details whenever the ID changes

  if (isLoading) return <Loader />;

  if (error) return <p>Something went wrong</p>;

  return (
    <>
      {!editUser ? (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-strokedark px-3.5 py-2 dark:border-stroke">
            <h3 className="font-medium text-black dark:text-white">
              User Details
            </h3>
          </div>
          {/* user details */}
          {userDetails && (
            <div className="px-3.5 py-2 text-black dark:text-white">
              <p>
                <span className="font-semibold">Name: </span>{" "}
                {userDetails.firstname} {userDetails.middlename}{" "}
                {userDetails.lastname}
              </p>
              <p>
                <span className="font-semibold">Email: </span>{" "}
                {userDetails.email}
              </p>
              <p>
                <span className="font-semibold">Gender : </span>{" "}
                {userDetails.gender}
              </p>
              <p>
                <span className="font-semibold">Date of Birth: </span>{" "}
                {userDetails.dob ? convertDob(userDetails.dob) : ""}
              </p>
              <p>
                <span className="font-semibold">Phone Number: </span>{" "}
                {userDetails.number}
              </p>
              <p>
                <span className="font-semibold">Role: </span> {userDetails.role}
              </p>
              {userDetails?.address && (
                <p>
                  <span className="font-semibold">Address: </span>{" "}
                  {userDetails.address.street}, {userDetails.address.city},{" "}
                  {userDetails.address.state}, {userDetails.address.pinCode},{" "}
                  {userDetails.address.country}
                </p>
              )}
              <p>
                <span className="font-semibold">Active: </span>{" "}
                {userDetails.isActive ? "Yes" : "No"}
              </p>
            </div>
          )}
          <div className="m-1 flex justify-end gap-2">
            <button
              onClick={() => setEditUser(true)}
              className="inline-flex w-15 items-center justify-center bg-primary px-2 py-1 text-center text-white hover:bg-opacity-90"
            >
              Edit
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-3.5 py-2 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Edit User Details
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3.5">
              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    First name <span className="text-meta-1">*</span>
                  </label>

                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="middlename"
                    value={formData.middlename}
                    onChange={handleChange}
                    placeholder="Enter your middle name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Last name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Number <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Gender <span className="text-meta-1">*</span>
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="relative z-20 w-full appearance-none  rounded border border-stroke bg-transparent px-2 py-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                      <FaAngleDown />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Date of Birth <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    placeholder="Enter your date of birth"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-1">
                <button
                  type="submit"
                  className="flex max-w-132.5 justify-center rounded bg-primary p-1.5 font-medium text-gray"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditUser(false)}
                  className="flex max-w-132.5 justify-center rounded bg-body p-1.5 font-medium text-gray"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default UserDetails;
