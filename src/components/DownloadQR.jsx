import QRCode from "qrcode.react";
import { FaCopy } from "react-icons/fa";

const DownloadQR = ({ imageLink }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(imageLink);
  };

  const downloadQRImage = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className=" mt-1 flex w-100 flex-col items-center justify-center">
      <div className="border-3 mt-2 bg-white p-2 ">
        <div className="border-3 border-stroke px-4.5 py-2 text-xs  ">
          <p>
            <span className="font-bold">Refer students </span>-
          </p>

          <p className="flex items-center justify-center gap-2">
            <span className="text-base"> {imageLink} </span>
            <FaCopy
              onClick={copyToClipboard}
              style={{ cursor: "pointer" }}
              className="transform transition-transform active:scale-125"
            />
          </p>
        </div>

        <QRCode
          id="qr-code"
          value={imageLink}
          size={290}
          level={"H"}
          includeMargin={true}
        />
      </div>

      <a onClick={downloadQRImage} className="cursor-pointer text-primary">
        Download QR
      </a>
    </div>
  );
};
export default DownloadQR;
