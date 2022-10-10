import { QRCodeCanvas } from "qrcode.react";
import { useReactToPrint } from "react-to-print";
import Button from "./ui/Button";
import { useLocation } from "react-router-dom";
import { useRef } from "react";

const QrCodePrinter = () => {
  const { state } = useLocation();
  const { qrCodeText, bgColor } = state;
  const componentRef = useRef(null);
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
            bgColor={bgColor}
            level={"H"}
          />
        </div>
        <div className="flex welcome">
          <Button handleClick={handlePrint} title={"Yazdir"} />
        </div>
      </div>
    </>
  );
};
export default QrCodePrinter;
