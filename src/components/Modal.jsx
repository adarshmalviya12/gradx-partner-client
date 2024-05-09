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
