import DropProfile from "../dropProfile/DropProfile";

const TopBar = () => {
  return (
    <div className="flex w-full bg-mYellow ">
      <DropProfile firstName="Víctor" picture={"/defaultAvatar.png"} />
    </div>
  );
};

export default TopBar;
