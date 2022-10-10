import { useState } from "react";
import { Label } from "./ui/Label/Label";
import { Input } from "./ui/Input/Input";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import "./ui/Card/Card.css";

const QrCodeGenarator = () => {
  const [floor, setFloor] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let locationInfo = JSON.stringify({ floor: floor, name: name });
    console.log(locationInfo);
    navigate("/print", {
      state: { qrCodeText: locationInfo, bgColor: "#ffff" },
    });
  };

  return (
    <>
      <div className="qr-code-container">
        <section className="card-container">
          <div className="font content-text">
            QR kod oluşturmak istediğiniz yerin kat ve isim bilgisini girerek
            kodu oluşturabilirsiniz.
          </div>
        </section>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-label-container">
            <Label title="Kat Bilgisi" />
            <Input
              className="flex card-container font"
              value={floor}
              handleChange={(e: any) => setFloor(e.target.value)}
              type="text"
              placeholder="4. Kat"
              isRequired={true}
            />
          </div>
          <div className="input-label-container">
            <Label title="Yer Bilgisi" />
            <Input
              className="flex card-container font"
              value={name}
              handleChange={(e: any) => setName(e.target.value)}
              type="text"
              placeholder="Sigorta kutusu"
              isRequired={true}
            />
          </div>
          <div className="flex card-container">
            <Button btnType="submit" title={"QR Code Oluştur"} />
          </div>
        </form>
      </div>
    </>
  );
};
export default QrCodeGenarator;
