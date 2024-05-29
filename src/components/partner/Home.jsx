import { useSelector } from "react-redux";
import DownloadQR from "../DownloadQR";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const referralLink = `www.${location.hostname}:${location.port}/refer/${userInfo?.uniqueUserId}`;

  return (
    <div className=" flex-col justify-center text-center">
      <h1 className="text-xl font-semibold text-black dark:text-white">
        Welcome! You Have logged in Successfully
      </h1>
      <div className="mt-2 w-100 border bg-white p-2 ">
        <DownloadQR imageLink={referralLink} />
      </div>
    </div>
  );
};
export default Home;
