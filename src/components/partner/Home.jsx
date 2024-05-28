import { FaCopy } from "react-icons/fa";
import { useSelector } from "react-redux";
import DownloadQR from "../DownloadQR";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const referralLink = `www.${location.hostname}:${location.port}/refer/${userInfo?.uniqueUserId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className=" flex-col justify-center text-center">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Welcome! You Have logged in Successfully
      </h1>
      <div className="mt-2 w-100 bg-white p-2 ">
        <div className="border-3  flex items-center justify-between border-stroke px-4.5 py-2 text-xs  ">
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
        <DownloadQR imageLink={referralLink} />
      </div>
    </div>
  );
};
export default Home;
