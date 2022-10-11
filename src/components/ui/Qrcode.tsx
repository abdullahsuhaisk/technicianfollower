import React from "react";
import { QrReader } from "react-qr-reader";

export const Qrcode = ({
  isQRcodeOpen,
  handleScan,
  handleError,
  newRead,
}: any | null) => {
  const previewStyle = {
    width: 250,
  };

  return isQRcodeOpen ? (
    <div className="qrContainer">
      <QrReader
        scanDelay={1000}
        onResult={(result, error) => {
          if (!!result) {
            handleScan(result);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        videoContainerStyle={previewStyle}
        constraints={{ facingMode: "environment" }}
      />
    </div>
  ) : (
    <p>{newRead}</p>
  );
};
