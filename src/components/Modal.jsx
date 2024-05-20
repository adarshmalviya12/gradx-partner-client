import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Modal({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <button onClick={openModal} className=" text-white">
        <FaTrashAlt />
      </button>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white  bg-opacity-50 text-black dark:bg-boxdark dark:text-white">
          <div className="max-w-md rounded-md  p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Confirmation</h2>
            <p className="mb-4">{title}</p>

            //



            <form onSubmit={handleSubmit} className="p-3.5">
      <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-1/3">
          <label className="mb-1.5 block text-black dark:text-white">
            Next followUp Date <span className="text-meta-1">*</span>
          </label>
          <input
            type="date"
            name="followUpDate"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="w-full xl:w-1/3">
          <label className="mb-1.5 block text-black dark:text-white">
            FollowUp Status<span className="text-meta-1">*</span>
          </label>
          <input
            type="text"
            name="followUpStatus"
            value={formData.followUpStatus}
            onChange={handleChange}
            placeholder="Enter followUpStatus"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="w-full xl:w-1/3">
          <label className="mb-1.5 block text-black dark:text-white">
            Details
          </label>
          <input
            type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter Details"
            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>
    </form>







            //
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 hover:bg-gray-400 mr-2 rounded-md px-4 py-2"
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-primary px-4 py-2 text-white hover:bg-secondary"
                onClick={closeModal}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
