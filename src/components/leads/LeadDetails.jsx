import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL, { convertDob } from "../../constant";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const LeadDetails = () => {
  const [editLead, setEditLead] = useState(false);
  const [LeadDetails, setLeadDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    courseInterest: "",
  });

  const dispatch = useDispatch();
  const { courseList } = useSelector((state) => state.course);

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
        `${BASE_URL}/gradx/lead/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setLeadDetails(data.data.updatedLead);
      toast.success(data.message);
      setIsLoading(false);
      setEditLead(false);
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        setIsLoading(false);
      } else {
        console.error(error.message);
        setIsLoading(false);
      }
    }
  };

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

        setFormData({
          firstname: response.data.data.lead.firstname,
          middlename: response.data.data.lead.middlename,
          lastname: response.data.data.lead.lastname,
          email: response.data.data.lead.email,
          number: response.data.data.lead.number,
          gender: response.data.data.lead.gender,
          dob: response.data.data.lead.dob
            ? response.data.data.lead.dob.split("T")[0]
            : "",

          street: response.data.data.lead.address.street,
          city: response.data.data.lead.address.city,
          state: response.data.data.lead.address.state,
          pinCode: response.data.data.lead.address.pinCode,
          country: response.data.data.lead.address.country,
          courseInterest: response.data.data.lead.courseInterest._id,
        });
        setIsLoading(false);
        setEditLead(false);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchLeadDetails();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      {!editLead ? (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-strokedark px-3.5 py-2 dark:border-stroke">
            <h3 className="font-medium text-black dark:text-white">
              Lead Details
            </h3>
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
          <div className="m-1 flex justify-end gap-2">
            <button
              onClick={() => setEditLead(true)}
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
              Edit Lead Details
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
                    name="phone"
                    minLength={10}
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
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

              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
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
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Course Interested <span className="text-meta-1">*</span>
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select
                      name="courseInterest"
                      value={formData.courseInterest}
                      onChange={handleChange}
                      className="relative z-20 w-full appearance-none  rounded border border-stroke bg-transparent px-2 py-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    >
                      <option value="">Select</option>
                      {courseList &&
                        courseList.map((course) => (
                          <option key={course._id} value={course._id}>
                            {course.name}
                          </option>
                        ))}
                    </select>
                    <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                      <FaAngleDown />
                    </span>
                  </div>
                </div>
                <div className="w-full xl:w-1/3"></div>
              </div>

              <h1 className="font-semibold  text-black dark:text-white">
                Address :
              </h1>
              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Street <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Enter your street address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    State <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter your state"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Country <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter your country"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Pincode
                  </label>
                  <input
                    type="tel"
                    name="pinCode"
                    min={6}
                    max={6}
                    value={formData.pinCode}
                    onChange={handleChange}
                    placeholder="Enter your pincode"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition [appearance:textfield] focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input  dark:focus:border-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>
                <div className="w-full xl:w-1/3"></div>
              </div>

              <div className="flex justify-end gap-1">
                <button
                  type="submit"
                  className="flex max-w-132.5 justify-center rounded bg-primary p-1.5 font-medium text-gray"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditLead(false)}
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
export default LeadDetails;
