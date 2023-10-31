"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userLogOut } from "@/redux/features/useInfoSlice";
import { setSection } from "@/redux/features/activeSectionSlice";
import { GoTriangleDown } from "react-icons/go";
import { toggleTheme } from "@/redux/features/themeSlice";

const DropProfile = (props) => {
  const { picture } = props;
  const [open, setOpen] = useState(false);
  const componenteRef = useRef(null);
  const theme = useAppSelector((state) => state.theme.darkMode);
  const userInfo = useAppSelector((store) => store.userInfo);
  const userName = userInfo?.user?.name ?? "User";
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componenteRef.current &&
        !componenteRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  const handleSetSection = (section) => {
    dispatch(setSection(section));
  };

  const signOut = () => {
    dispatch(userLogOut());
  };

  const handleOpenList = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        ref={componenteRef}
        className={`flex relative min-w-40  h-10 px-1 bg-mLightGray dark:bg-mBlack cursor-pointer items-center justify-center select-none ${
          open ? "rounded-t-3xl" : "rounded-full"
        }`}
      >
        <div className="profile-image flex absolute left-[-16px]">
          <Image src={picture} width={55} height={55} alt="Profile picture" />
        </div>

        <div className="flex items-center ml-5 gap-2" onClick={handleOpenList}>
          <div className="profile-info">
            <h2 className="text-white font-medium">{userName}</h2>
          </div>

          <div className="icon">
            <GoTriangleDown
              className={`text-white ${open ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {open && (
          <div className="absolute w-full z-30 left-0 top-10 bg-mWhite dark:bg-mWhite rounded-b-lg ">
            <ul className="flex flex-col gap-1 py-1 shadow-lg ">
              <li
                className="px-3 py-1 text-mBlack hover:bg-white"
                onClick={() => handleSetSection("profile")}
              >
                Perfil
              </li>
              <li className="px-3 py-1 text-mBlack hover:bg-white">Ajustes</li>
              <li
                onClick={handleChangeTheme}
                className="px-3 py-1 text-mBlack hover:bg-white"
              >
                Cambiar tema
              </li>
              <li
                onClick={signOut}
                className="px-3 py-1 text-mBlack hover:bg-white"
              >
                Cerrar Sesión
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default DropProfile;
