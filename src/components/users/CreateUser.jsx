import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/users/usersAction";
import { AvailableUserRoles } from "../../constant";

const CreateUser = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    number: "",
    gender: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
    setFormData({
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      number: "",
      gender: "",
      password: "",
      confirmPassword: "",
      role: "",
      dob: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-3.5 py-2 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Create User</h3>
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
                placeholder="Enter your first name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
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
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
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
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Number <span className="text-meta-1">*</span>
              </label>
              <input
                type="tel"
                placeholder="Number"
                maxLength={10}
                minLength={10}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Gender <span className="text-meta-1">*</span>
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select
                  className="relative z-20 w-full appearance-none  rounded border border-stroke bg-transparent px-2 py-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
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
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Roles<span className="text-meta-1">*</span>
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select
                  className="relative z-20 w-full appearance-none  rounded border border-stroke bg-transparent px-2 py-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  {AvailableUserRoles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Password <span className="text-meta-1">*</span>
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Confirm Password <span className="text-meta-1">*</span>
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="w-full xl:w-1/3"></div>
            <div className="w-full xl:w-1/3"></div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex max-w-132.5 justify-center rounded bg-primary p-1.5 font-medium text-gray"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateUser;
