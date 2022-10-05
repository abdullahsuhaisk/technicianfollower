import React from 'react';
// import QrReader from 'react-qr-scanner';
// react-qr-scanner don't have @types
import {QrReader}  from 'react-qr-reader';

export const Qrcode = ({ isQRcodeOpen, handleScan, handleError, newRead }: any | null) => {
  const previewStyle = {
    width: 250,
  }

  console.log(isQRcodeOpen)

  return (isQRcodeOpen) ? (
    // <div className='qrContainer'>
    //   <QrReader
    //     delay={5000}
    //     style={previewStyle}
    //     onError={handleError}
    //     onScan={handleScan}
    //     facingMode="rear"

    //   />
    //   {/* <p>{this.state.result}</p> */}
    // </div>
    <div className='qrContainer'>
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
        constraints= {{facingMode: 'environment'}}
      />
    </div>
  ) : <p>{newRead}</p>
}
