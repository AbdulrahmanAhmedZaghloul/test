import React from 'react';
import content1 from '../../../image/sharb/1.jpg';
import content2 from '../../../image/sharb/4.jpg';
import DEPT1 from '../../../image/sharb/2.jpg';
import DEPT2 from '../../../image/sharb/3.jpg';
import SHABOW1 from '../../../image/sharb/1.jpg';
import SHABOW2 from '../../../image/sharb/2.jpg';
import OVER1 from '../../../image/sharb/3.jpg';
import OVER2 from '../../../image/sharb/1.jpg';
import TOXIC1 from '../../../image/sharb/1.jpg';
import TOXIC2 from '../../../image/sharb/1.jpg';
import { Link } from 'react-router-dom';

function Socks() {
    return (
        <React.Fragment>
            <h2 className='text-center my-3 uppercase text-xl font-semibold tracking-wider'>Socks</h2>
            <div className='mx-auto w-full flex justify-center'>
                <Link className='text-black w-[8rem] ms-2 text-[0.9rem] px-1 py-1 my-2 -skew-x-[15deg] border border-gray-600 tracking-widest text-center'
                    to={'/Socks'}>  VIEW ALL
                </Link>
            </div>
            <div className='flex flex-wrap justify-center items-center'>
                <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-10'>
                    <div className='relative group mb-2'>
                        <img className='w-full  object-contain' src={content1} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={content2}
                            alt="Content 2"
                        />
                        <div className='bg-black  py-1 w-full absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>

                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        SENSITIVE CONTENT OVERSIZED T-SHIRT
                        <br />
                        <span className='text-[12px]'>
                            LE 650.00
                        </span>
                    </p>
                </div>
                <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-10'>
                    <div className='relative group mb-2'>
                        <img className='w-full  object-contain' src={DEPT1} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={DEPT2}
                            alt="Content 2"
                        />
                        <div className='bg-black  py-1 w-full absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>

                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        SECURITY DEPT OVERSIZED T-SHIRT
                        <br />
                        <span className='text-[12px]'>
                            LE 650.00
                        </span>
                    </p>
                </div>
                <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-10'>
                    <div className='relative group mb-2'>
                        <img className='w-full  object-contain' src={SHABOW1} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={SHABOW2}
                            alt="Content 2"
                        />
                        <div className='bg-black  py-1 w-full absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>
                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        BLUE SHADOW OVERSIZED T-SHIRT
                        <br />
                        <span className='text-[12px]'>
                            LE 650.00
                        </span>
                    </p>
                </div>
                <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-10'>
                    <div className='relative group mb-2'>
                        <img className='w-full  object-contain' src={OVER1} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={OVER2}
                            alt="Content 2"
                        />
                        <div className='bg-black  py-1 w-full absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>
                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        PROJECT 019 OVERSIZED T-SHIRT
                        <br />
                        <span className='text-[12px]'>
                            LE 650.00
                        </span>                    </p>
                </div>
                <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-10'>
                    <div className='relative group  mb-2'>
                        <img className='w-full  object-contain' src={TOXIC1} alt="Content 1" />
                        <img
                            className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                            src={TOXIC2}
                            alt="Content 2"
                        />
                        <div className='bg-black  py-1 w-full absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                        </div>
                        <div className='bg-red-700 text-white py-1 w-12 absolute top-0 right-0 tracking-wider'>
                            <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>sale</p>
                        </div>
                    </div>
                    <p className='text-center text-[13px] font-semibold'>
                        No toxic tee
                        <br />
                        <span className="line-through text-[11px] mx-2">LE 650.00</span>
                        <span className='text-[12px]'>
                            LE 650.00
                        </span>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Socks;
