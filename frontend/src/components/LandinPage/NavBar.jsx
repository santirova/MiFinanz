"use client"

import { setTheme } from "@/redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";

const NavBar = () => {

    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme.darkMode)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])
    const handleChangeTheme = () => {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
    }
    console.log(theme);
    return (
        <nav className='flex w-full bg-mWhite dark:bg-mBlack  p-3 justify-between'>
            <div className='font-bold'>miFinanzs</div>

            <div className='nav-action hidden md:block'>
                <ul className='flex items-center gap-4 lg:mr-8'>
                    <li className="cursor-pointer">BLOG</li>
                    <li className="cursor-pointer">PLUS</li>
                    <li className="cursor-pointer">SOPORTE</li>
                    <li className="cursor-pointer">NOSOTROS</li>
                    <li>|</li>
                    <ToggleThemeBtn handleOnClick={handleChangeTheme} />
                    <button className="bg-mWhite text-mBlack font-semibold p-1 w-20 rounded-2xl">LOGIN</button>
                </ul>
            </div>
            <div className="nav-hamburger hidden">

            </div>
        </nav>
    )
}

export default NavBar