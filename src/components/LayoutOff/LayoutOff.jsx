import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';

function LayoutOff() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for category dropdown

    const toggleCategory = () => {
        setIsCategoryOpen(!isCategoryOpen); // Toggle category visibility
    };

    return (
        <React.Fragment>
            <div onClick={toggleCategory} className="border relative z-20   m-9 mx-10 mt-44  px-4  w-fit cursor-pointer flex-col justify-between items-center">
                <div className='py-1'>
                    <span className='me-2 text-xl tracking-widest font-semibold text-gray-700'>
                        Filter
                    </span>
                    <i className="ms-2 text-gray-700 fa-solid fa-arrow-down-wide-short"></i>
                </div>

                {isCategoryOpen && (<>
                    <div className='absolute bg-white px-10 rounded-lg shadow-md'>
                        <Link className='block text-black hover:text-gray-800 p-2 border-t' to={'/Hoodies'}>Hoodies</Link>
                        <Link className='block text-black hover:text-gray-800 p-2' to={'/Shorts'}>Shorts</Link>
                        <Link className='block text-black hover:text-gray-800 p-2' to={'/Tshirts'}>T-Shirts</Link>
                        <Link className='block text-black hover:text-gray-800 p-2' to={'/Socks'}>Socks</Link>
                        <Link className='block text-black hover:text-gray-800 p-2' to={'/Undershirt'}>Undershirt</Link>
                    </div>

                </>
                )}
            </div>
            <Outlet></Outlet>
        </React.Fragment>
    )
}

export default LayoutOff