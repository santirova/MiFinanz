import { VscGraph } from "react-icons/vsc";
import { BsArrowRepeat } from "react-icons/bs";
import Image from "next/image";
import {BiImport} from "react-icons/bi"
import {BiWindowOpen} from "react-icons/bi"
import {BiLogOut} from "react-icons/bi"
import {BiSolidFolder} from "react-icons/bi"
import {BiWrench} from "react-icons/bi"
import {BsQuestionCircleFill} from  "react-icons/bs"
import {BsFillArrowRightCircleFill} from  "react-icons/bs"


export default function NavHomeClose() {
  return (
    <section className=" flex flex-col bg-black h-screen w-20 text-white rounded-xl ml-2 ">
        <div className="flex justify-center items-center">   
            <Image src={'/logo_app.png'} width={35} height={35} />
        </div>
      
      <div className="flex flex-col  justify-center items-center gap-7 p-10 text-2xl py-40">
        <div className="cursor-pointer">
          <VscGraph />
        </div>
        <div className="cursor-pointer">
          <BiSolidFolder />
        </div>
        <div className="cursor-pointer">
          <BiWindowOpen />
        </div>
        <div className="cursor-pointer">
        <BiImport />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 p-10 text-2xl bottom-0 left-0 xl:py-20 2xl:py-40">
        <div className="cursor-pointer">
          <BsQuestionCircleFill />
        </div>
        <div className="cursor-pointer">
          <BiWrench />
        </div>
        <div className="cursor-pointer">
          <BiLogOut />
        </div>
        <div className="text-2xl  cursor-pointer h-7 w-7 ml-16">
            <BsFillArrowRightCircleFill/>
        </div>
      </div>
    </section>
  );
}
