import React, { useEffect, useState } from 'react'
import COTTON1 from '../../../image/fan/1.jpg';
import COTTON2 from '../../../image/fan/2.jpg';
import JERSEY1 from '../../../image/fan/3.jpg';
import JERSEY2 from '../../../image/fan/4.jpg';
import UNISEX1 from '../../../image/fan/2.jpg';
import UNISEX2 from '../../../image/fan/3.jpg';
import CARGO1 from '../../../image/fan/1.jpg';
import CARGO2 from '../../../image/fan/4.jpg';
import { Helmet } from 'react-helmet-async';
import Loading from '../../Loading/Loading';
import LayoutOff from '../../LayoutOff/LayoutOff';

function PageUndershirt() {
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
                <title>Undershirt</title>
            </Helmet>
            {
                loading ? <Loading/> : (
                    <section className='mb-16'>
                                            <LayoutOff/>

                        <h2 className='text-center text-xl uppercase font-semibold tracking-widest font-mono'>Undershirt</h2>
                        <section className='flex flex-wrap justify-center items-center py-6'>
                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>

                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={COTTON1} alt="COTTON 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={COTTON2}
                                        alt="COTTON 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                    <div className='bg-white text-gray-400 py-1 w-[5.5rem] absolute top-0 right-[0rem] tracking-wider'>
                                        <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>Sold Out</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    CARGO PANTS PROJECT 2002
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 850.00</span>

                                    <span className='text-[12px]'>
                                        LE 700.00
                                    </span>
                                </p>
                            </div>

                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={JERSEY1} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={JERSEY2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>

                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    winter warning cargo sweatpants
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 600.00
                                    </span>
                                </p>
                            </div>

                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={UNISEX1} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={UNISEX2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                    <div className='bg-white text-gray-400 py-1 w-[5.5rem] absolute top-0 right-[0rem] tracking-wider'>
                                        <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>Sold Out</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    TOKYO CARGO PANTS
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 850.00</span>

                                    <span className='text-[12px]'>
                                        LE 700.00
                                    </span>
                                </p>
                            </div>

                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={CARGO1} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={CARGO2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                    <div className='bg-white text-gray-400 py-1 w-[5.5rem] absolute top-0 right-[0rem] tracking-wider'>
                                        <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>Sold Out</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    WIREFRAME CARGO PANTS (UNISEX)
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 850.00</span>

                                    <span className='text-[12px]'>
                                        LE 700.00
                                    </span>
                                </p>
                            </div>
                        </section>
                        <section className='flex flex-wrap justify-center items-center py-6'>
                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={COTTON2} alt="COTTON 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={COTTON1}
                                        alt="COTTON 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                    <div className='bg-white text-gray-400 py-1 w-[5.5rem] absolute top-0 right-[0rem] tracking-wider'>
                                        <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>Sold Out</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    CARGO PANTS PROJECT 2002
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 850.00</span>

                                    <span className='text-[12px]'>
                                        LE 700.00
                                    </span>
                                </p>
                            </div>


                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={CARGO1} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={CARGO2}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                    <div className='bg-white text-gray-400 py-1 w-[5.5rem] absolute top-0 right-[0rem] tracking-wider'>
                                        <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>Sold Out</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    WIREFRAME CARGO PANTS (UNISEX)
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 850.00</span>

                                    <span className='text-[12px]'>
                                        LE 700.00
                                    </span>
                                </p>
                            </div>
                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={JERSEY2} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={JERSEY1}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>

                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    winter warning cargo sweatpants
                                    <br />
                                    <span className='text-[12px]'>
                                        LE 600.00
                                    </span>
                                </p>
                            </div>

                            <div className='lg:w-[25%] md:w-[30%] w-[80%] mx-auto p-5'>
                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={UNISEX2} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={UNISEX1}
                                        alt="Content 2"
                                    />
                                    <div className='bg-black  py-1 w-[90%] left-3 absolute bottom-6  opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        <p className='text-center text-white text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                    </div>
                                    <div className='bg-white text-gray-400 py-1 w-[5.5rem] absolute top-0 right-[0rem] tracking-wider'>
                                        <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>Sold Out</p>
                                    </div>
                                </div>
                                <p className='text-center text-[13px] font-semibold'>
                                    TOKYO CARGO PANTS
                                    <br />
                                    <span className="line-through text-[11px] mx-2">LE 850.00</span>

                                    <span className='text-[12px]'>
                                        LE 700.00
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
export default PageUndershirt