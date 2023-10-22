"use client"
import { useRouter } from 'next/navigation';
import { setTheme } from "@/redux/features/themeSlice";
import { setSection } from "@/redux/features/activeSectionSlice";
import { links } from "../../../lib/data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";
import Image from "next/image";
import logo from '@/assets/shared/logo.png'
import Link from 'next/link';

const NavBar = () => {
    const { push } = useRouter();
    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme.darkMode);
    const activeSection = useAppSelector(state => state.activeSection.activeSection);
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

    const handleSectionClick = (section) => {
        dispatch(setSection(section))
    }
    return (
        <nav className='fixed flex w-full bg-mWhite border-b-2 border-b-mlightGray dark:border-b-mWhite dark:bg-mBlack p-5 justify-between z-50'>
            <div className='flex items-center gap-1 cursor-pointer' onClick={() => push('/')}>
                <Image src={logo} alt="miFinanzas" width={39} height={39} />
                <span className="font-semibold text-xl">miFinanzs</span>
            </div>

            <div className='nav-action hidden md:block'>
                <ul className='flex items-center gap-4 lg:mr-8'>
                    {links.map((link, index) => (
                        <li key={index} className={activeSection == link.hash && 'underline'}>
                            <Link
                                href={link.hash}
                                onClick={() => handleSectionClick(link.hash)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>|</li>
                    <ToggleThemeBtn handleOnClick={handleChangeTheme} />
                    <button className="bg-mWhite text-mBlack font-semibold p-1 w-20 rounded-2xl" onClick={() => push('/login')} >LOGIN</button>
                </ul>
            </div>
            <div className="nav-hamburger hidden">

            </div>
        </nav >
    )
}

export default NavBar