import React from 'react';
import QrReader from 'react-qr-scanner';
// react-qr-scanner don't have @types

export const Qrcode = ({isQRcodeOpen, setIsQRcodeOpen, handleScan, handleError, newRead}: any | null) => {
  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (isQRcodeOpen) ?  (
    <div className='qrContainer'>
      <QrReader
        delay={5000}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {/* <p>{this.state.result}</p> */}
    </div>
  ) : <p>{newRead}</p>
}
