import React, { useEffect, useState } from 'react';
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
import { Helmet } from 'react-helmet-async';
import Loading from "../../Loading/Loading";
import LayoutOff from '../../LayoutOff/LayoutOff';

function PageSocks() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // تعيين مدة التحميل لمدّة 2 ثانية

        return () => clearTimeout(timer);
    }, []);
    return (
        <React.Fragment>
            <Helmet>
                <title>Socks</title>
            </Helmet>
            {
                loading ? <Loading/>:(
                     <section className='mb-16 '>
                                            <LayoutOff/>

                <h2 className='text-center text-2xl uppercase font-semibold tracking-widest'>Socks</h2>
                <section className='flex flex-wrap justify-center items-center py-8'>
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
                </section>
                <section className='flex flex-wrap justify-center items-center py-8'>
                    <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-10'>
                        <div className='relative group mb-2'>
                            <img className='w-full  object-contain' src={content2} alt="Content 1" />
                            <img
                                className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src={content1}
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
                            <img className='w-full  object-contain' src={DEPT2} alt="Content 1" />
                            <img
                                className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src={DEPT1}
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
                            <img className='w-full  object-contain' src={TOXIC2} alt="Content 1" />
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
                </section>
                <section className='flex flex-wrap justify-center items-center py-8'>
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

                </section>
            </section>
                )
            }
           
        </React.Fragment>
    );
}

export default PageSocks