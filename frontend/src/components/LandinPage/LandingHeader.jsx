import Image from "next/image";
import imagePc from "@/assets/landing/desktopLaptop.png";
import imagePhone from "@/assets/landing/responsivePhone.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import Link from "next/link";
export default function LandingHeader() {
  return (
    <section
      id="blog"
      className="h-[calc(100vh_-_90px)] mt-12 flex flex-col w-full justify-evenly md:flex-row"
    >
      <div
        id="leftside"
        className="flex flex-col w-full gap-8 justify-center items-center mt-16 md:items-start md:w-1/2"
      >
        <div className="flex flex-col items-center justify-center ">
          <h3 className="text-[28px] uppercase font-bold leading-3">
            Toma el control de tus
          </h3>
          <h2 className="text-[50px] font-bold text-mYellow uppercase">
            Movimientos
          </h2>
        </div>
        <p className="italic text-xl">
          Aplicación de gestión de finanzas <br /> personales que te empoderan.
        </p>
        <Link href={"/signup"}>
          <button className="bg-mBlue text-mBlack font-medium rounded-full px-24 py-4">
            CREAR UNA CUENTA
          </button>
        </Link>
        <div className="flex gap-6 items-center justify-center">
          <div className="hidden p-2 gap-3 text-mWhite w-48 h-15 text-sm rounded-lg items-center border-solid border-2  border-white cursor-pointer md:flex">
            <FaGooglePlay className="text-mWhite text-4xl" />
            <div className="">
              <p className="text-xs font-semibold text-mWhite">
                Download on the
              </p>
              <p className="text-base ">Google Play</p>
            </div>
          </div>
          <div className="hidden p-2 gap-3 text-mWhite w-48 h-15 text-sm rounded-lg items-center border-solid border-2  border-white cursor-pointer md:flex">
            <FaWindows className="text-mWhite text-4xl" />
            <div className="">
              <p className="text-xs font-semibold text-mWhite">
                Download on the
              </p>
              <p className="text-base ">Windows Store</p>
            </div>
          </div>
        </div>
      </div>
      <figure
        id="rigthside"
        className="justify-center flex h-auto w-full  md:w-1/2 relative"
      >
        <Image src={imagePc} alt="Image Pc" className="w-[500px] md:w-full" />
        <Image
          src={imagePhone}
          alt="Image Phone"
          className="absolute w-64 h-auto md:right-4 md:top-10 md:w-[600px]"
        />
      </figure>
    </section>
  );
}
