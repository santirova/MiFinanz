import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex'>
            <div className=''>Logo</div>
            <div className=''>
                <ul className='flex'>
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