import React, { useEffect, useState } from 'react';
import content1 from '../../../image/Categories/IMG-20241002-WA0031.jpg';
import content2 from '../../../image/Categories/IMG-1 (3).jpg';
import DEPT1 from '../../../image/Categories/IMG-1 (5).jpg';
import DEPT2 from '../../../image/Categories/IMG-1 (4).jpg';
import SHABOW1 from '../../../image/Categories/IMG-1 (1).jpg';
import SHABOW2 from '../../../image/Categories/IMG-1 (3).jpg';
import OVER1 from '../../../image/Categories/IMG-1 (5).jpg';
import OVER2 from '../../../image/Categories/IMG-1 (1).jpg';
import TOXIC1 from '../../../image/Categories/IMG-1 (4).jpg';
import TOXIC2 from '../../../image/Categories/IMG-1 (3).jpg';
import { Helmet } from 'react-helmet-async';
import Loading from "../../Loading/Loading";
import LayoutOff from '../../LayoutOff/LayoutOff';

function PageHoodies() {
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
                <title>Hoodies</title>
            </Helmet>
            {loading ? <Loading /> : (
                <section className='mb-16 mt-32'>
                    <LayoutOff/>
                    <h2 className='text-center my-8 text-2xl font-semibold tracking-wider'>Hoodies</h2>
                    <section>
                        <div className='flex flex-wrap justify-center items-center py-4'>
                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={content2} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={content1}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX BLACK EDITION WORLD HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={DEPT2} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={DEPT1}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX COBRA HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={SHABOW1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={SHABOW2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX ALTERNATIVE CULTURE HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={OVER2} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={OVER1}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX TOGETHER HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>                    </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group  mb-2'>
                                    <img className='w-full  object-contain' src={TOXIC2} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={TOXIC1}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>

                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX CHINESE HOODIE
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 650.00</span>
                                    <span className='text-[12px]'>
                                        LE 650.00
                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className='flex flex-wrap justify-center items-center py-4'>
                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={content2} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={content1}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX BLACK EDITION WORLD HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={DEPT1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={DEPT2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX COBRA HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={SHABOW1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={SHABOW2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX ALTERNATIVE CULTURE HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={OVER1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={OVER2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX TOGETHER HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>                    </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group  mb-2'>
                                    <img className='w-full  object-contain' src={TOXIC1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={TOXIC2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>

                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX CHINESE HOODIE
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 650.00</span>
                                    <span className='text-[12px]'>
                                        LE 650.00
                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className='flex flex-wrap justify-center items-center py-4'>
                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={content1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={content2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX BLACK EDITION WORLD HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={DEPT1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={DEPT2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX COBRA HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={SHABOW1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={SHABOW2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX ALTERNATIVE CULTURE HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>
                                </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full  object-contain' src={OVER1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={OVER2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX TOGETHER HOODIE
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 800.00
                                    </span>                    </p>
                            </div>

                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>
                                <div className='relative group  mb-2'>
                                    <img className='w-full  object-contain' src={TOXIC1} alt="Content 1" />
                                    <img
                                        className='w-full  object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={TOXIC2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>

                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    UNISEX CHINESE HOODIE
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 650.00</span>
                                    <span className='text-[12px]'>
                                        LE 650.00
                                    </span>
                                </p>
                            </div>

                        </div>
                    </section>
                </section>
            )}


        </React.Fragment>
    );
}

export default PageHoodies;