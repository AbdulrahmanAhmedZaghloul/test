
import React, { useState, useEffect } from 'react';
import WAT2 from '../../image/black.png';
import { Link } from 'react-router-dom';
import NavbarCart from '../NavbarCart/NavbarCart';
import NavbarSidebar from '../NavbarSidebar/NavbarSidebar';

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search input visibility
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen); // Toggle search input visibility
    };
    
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
            <div className={` ${isSticky ? 'w-full bg-white border-b fixed top-0 right-0 left-0 transition-all duration-300 z-[2322122]' : 'bg-transparent fixed top-0 right-0 left-0 text-black shadow-md z-[23122]'}`}>
                <span className={` 
                ${isSticky ? 'bg-black text-white hidden font-semibold text-[10px] text-center mx-auto justify-center pt-2 tracking-[0.2rem]' :
                        'bg-black text-white font-semibold text-[10px] text-center mx-auto flex justify-center pt-2 tracking-[0.2rem]'}`}>
                    CONSPIRE COLLECTION IS LIVE NOW!
                </span>
                <div className="border-b  py-3 border-white px-5 mx-auto">
                    <div className="flex items-center mx-4 justify-end">
                        <i className={` ${isSticky ? 'text-black mx-2 fa-brands fa-facebook' : 'text-black mx-2 fa-brands fa-facebook'}`}></i>
                        <i className={` ${isSticky ? 'text-black mx-2 fa-brands fa-instagram' : 'text-black mx-2 fa-brands fa-instagram'}`}></i>
                        <i className={` ${isSticky ? 'text-black mx-2 fa-brands fa-x-twitter' : 'text-black mx-2 fa-brands fa-x-twitter'}`}></i>
                        <i className={` ${isSticky ? 'text-black mx-2 fa-brands fa-linkedin' : 'text-black mx-2 fa-brands fa-linkedin'}`}></i>
                        <i className={` ${isSticky ? 'text-black mx-2 fa-brands fa-whatsapp' : 'text-black mx-2 fa-brands fa-whatsapp'}`}></i>
                        <Link to={'/'} className='ms-auto flex  md:hidden lg:hidden justify-center'>
                            <img className="flex  md:hidden lg:hidden justify-center" src={WAT2} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="w-full  flex justify-between items-center px-5 mx-auto">
                    <NavbarSidebar />
                    <Link to={'/'}>
                        <img className="w-[10rem] hidden mx-auto md:flex lg:flex justify-center" src={WAT2} alt="" />
                    </Link>
                    <div className="flex items-center">
                        <i className="cursor-pointer text-black text-xl mx-3 fa-regular fa-user"></i>

                        {/* Search Icon */}
                        <i className="cursor-pointer text-black text-xl mx-3 fa-solid fa-magnifying-glass" onClick={toggleSearch}></i>

                        {/* Animated Search Input */}
                        <div className={`transition-width duration-500 ease-in-out ${isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-2 py-1 border border-gray-300 rounded-md"
                            />
                        </div>
                        <NavbarCart />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Navbar;
