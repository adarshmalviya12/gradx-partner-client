import { FaAngleDown } from "react-icons/fa";

const CreateLead = () => {
  return (
    <div className="mb-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-3.5 py-2 dark:border-strokedark">
        <h3 className="text-lg font-medium text-black dark:text-white">
          Create Lead
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
                Date of Birth <span className="text-meta-1">*</span>
              </label>
              <input
                type="date"
                mi
                placeholder="Number"
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
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Course Interested <span className="text-meta-1">*</span>
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select className="relative z-20 w-full appearance-none  rounded border border-stroke bg-transparent px-2 py-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                  <option value="">Select</option>
                  <option value="">Full Stack Develeopment</option>
                  <option value="">MERN Development</option>
                  <option value="">UIUX</option>
                  <option value="">SAlESFORCE</option>
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
                placeholder="Enter your Street"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                City
              </label>
              <input
                type="text"
                placeholder="Enter your City"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                State <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your State"
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
                placeholder="Enter your Country"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Pincode
              </label>
              <input
                type="number"
                placeholder="Enter your Pincode"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition [appearance:textfield] focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input  dark:focus:border-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            <div className="w-full xl:w-1/3"></div>
          </div>
          <div className="flex justify-end">
            <button className="flex max-w-132.5 justify-center rounded bg-primary p-1.5 font-medium text-gray">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreateLead;
