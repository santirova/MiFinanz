import logo from "@/assets/shared/logo.png";
import Image from "next/image";
const ProtectedLoader = () => {
  return (
    <div className="flex w-full h-screen bg-mDarkGray justify-center items-center">
      <Image
        src={logo}
        alt="Logo"
        width="80"
        height="80"
        className="h-20 animate-[spin_1s_ease-in-out_infinite] "
      />
    </div>
  );
};

export default ProtectedLoader;
