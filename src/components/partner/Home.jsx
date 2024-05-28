import { FaCopy } from "react-icons/fa";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const referralLink = `www.${location.hostname}:${location.port}/refer/${userInfo?.uniqueUserId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Welcome! You Have logged in Successfully
      </h1>
      <div className="border-3 mt-5 flex items-center justify-between border-stroke bg-white px-4.5 py-2  dark:border-strokedark dark:bg-black">
        <p>
          <span className="font-bold">Refer students </span>-
          <span className=""> {referralLink} </span>
        </p>

        <span
          onClick={copyToClipboard}
          style={{ cursor: "pointer" }}
          className="transform transition-transform active:scale-125"
        >
          <FaCopy className="" />
        </span>
      </div>
    </div>
  );
};
export default Home;
