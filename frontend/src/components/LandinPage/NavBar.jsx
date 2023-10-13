"use client"

import { useAppDispatch,useAppSelector } from "@/redux/hooks"

const NavBar = () => {
    const theme = useAppSelector(state => state.theme)
    console.log(theme);
    return (
        <nav className='flex bg-slate-900 w-full p-3 justify-between'>
            <div className=''>Logo</div>
            <div className=''>
                <ul className='flex gap-5'>
                    <li>BLOG</li>
                    <li>PLUS</li>
                    <li>SOPORTE</li>
                    <li>NOSOTROS</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar