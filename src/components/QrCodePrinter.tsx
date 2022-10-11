import { QRCodeCanvas } from "qrcode.react";
import { useReactToPrint } from "react-to-print";
import Button from "./ui/Button/Button";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const QrCodePrinter = ({qrCodeText}:any) => {
  const componentRef = useRef(null);

  // const { state } = useLocation();
  // const { qrCodeText, bgColor } = state;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: ` @media print {
      body {
        display: flex;
        justify-content: center;
      }
    }`,
  });

  return (
    <>
      <div className="qr-code-container">
        <div ref={componentRef}>
          <QRCodeCanvas
            className="qr-code-canvas"
            id="qrCode"
            value={qrCodeText}
            size={250}
            bgColor={"#ffff"}
            level={"H"}
          />
        </div>
        <div className="flex margin10x ">
          <Button handleClick={handlePrint} title={"Yazdır"} />
        </div>
      </div>
    </>
  );
};
export default QrCodePrinter;
