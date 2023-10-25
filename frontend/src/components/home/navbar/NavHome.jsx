"use client";
import { VscGraph } from "react-icons/vsc";
import { GoEye } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import NavHomeClose from "./NavHomeClose";

export default function NavHome() {
  const [open, setOpen] = useState(true);
  return (
    <section className="flex flex-col">
      <NavHomeClose/>
      <div className={`${
        open ? "flex" : "hidden"
      } bg-black h-full fixed  flex-col transition-all duration-300 rounded-xl ml-2`}>
        <div className="text-white">
          <div className="p-10">
            <h2 className="">miFinanz</h2>
          </div>
          <div className="p-10 flex flex-col xl:gap-5 md:gap-5 2xl:gap-10">
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <VscGraph />
              <p> Panel</p>
            </div>
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <VscGraph />
              <p>Cuentas</p>
            </div>
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <VscGraph />
              <p>Gastos</p>
            </div>
            <div className="flex gap-2 text-xl place-items-center cursor-pointer">
              <VscGraph />
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
              className="text-2xl cursor-pointer rounded-xl h-7 w-7 bg-gray-600 "
              onClick={() => setOpen(false)}
            >
              <BsArrowLeft />
            </i>
            <i className="cursor-pointer" onClick={() => setOpen(true)}>
              -Open-
            </i>
          </div>
        </div>
      </div>
    </section>
  );
}
