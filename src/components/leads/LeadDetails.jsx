import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { convertDob } from "../../constant";
import Loader from "../Loader";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { editLead, getLeadById } from "../../features/lead/singleLeadActions";
import { getCourses } from "../../features/course/courseAction";

const LeadDetails = () => {
  const [edit, setEdit] = useState(false);
  const { lead, isLoading } = useSelector((state) => state.lead);
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
    dispatch(editLead({ id, formData }));

    setEdit(false);
  };

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getLeadById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (lead) {
      setFormData({
        firstname: lead.firstname || "",
        middlename: lead.middlename || "",
        lastname: lead.lastname || "",
        email: lead.email || "",
        phone: lead.phone || "",
        dob: lead.dob ? lead.dob.split("T")[0] : "",
        gender: lead.gender || "",
        street: lead.address?.street || "",
        city: lead.address?.city || "",
        state: lead.address?.state || "",
        pinCode: lead.address?.pinCode || "",
        country: lead.address?.country || "",
        courseInterest: lead.courseInterest?._id || "",
      });
    }
  }, [lead]);
  if (isLoading) return <Loader />;

  return (
    <>
      {!edit ? (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-strokedark px-3.5 py-2 dark:border-stroke">
            <h3 className="font-medium text-black dark:text-white">
              Lead Details
            </h3>
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
          <div className="m-1 flex justify-end gap-2">
            <button
              onClick={() => setEdit(true)}
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
                  onClick={() => setEdit(false)}
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
