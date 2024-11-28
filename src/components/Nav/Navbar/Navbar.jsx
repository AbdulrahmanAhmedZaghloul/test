
import React, { useState, useEffect } from 'react';
import WAT2 from '../../../assets/image/wat.png';
import { Link } from 'react-router-dom';
import NavbarCart from '../NavbarCart/NavbarCart';
import NavbarSidebar from '../NavbarSidebar/NavbarSidebar';
import LanguageToggle from '../../LanguageToggle/LanguageToggle';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <React.Fragment>
            <div className={` ${isSticky ? 'bg-white  border-b fixed top-0 right-0 left-0 transition-all duration-300 z-[2322122]' : 'bg-transparent fixed top-0 right-0 left-0 text-black shadow-md z-[23122]'}`} >
                <span className={` 
                ${isSticky ? 'bg-black text-pink-500 hidden font-semibold text-[10px] text-center mx-auto justify-center pt-2 tracking-[0.2rem]' :
                        'bg-black text-pink-500 font-semibold text-[10px] text-center mx-auto flex justify-center pt-2 tracking-[0.2rem]'}`}>
                    EYES DO NOT LIE
                </span>
                <div className="border-b  py-3 border-white px-5 mx-auto">
                    <div className="flex items-center mx-4 justify-end">

                        <LanguageToggle />

                        <a href="https://www.instagram.com/cench.in/?igsh=dmY4OWFyMGIzZ2Jk" target="_blank" rel="noopener noreferrer">
                            <i className={` ${isSticky ? 'text-pink-500 mx-4 text-xl fa-brands fa-instagram' : 'text-pink-500 mx-4 text-xl fa-brands fa-instagram'}`}></i>
                        </a>
                        <a href="http://www.tiktok.com/@cench.in" target="_blank" rel="noopener noreferrer">
                            <i className={` ${isSticky ? 'text-black mx-4 text-xl fa-brands fa-tiktok' : 'text-black mx-4 text-xl fa-brands fa-tiktok'}`}></i>
                        </a>
                        <a href="https://wa.me/201097184660" target="_blank" rel="noopener noreferrer">
                            <i className={` ${isSticky ? 'text-green-500 mx-4 text-xl fa-brands fa-whatsapp' : 'text-green-500 mx-4 text-xl fa-brands fa-whatsapp'}`}></i>
                        </a>

                        <Link to={'/'} className='ms-auto flex  md:hidden lg:hidden justify-center'>
                            <img className="flex md:hidden lg:hidden justify-center object-cover w-[6rem]" src={WAT2} alt="" />
                        </Link>

                    </div>
                </div>

                <div className="container flex justify-between items-center px-5 mx-auto">
                    <NavbarSidebar />
                    <Link to={'/'} className='w-full mx-auto flex justify-center'>
                        <img className="hidden mx-auto md:flex lg:flex justify-center w-[6rem]" src={WAT2} alt="img" />
                    </Link>
                    <div className="flex items-center">
                        <NavbarCart />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Navbar;
