import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_URL from "../../constant";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader";

const CourseDetails = () => {
  const [editCourse, setEditCourse] = useState(false);
  const [courseDetails, setCourseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    details: "",
    duration: "",
  });

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
        `${BASE_URL}/gradx/course/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setCourseDetails(data.data.course);
      toast.success(data.message);
      setIsLoading(false);
      setEditCourse(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setIsLoading(true);

      try {
        const token = localStorage.getItem("userToken") ?? "";

        const response = await axios.get(`${BASE_URL}/gradx/course/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setCourseDetails(response.data.data.course);

        setFormData({
          name: response.data.data.course.name,
          details: response.data.data.course.details,
          duration: response.data.data.course.duration,
        });
        setIsLoading(false);
        setEditUser(false);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };

    fetchCourseDetails();
  }, []);

  if (error) {
    console.error(error);
  }

  if (isLoading) return <Loader />;

  return (
    <>
      {!editCourse ? (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-strokedark px-3.5 py-2 dark:border-stroke">
            <h3 className="font-medium text-black dark:text-white">
              Course Details
            </h3>
          </div>
          {/* course details */}
          {courseDetails && (
            <div className="px-3.5 py-2 text-black dark:text-white">
              <p>
                <span className="font-semibold">Name: </span>{" "}
                {courseDetails.name}
              </p>
              <p>
                <span className="font-semibold">Details: </span>{" "}
                {courseDetails.details}
              </p>
              <p>
                <span className="font-semibold">Duration : </span>{" "}
                {courseDetails.duration ? courseDetails.duration : 0} Months
              </p>
            </div>
          )}
          <div className="m-1 flex justify-end gap-2">
            <button
              onClick={() => setEditCourse(true)}
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
              Edit Course Details
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-3.5">
              <div className="mb-1.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Course Name <span className="text-meta-1">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Course Name"
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
                    placeholder="Enter your Details"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/3">
                  <label className="mb-1.5 block text-black dark:text-white">
                    Duration<span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Enter your Duration"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-2 py-1 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-1">
                <button
                  type="submit"
                  className="flex max-w-132.5 justify-center rounded bg-primary p-1.5 font-medium text-gray"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditCourse(false)}
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
export default CourseDetails;
