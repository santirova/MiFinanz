"use client"

import { setTheme } from "@/redux/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react";

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
        <nav className='flex bg-slate-400 dark:bg-slate-900 w-full p-3 justify-between'>
            <div className=''>Logo</div>
            <div className=''>
                <ul className='flex gap-5'>
                    <li>BLOG</li>
                    <li>PLUS</li>
                    <li>SOPORTE</li>
                    <li>NOSOTROS</li>
                    <button onClick={handleChangeTheme}>Cambiar tema</button>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar