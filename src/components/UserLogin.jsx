import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions";
import { MdLock, MdOutlineMailOutline } from "react-icons/md";
import Loader from "./Loader";

const UserLogin = () => {
  const { isLoading, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginData = { email, password };
      await dispatch(userLogin(loginData));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    if (userInfo?.role === "admin") {
      navigate("/admin");
    }

    if (userInfo?.role === "employee") {
      navigate("/employee");
    }
    if (userInfo?.role === "partner") {
      navigate("/partner");
    }
  }, [userInfo]);

  if (isLoading) return <Loader />;

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent px-3 py-1.5 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />

            <span className="absolute right-4 top-4">
              <MdOutlineMailOutline />
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2.5 block font-medium text-black dark:text-white">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-stroke bg-transparent px-3 py-1.5 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />

            <span className="absolute right-4 top-4">
              <MdLock />
            </span>
          </div>
        </div>
        <p
          className="mb-2 text-primary"
          onClick={() => navigate("forgot-password")}
        >
          Forgot Password ?
        </p>

        <div className="mb-5">
          <input
            type="submit"
            value="Sign In"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary px-3 py-1.5 text-white transition hover:bg-opacity-90"
          />
        </div>
      </form>
    </>
  );
};
export default UserLogin;
