import { FaAngleDown } from "react-icons/fa";

const CreateCourse = () => {
  return (
    <div className="mb-5 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-3.5 py-2 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Create User</h3>
      </div>
      <form action="#">
        <div className="p-3.5">
          <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                course name <span className="text-meta-1">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter your course name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Details
              </label>
              <input
                type="text"
                placeholder="Enter your Details"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div className="w-full xl:w-1/3">
              <label className="mb-1.5 block text-black dark:text-white">
                Duration<span className="text-meta-1">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter your Duration in months"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition [appearance:textfield] focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input  dark:focus:border-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
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
export default CreateCourse;
