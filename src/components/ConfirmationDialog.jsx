import { useState } from "react";

const ConfirmationDialog = ({ title, onConfirm, buttonTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  return (
    <>
      {/* Button to open the modal */}

      <button
        className=" mb-1 mr-1 rounded bg-primary px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
        type="button"
        onClick={openModal}
      >
        {buttonTitle}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white  bg-opacity-50 text-black  dark:text-white">
          <div className="min-w-75 max-w-md rounded-md bg-white  p-6  shadow-lg dark:bg-boxdark">
            <h2 className="mb-4 text-lg  font-bold">Confirmation</h2>
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
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationDialog;
