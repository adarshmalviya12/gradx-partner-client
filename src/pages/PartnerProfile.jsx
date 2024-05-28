import React from "react";
import { FaCopy } from "react-icons/fa";
import { useSelector } from "react-redux";

const PartnerProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const referralLink = `www.${location.hostname}:${location.port}/refer/${userInfo?.uniqueUserId}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div>
      <div className="border-3 flex items-center justify-between border-stroke bg-white px-6.5 py-4 font-bold dark:border-strokedark dark:bg-black">
        <p>
          Refer students : <span className=""> {referralLink} </span>
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

export default PartnerProfile;
