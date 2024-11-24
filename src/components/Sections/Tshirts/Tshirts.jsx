import React from 'react';
import JERSEY1 from '../../../image/Summer/WARNING-1.jpg';
import JERSEY2 from '../../../image/Summer/WARNING-2.jpg';
import UNISEX1 from '../../../image/WINTER/pom3.jpg';
import UNISEX2 from '../../../image/WINTER/pom1.jpg';
// import CARGO1 from '../../../image/WINTER/pom2.jpg';
import CARGO2 from '../../../image/WINTER/pom3.jpg';
import { Link } from 'react-router-dom';

function Winter() {
    return (
        <React.Fragment>
            <h2 className='text-center my-3 text-xl uppercase font-semibold tracking-wider'>T-shirts</h2>
            <div className='mx-auto w-full flex justify-center'>
                    <Link className='text-black w-[8rem] ms-2 text-[0.9rem] px-1 py-1 my-2 -skew-x-[15deg] border border-gray-600 tracking-widest text-center' to={'/Tshirts'}>  VIEW ALL
                    
                    </Link>
            </div>
            <div className='flex flex-wrap justify-center items-center'>

                <div className='lg:w-[30%] md:w-[40%] w-[90%] p-5'>
                    <div className='relative w-full group mb-2'>
                        <img className='w-full  object-contain' src={UNISEX2} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={CARGO2}
                            alt="Content 2"
                        />
                   
                   <div className='bg-black  py-1 w-[90%] left-[1.3rem] absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white T text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>

                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        LOSE SWEATPANTS
                        <br />

                        <span className='text-[12px]'>
                            LE 750.00
                        </span>
                    </p>
                </div>
                <div className='lg:w-[30%] md:w-[40%] w-[90%] p-5'>
                    <div className='relative w-full group mb-2'>
                        <img className='w-full  object-contain' src={JERSEY1} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={JERSEY2}
                            alt="Content 2"
                        />
                   
                   <div className='bg-black  py-1 w-[90%] left-[1.3rem] absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white T text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>

                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        LOSE SWEATPANTS
                        <br />

                        <span className='text-[12px]'>
                            LE 750.00
                        </span>
                    </p>
                </div>
                <div className='lg:w-[30%] md:w-[40%] w-[90%]  p-5 '>
                    <div className='relative w-full group mb-2'>
                        <img className='w-full  object-contain' src={UNISEX1} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={UNISEX2}
                            alt="Content 2"
                        />
                     
                     <div className='bg-black  py-1 w-[90%] left-[1.3rem] absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center  text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>
                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        REFLECTIVE V2 SWEATPANTS
                        <br />

                        <span className='text-[12px]'>
                            LE 750.00
                        </span>
                    </p>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Winter;
