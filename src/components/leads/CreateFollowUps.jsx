import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFollowUps } from "../../features/followUps/followAction";
import { useParams } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const CreateFollowUps = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    leadId: id,
    nextFollowUpDate: "",
    followUpStatus: "",
    remarks: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFollowUps(formData));
    console.log("Form Data:", formData);
    setShowModal(false);
  };
  return (
    <>
      <button
        className=" mb-1 mr-1 rounded bg-primary px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        add followup
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-999 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-3">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white text-black shadow-lg outline-none  focus:outline-none dark:bg-boxdark dark:text-white">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-3xl font-semibold">Add followup</h3>
                </div>
                {/*body*/}
                <div className="relative max-h-80 flex-auto overflow-y-auto p-6 md:max-h-90 lg:max-h-115">
                  {/* form */}
                  <form onSubmit={handleSubmit} className="p-3.5">
                    <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                      <div className="w-full xl:w-1/3">
                        <label className="mb-1.5 block text-black dark:text-white">
                          Next followUp Date{" "}
                          <span className="text-meta-1">*</span>
                        </label>
                        <input
                          type="date"
                          name="nextFollowUpDate"
                          value={formData.nextFollowUpDate}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                      <div className="w-full xl:w-1/3">
                        <label className="mb-1.5 block text-black dark:text-white">
                          FollowUp Status<span className="text-meta-1">*</span>
                        </label>
                        <div className="relative z-20 bg-transparent dark:bg-form-input">
                          <select
                            name="followUpStatus"
                            value={formData.followUpStatus}
                            onChange={handleChange}
                            className="relative z-20 w-full appearance-none  rounded border border-stroke bg-transparent px-2 py-1  outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          >
                            <option value="">Select</option>
                            <option value="interested">interested</option>
                            <option value="not interested">
                              not interested
                            </option>
                            <option value="lost">lost</option>
                            <option value="request submitted">
                              request submitted
                            </option>
                          </select>
                          <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                            <FaAngleDown />
                          </span>
                        </div>
                      </div>
                      <div className="w-full xl:w-1/3">
                        <label className="mb-1.5 block text-black dark:text-white">
                          remarks
                        </label>
                        <input
                          type="text"
                          name="remarks"
                          value={formData.remarks}
                          onChange={handleChange}
                          placeholder="Enter remarks"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="background-transparent mb-1 mr-1 bg-danger px-6 py-2 text-sm font-bold uppercase outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="mb-1 mr-1 rounded bg-primary px-6 py-2 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={handleSubmit}
                  >
                    create
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};
export default CreateFollowUps;
