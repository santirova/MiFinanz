import Image from "next/image";
import imagePc from "@/assets/landing/desktopLaptop.png";
import imagePhone from "@/assets/landing/responsivePhone.png";
import { FaGooglePlay } from "react-icons/fa";
export default function LandingHeader() {
  return (
    <section className="flex w-full justify-between">
      <div id="leftside" className="flex w-96 flex-col justify-around">
        <div className="">
          <h3 className="text-2xl uppercase font-bold ml-14">
            Toma el control
          </h3>
          <div className="flex items-baseline gap-2">
            <h4 className="uppercase text-sm font-semibold">De tus</h4>
            <h2 className="text-4xl font-bold text-yellow-300 uppercase">
              Movimientos
            </h2>
          </div>
        </div>
        <p className="italic">
          Aplicación de gestión de finanzas personales que te empoderan
        </p>
        <button className="bg-blue-400 rounded-full p-4">
          Crear una cuenta
        </button>
        <div className="flex gap-6">
          <button className="flex border-solid border-2 border-white p-4 w-60 rounded-xl gap-2">
            <section>
              <i>
                <FaGooglePlay />
              </i>
            </section>
            <section>
              <p>Download on the</p>
              <h4>Google Play</h4>
            </section>
          </button>
          <button className="border-solid border-2 border-white p-4 w-60 rounded-xl">
            <p>Download on the</p>
            <h4>Windows Store</h4>
          </button>
        </div>
      </div>
      <figure id="rigthside" className="flex h-[500px] w-1/2 relative">
        <Image src={imagePc} alt="Image Pc" className="w-full" />
        <Image
          src={imagePhone}
          alt="Image Phone"
          className="absolute right-3 w-96 top-8 h-96"
        />
      </figure>
    </section>
  );
}
