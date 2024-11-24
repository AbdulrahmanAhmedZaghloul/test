import React, { useState, useEffect, useRef } from 'react';
import WATv from '../../image/fan/1.jpg';
import { Link } from 'react-router-dom';

function NavbarCart() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef(null);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

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
    return (
        <React.Fragment>
            <i className='cursor-pointer text-black text-xl mx-3 fa-solid fa-cart-shopping' onClick={toggleCart}></i>
            {isCartOpen && (
                <div ref={cartRef} className=" fixed top-0 right-0 h-full md:w-1/2 overflow-scroll lg:w-1/3 bg-gray-100 p-4 transition-transform duration-300 z-[2322122]">
                    <div onClick={toggleCart} className="text-black border-b w-full flex justify-between items-center text-center text-xl p-2 mb-4 hover:text-gray-400">
                        <p className='text-[20px] tracking-widest font-semibold'>cart</p>
                        <i className="cursor-pointer fa-solid fa-xmark"></i>
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
                            <p className='mb-4 font-semibold text-lg tracking-widest'>Total: LE 650.00</p>
                            {/* <from className='my-6'>
                                <input type="text" className='tracking-wider my-1 w-full h-10 border rounded-lg p-3 text-gray-500' placeholder='details' />
                                <input type="tell" className='tracking-wider my-1 w-full h-10 border rounded-lg p-3 text-gray-500' placeholder='phone' />
                                <input type="email" className='tracking-wider my-1 w-full h-10 border rounded-lg p-3 text-gray-500' placeholder='E-mail' />
                            </from> */}
                            <Link to={'/OrderUsers'} className='mt-4 tracking-widest bg-black text-white p-2 w-full rounded-md font-bold '>Proceed to checkout</Link>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}

export default NavbarCart