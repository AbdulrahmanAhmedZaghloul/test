
import React, { useState, useEffect, useRef } from 'react';
import WAT2 from '../../image/black.png';
import WATv from '../../image/fan/1.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search input visibility
    const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for category dropdown
    const cartRef = useRef(null);
    const sidebarRef = useRef(null); // Ref for the sidebar

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen); // Toggle search input visibility
    };
    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen); // Toggle category visibility
    };
    // Close the cart when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cartRef]);

    // Close the sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    // Sticky header functionality
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
                    <button onClick={toggleSidebar} className="p">
                        <i className="text-black text-2xl fa-solid fa-bars"></i>
                    </button>
                    <Link to={'/'}>
                        <img className="w-[10rem] hidden mx-auto md:flex lg:flex justify-center" src={WAT2} alt="" />
                    </Link>
                    <div className="flex items-center">
                        <i className="text-black text-xl mx-3 fa-regular fa-user"></i>

                        {/* Search Icon */}
                        <i className="text-black text-xl mx-3 fa-solid fa-magnifying-glass" onClick={toggleSearch}></i>

                        {/* Animated Search Input */}
                        <div className={`transition-width duration-500 ease-in-out ${isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0'} overflow-hidden`}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-2 py-1 border border-gray-300 rounded-md"
                            />
                        </div>

                        <i className="text-black text-xl mx-3 fa-solid fa-cart-shopping" onClick={toggleCart}></i>
                    </div>
                </div>

                <div ref={sidebarRef} className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-2xl border p-4 transform transition-transform duration-300 ${isOpen ? 'translate-x-0 z-[2322122]' : '-translate-x-full z-[2322122]'}`}>
                    <button onClick={toggleSidebar} className="text-black border-b me-auto flex justify-end text-end w-full text-xl p-2 mb-4 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul >
                        <li className="text-black hover:text-gray-800 mb-2 p-2">
                            <Link className='cursor-pointer px-4 tracking-widest' to={'/Home'}>Home</Link>
                        </li>
                        <li className="text-gray-700 hover:text-gray-800 mb-2 p-2">
                            <div onClick={toggleCategory} className="cursor-pointer flex justify-between items-center">
                                <p className='px-4 tracking-widest'>
                                products
                                </p>
                                <i className="text-[14px] text-gray-700 fa-solid fa-chevron-up fa-rotate-180"></i>
                            </div>
                            {isCategoryOpen && (
                                <ul className="pl-4 border-b">
                                    <li className="text-black hover:text-gray-800 p-2">
                                        <Link className='cursor-pointer px-4 tracking-widest' to={'/Categories'}>Categories</Link>
                                    </li>
                                    <li className="text-black hover:text-gray-800 p-2">
                                        <Link className='cursor-pointer px-4 tracking-widest' to={'/Hoodies'}>Hoodies</Link>
                                    </li>
                                    <li className="text-black hover:text-gray-800 p-2">
                                        <Link className='cursor-pointer px-4 tracking-widest' to={'/Shorts'}>Shorts</Link>
                                    </li>
                                    <li className="text-black hover:text-gray-800 p-2">
                                        <Link className='cursor-pointer px-4 tracking-widest' to={'/Tshirts'}>T-Shirts</Link>
                                    </li>
                                    <li className="text-black hover:text-gray-800 p-2">
                                        <Link className='cursor-pointer px-4 tracking-widest' to={'/Socks'}>Socks</Link>
                                    </li>
                                    <li className="text-black hover:text-gray-800 p-2">
                                        <Link className='cursor-pointer px-4 tracking-widest' to={'/Undershirt'}>Undershirt</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="text-black hover:text-gray-800 mb-2 p-2">
                            <Link className='cursor-pointer px-4 tracking-widest' to={'/AboutUs'}>AboutUs</Link>
                        </li>
                        <li className="text-black hover:text-gray-800 mb-2 p-2">
                            <Link className='cursor-pointer px-4 tracking-widest' to={'/ContentUs'}>ContentUs</Link>
                        </li>
                    </ul>
                </div>

                {/* Cart Sidebar */}
                {isCartOpen && (
                    <div ref={cartRef} className="fixed top-0 right-0 h-full md:w-1/2 overflow-scroll lg:w-1/3 bg-gray-100 p-4 transition-transform duration-300 z-[2322122]">
                        <div onClick={toggleCart} className="text-black border-b w-full flex justify-between items-center text-center text-xl p-2 mb-4 hover:text-gray-400">
                            <p className='text-[20px] tracking-widest font-semibold'>cart</p>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='flex items-center'>
                            <img className='size-24' src={WATv} alt="" />
                            <div className='p-5'>
                                <p className='font-bold tracking-widest'>BLUE SHADOW OVERSIZED T-SHIRT</p>
                                <span className='text-sm tracking-wider'>Size: X-small</span>
                                <div className='flex justify-between p-5'>
                                    <div className='border'>
                                        <span className='p-2'>+</span>
                                        <span className='p-2'>1</span>
                                        <span className='p-2'>-</span>
                                    </div>
                                    <p className='tracking-wider'>LE 650.00</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center w-full justify-center mx-auto'>
                            <div className='mx-auto w-3/4 flex-col items-center'>
                                <p className='font-semibold text-lg tracking-widest'>Total: LE 650.00</p>
                                <button className='bg-black text-white p-2 w-full rounded-md font-bold tracking-widest'>Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

export default Navbar;
