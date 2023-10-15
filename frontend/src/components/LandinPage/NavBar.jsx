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
        <nav className='flex bg-slate-400 dark:bg-gray-950 w-full p-3 justify-between'>
            <div className='font-bold'>miFinanzs</div>

            <div className=''>
                <ul className='flex items-center gap-4 lg:mr-8'>
                    <li>BLOG</li>
                    <li>PLUS</li>
                    <li>SOPORTE</li>
                    <li>NOSOTROS</li>
                    <li>|</li>
                    <ToggleThemeBtn handleOnClick={handleChangeTheme} />
                    <button className="bg-white text-black font-semibold p-1 w-20 rounded-2xl">LOGIN</button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar