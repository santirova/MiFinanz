"use client";
import { setSection } from "@/redux/features/activeSectionSlice";
import DropProfile from "../dropProfile/DropProfile";
const TopBar = () => {
  const handleClick = (section) => {
    dispatch(setSection(section));
  };

  return (
    <div className="grid grid-cols-3 p-3 w-full">
      <div className="w-44">
        <DropProfile picture={"/defaultAvatar.png"} />
      </div>
      <div className="text-transparent"> Temp </div>
      <div className="flex justify-end gap-3">
        <div
          onClick={() => handleClick("addTransaction")}
          className="mr-4 cursor-pointer bg-mBlue w-10 rounded-full flex justify-center items-center font-medium text-mWhite text-4xl "
        >
          +
        </div>
      </div>
    </div>
  );
};

export default TopBar;
