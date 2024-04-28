import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const UserDetails = () => {
  const [editUser, setEditUser] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstname: "John",
    middlename: "Doe",
    lastname: "Smith",
    email: "john@example.com",
    dob: "1990-05-15",
    number: 1234567890,
    roles: ["admin", "user"],
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      pinCode: 10001,
      country: "USA",
    },

    isActive: true,
  });

  const handleSubmit = () => {};

  return (
    <>
      {!editUser ? (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-strokedark px-3.5 py-2 dark:border-stroke">
            <h3 className=" font-medium text-black dark:text-white">
              User Details
            </h3>
          </div>
          {/* user details */}
          <div className="px-3.5 py-2 text-black dark:text-white">
            <p>
              <span className="font-semibold">Name: </span>{" "}
              {userDetails.firstname} {userDetails.middlename}{" "}
              {userDetails.lastname}
            </p>
            <p>
              <span className="font-semibold">Email: </span> {userDetails.email}
            </p>
            <p>
              <span className="font-semibold">Date of Birth: </span>{" "}
              {userDetails.dob}
            </p>
            <p>
              <span className="font-semibold">Phone Number: </span>{" "}
              {userDetails.number}
            </p>
            <p>
              <span className="font-semibold">Roles: </span>{" "}
              {userDetails.roles.join(", ")}
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
          <div className="m-1 flex justify-end gap-2">
            <button
              onClick={() => setEditUser(true)}
              className="inline-flex w-15 items-center justify-center bg-primary px-2 py-1 text-center  text-white hover:bg-opacity-90 "
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
          <form action="#">
            <div className="p-3.5">
              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    First name <span className="text-meta-1">*</span>
                  </label>

                  <input
                    type="text"
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
                    placeholder="Number"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Gender <span className="text-meta-1">*</span>
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none  rounded border border-stroke bg-transparent px-2 py-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Select</option>
                      <option value="">Male</option>
                      <option value="">Female</option>
                      <option value="">Gender</option>
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
                    Password <span className="text-meta-1">*</span>
                  </label>

                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Confirm Password <span className="text-meta-1">*</span>
                  </label>

                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="w-full xl:w-1/3"></div>
              </div>

              <div className="flex justify-end gap-1">
                <button className="flex max-w-132.5 justify-center rounded bg-primary p-1.5 font-medium text-gray">
                  Save
                </button>
                <button
                  onClick={() => setEditUser(false)}
                  className="flex max-w-132.5 justify-center rounded bg-body p-1.5 font-medium text-gray"
                >
                  Cancle
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
