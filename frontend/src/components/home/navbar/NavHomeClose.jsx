import { VscGraph } from "react-icons/vsc";
import { BsArrowRepeat } from "react-icons/bs";

export default function NavHomeClose() {
  return (
    <section className=" flex flex-col bg-black h-screen w-20 text-white rounded-xl ml-2 ">
      <div className="flex justify-center items-center">Logo</div>
      <div className="flex flex-col justify-center items-center gap-7 p-10 text-xl py-40">
        <div>
          <VscGraph />
        </div>
        <div>
          <VscGraph />
        </div>
        <div>
          <VscGraph />
        </div>
        <div>
          <VscGraph />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 p-10 text-xl bottom-0 left-0 xl:py-20 2xl:py-40">
        <div>
          <VscGraph />
        </div>
        <div>
          <VscGraph />
        </div>
        <div>
          <VscGraph />
        </div>
      </div>
    </section>
  );
}
