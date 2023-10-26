"use client";
import { VscGraph } from "react-icons/vsc";
import { GoEye } from "react-icons/go";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useState } from "react";
import NavHomeClose from "./NavHomeClose";
import {BiSolidFolder} from "react-icons/bi"
import {BiWindowOpen} from "react-icons/bi"
import {BiImport} from "react-icons/bi"
import Image from "next/image";

export default function NavHome() {
  const [open, setOpen] = useState(true);
  return (
<<<<<<< HEAD
    <section
      className={`${
        open ? "w-60" : "w-20"
      } bg-black min-h-screen   flex flex-col transition-all duration-300`}
    >
      <div className="text-white">
        <div className="p-10">
          <h2 className="">miFinanz</h2>
        </div>
        <div className="p-10 flex flex-col gap-8">
          <div className="flex gap-2 text-xl cursor-pointer">
            <VscGraph />
            <p> Panel</p>
          </div>
          <div className="cursor-pointer">
            <p>Cuentas</p>
          </div>
          <div className="cursor-pointer">
            <p>Gastos</p>
          </div>
          <div className="cursor-pointer">
            <p>Ingresos</p>
          </div>
        </div>
        <div
          className={`${
            !open && "hidden"
          } bg-gray-300 h-52 w-48 rounded-2xl m-5 flex flex-col  text-gray-600`}
        >
          <div className="justify-center items-center text-center">
            <GoEye className="text-8xl" />
            <p className="text-black">Conoce toda las herramientas</p>
            <button className="border border-blue-400	w-32 h-14 text-blue-400 rounded-xl">
              TUTORIAL
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <i className="cursor-pointer" onClick={() => setOpen(false)}>
            X
          </i>
          <i className="cursor-pointer" onClick={() => setOpen(true)}>
            -Open-
          </i>
        </div>
=======
    <section className="flex flex-col">
      <NavHomeClose/>
      <div className={`${
        open ? "flex" : "hidden"
      } bg-black h-full fixed  flex-col transition-all duration-300 rounded-xl ml-2`}>
        <div className="text-white">
          <div className="flex p-10 gap-2 place-items-center text-xl">
            <Image src={"/logo_app.png"} width={30} height={30}/>
            <h2 className="">miFinanz</h2>
          </div>
          <div className="p-10 flex flex-col xl:gap-5 md:gap-5 2xl:gap-10">
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <VscGraph />
              <p> Panel</p>
            </div>
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <BiSolidFolder />
              <p>Cuentas</p>
            </div>
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <BiWindowOpen />
              <p>Gastos</p>
            </div>
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <BiImport />
              <p>Ingresos</p>
            </div>
          </div>
          <div
            className={`${
              !open && "hidden"
            } bg-gray-300 xl:w-48 xl:h-60 2xl:h-72  md:h-52 rounded-2xl m-5 flex flex-col  text-gray-600`}
          >
            <div className="flex flex-col gap-4 justify-center items-center text-center">
              <GoEye className="text-8xl" />
              <p className="text-black">Conoce toda las herramientas</p>
              <button className="border border-blue-400	w-32 h-14 text-blue-400 rounded-xl">
                TUTORIAL
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end relative">
            <i
              className="text-3xl cursor-pointer  h-7 w-7"
              onClick={() => setOpen(false)}
            >
              <BsFillArrowLeftCircleFill />
            </i>
          </div>
        </div>
>>>>>>> 07fd2e7d53b3ebcfd47a87eb9c62fec29e825a7d
      </div>
    </section>
  );
}
