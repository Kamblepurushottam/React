import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrGenerator = () => {
    const [input, setInput] = useState("");
    const [qrtext, setQrText] = useState("");
    const generateQrCode = () => {
      setQrText(input);
    };
  return (
    <>
      <div className="w-50 mx-auto">
        <h1 className="text-center text-primary my-4">QR Code Gengerator</h1>
        <input
          type="text"
          className="form-control border border-secondary mb-4"
          placeholder="Enter text here..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={generateQrCode}>
            {" "}
            Generate
          </button>
        </div>
      </div>

      {qrtext !== "" ? 
        <div className="text-center mt-5">
          <QRCode value={qrtext} />
        </div>
       : 
        ""
      }
    </>
  );
};

export default QrGenerator;
