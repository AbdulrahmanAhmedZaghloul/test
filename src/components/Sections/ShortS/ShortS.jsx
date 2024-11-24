import React from 'react';
import COTTON1 from '../../../image/SHORTS/COTTON-1.jpg';
import COTTON2 from '../../../image/SHORTS/COTTON-2.jpg';
import JERSEY1 from '../../../image/SHORTS/CARGO-2.jpg';
import JERSEY2 from '../../../image/SHORTS/CARGO-1.jpg';
import UNISEX1 from '../../../image/SHORTS/UNISEX-1.jpg';
import UNISEX2 from '../../../image/SHORTS/UNISEX-2.jpg';
import CARGO1 from '../../../image/SHORTS/CARGO-1.jpg';
import CARGO2 from '../../../image/SHORTS/CARGO-2.jpg';
import { Link } from 'react-router-dom';

function ShortS() {
    return (
        <React.Fragment>
            <h2 className='text-center my-3 text-xl font-semibold tracking-wider'>SHORTS</h2>
            <div className='mx-auto w-full flex justify-center'>
                <div className='mx-auto w-full flex justify-center'>
                    <Link className='text-black w-[8rem] ms-2 text-[0.9rem] px-1 py-1 my-2 -skew-x-[15deg] border border-gray-600 tracking-widest text-center'
                     to={'/Shorts'}>  VIEW ALL
                    </Link>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>

                    <div className='relative group mb-2'>
                        <img className='w-full object-contain' src={COTTON1} alt="COTTON 1" />
                        <img
                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={COTTON2}
                            alt="COTTON 2"
                        />


                        <div className='bg-black  py-1 w-[90%] left-[1rem] absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>

                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        Project 019 cotton short
                        <br />
                        <span className='text-[12px]'>
                            LE 600.00
                        </span>
                    </p>
                </div>

                <div className='xl:w-[25%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                    <div className='relative group mb-2'>
                        <img className='w-full object-contain' src={JERSEY1} alt="Content 1" />
                        <img
                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={JERSEY2}
                            alt="Content 2"
                        />


                        <div className='bg-black  py-1 w-[90%] left-[1rem] absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>

                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        Project 019 jersey short
                        <br />
                        <span className='text-[12px]'>
                            LE 600.00
                        </span>
                    </p>
                </div>

                <div className='xl:w-[25%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                    <div className='relative group mb-2'>
                        <img className='w-full object-contain' src={UNISEX1} alt="Content 1" />
                        <img
                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={UNISEX2}
                            alt="Content 2"
                        />


                        <div className='bg-black  py-1 w-[90%] left-[1rem] absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>
                        <div className='bg-red-700 text-white py-1 w-12 absolute top-0 right-[0.1rem] tracking-wider'>
                            <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>sale</p>
                        </div>
                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        JERSEY SHORT (UNISEX)
                        <br />
                        <span className="line-through text-[11px] mx-2">LE 700.00</span>

                        <span className='text-[12px]'>
                            LE 600.00
                        </span>
                    </p>
                </div>

                <div className='xl:w-[25%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                    <div className='relative group mb-2'>
                        <img className='w-full object-contain' src={CARGO1} alt="Content 1" />
                        <img
                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={CARGO2}
                            alt="Content 2"
                        />

                        <div className='bg-black  py-1 w-[90%] left-[1rem] absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>
                        <div className='bg-red-700 text-white py-1 w-12 absolute top-0 right-[0.1rem] tracking-wider'>
                            <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>sale</p>
                        </div>
                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        BE ORANGE CARGO SHORT (UNISEX)
                        <br />
                        <span className="line-through text-[11px] mx-2">LE 700.00</span>

                        <span className='text-[12px]'>
                            LE 600.00
                        </span>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShortS;
