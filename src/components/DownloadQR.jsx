import QRCode from "qrcode.react";

const DownloadQR = ({ imageLink }) => {
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
    <div className=" mt-1 flex w-96 flex-col items-center justify-center">
      <QRCode
        id="qr-code"
        value={imageLink}
        size={290}
        level={"H"}
        includeMargin={true}
      />
      <a onClick={downloadQRImage} className="text-primary">
        Download QR
      </a>
    </div>
  );
};
export default DownloadQR;
