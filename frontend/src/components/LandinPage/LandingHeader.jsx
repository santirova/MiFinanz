import Image from "next/image";
import imagePc from "@/assets/landing/desktopLaptop.png";
import imagePhone from "@/assets/landing/responsivePhone.png";
import { FaGooglePlay } from "react-icons/fa";
import {FaWindows} from "react-icons/fa"
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
          <div className="flex p-1 gap-3 text-white w-96 h-15 text-sm rounded-lg items-center border-solid border-2  border-white cursor-pointer">
            <FaGooglePlay className="text-white text-5xl" />
            <div className="">
              <p className="font-semibold text-white">Download on the</p>
              <p className=" ">Google Play</p>
            </div>
          </div>
          <div className="flex p-1 gap-3 text-white w-96 h-15 text-sm rounded-lg items-center border-solid border-2  border-white cursor-pointer">
            <FaWindows className="text-white text-5xl"/>
            <div className="">
              <p className="font-semibold text-white">Download on the</p>
              <p className=" ">Windows Store</p>
            </div>
          </div>
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
