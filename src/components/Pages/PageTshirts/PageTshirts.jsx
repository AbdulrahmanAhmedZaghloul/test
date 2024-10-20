import React, { useEffect, useState } from 'react';
import JERSEY1 from '../../../image/Summer/WARNING-1.jpg';
import JERSEY2 from '../../../image/Summer/WARNING-2.jpg';
import UNISEX1 from '../../../image/WINTER/pom3.jpg';
import UNISEX2 from '../../../image/WINTER/pom1.jpg';
import CARGO2 from '../../../image/WINTER/pom3.jpg';
import { Helmet } from 'react-helmet-async';
import Loading from '../../Loading/Loading';

function PageTshirts() {
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
                <title>T-shirts</title>
            </Helmet>

            {
                loading ? <Loading/>:(
                    <section className='mb-16'>
                <h2 className='text-center text-xl uppercase font-semibold tracking-wider'>T-shirts</h2>
                <section className='flex flex-wrap justify-center items-center py-5'>
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                        <div className='relative w-full group mb-2'>
                            <img className='w-full  object-contain' src={JERSEY2} alt="Content 1" />
                            <img
                                className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src={JERSEY1}
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto  p-5 '>
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
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
                </section>
                <section className='flex flex-wrap justify-center items-center py-5'>
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                        <div className='relative w-full group mb-2'>
                            <img className='w-full  object-contain' src={UNISEX1} alt="Content 1" />
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto  p-5 '>
                        <div className='relative w-full group mb-2'>
                            <img className='w-full  object-contain' src={UNISEX2} alt="Content 1" />
                            <img
                                className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src={UNISEX1}
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                        <div className='relative w-full group mb-2'>
                            <img className='w-full  object-contain' src={JERSEY2} alt="Content 1" />
                            <img
                                className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src={JERSEY1}
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
                </section>
                <section className='flex flex-wrap justify-center items-center py-5'>
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                        <div className='relative w-full group mb-2'>
                            <img className='w-full  object-contain' src={JERSEY2} alt="Content 1" />
                            <img
                                className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                src={JERSEY1}
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto  p-5 '>
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
                    <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
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
                </section>
            </section>
                )
            }

            
        </React.Fragment>
    );
}

export default PageTshirts