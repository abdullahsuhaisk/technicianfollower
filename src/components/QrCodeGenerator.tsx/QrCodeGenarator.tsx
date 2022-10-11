import { useState } from "react";
import { Label } from "../ui/Label/Label";
import { Input } from "../ui/Input/Input";
import Card from "../ui/Card/Card";
import { BiQr } from "react-icons/bi";
import QrCodePrinter from "../QrCodePrinter";

const QrCodeGenarator = () => {
  const [locationInfo, setLocationInfo] = useState<{
    floor: string;
    name: string;
  }>({ floor: "", name: "" });

  function handleChange(e: React.FormEvent<HTMLInputElement>):void {
    const target = e.currentTarget;
    if (target.id === "floor") {
      setLocationInfo({ ...locationInfo, [target.id]: `${target.value}. Kat` });
    } else {
      setLocationInfo({ ...locationInfo, [target.id]: target.value });
    }
  }

  console.log(locationInfo);

  return (
    <>
      <Card
        title="QR kod oluşturmak istediğiniz yerin kat ve isim bilgisini girerek
            kodu oluşturabilirsiniz."
        Icon={BiQr}
      />
      <form className="form">
        <div className="input-label-container">
          <Label title="Kat Bilgisi" />
          <Input
            className="flex card-container font"
            type="number"
            placeholder="4. Kat"
            isRequired={true}
            id="floor"
            onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
        <div className="input-label-container">
          <Label title="Yer Bilgisi" />
          <Input
            className="flex card-container font"
            type="text"
            placeholder="Sigorta kutusu"
            isRequired={true}
            id="name"
            onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)}
          />
        </div>
      </form>
      <QrCodePrinter qrCodeText={JSON.stringify(locationInfo)} />
    </>
  );
};
export default QrCodeGenarator;
