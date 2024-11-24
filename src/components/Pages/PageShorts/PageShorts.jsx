import React, { useEffect, useState } from 'react';
import COTTON1 from '../../../image/SHORTS/COTTON-1.jpg';
import COTTON2 from '../../../image/SHORTS/COTTON-2.jpg';
import JERSEY1 from '../../../image/SHORTS/CARGO-2.jpg';
import JERSEY2 from '../../../image/SHORTS/CARGO-1.jpg';
import UNISEX1 from '../../../image/SHORTS/UNISEX-1.jpg';
import UNISEX2 from '../../../image/SHORTS/UNISEX-2.jpg';
import CARGO1 from '../../../image/SHORTS/CARGO-1.jpg';
import CARGO2 from '../../../image/SHORTS/CARGO-2.jpg';
import { Helmet } from 'react-helmet-async';
import Loading from "../../Loading/Loading";
import LayoutOff from '../../LayoutOff/LayoutOff';

function PageShorts() {
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
                <title>SHORTS</title>
            </Helmet>
            {
                loading ? <Loading /> : (
                    <section className=' mb-16'>
                        <section >
                        <LayoutOff/>

                            <h2 className='text-center my-9 text-xl font-semibold tracking-wider'>SHORTS</h2>

                            <section className='flex flex-wrap justify-center items-center py-7'>
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
                            </section>
                            <section className='flex flex-wrap justify-center items-center py-7'>
                                <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>

                                    <div className='relative group mb-2'>
                                        <img className='w-full object-contain' src={COTTON2} alt="COTTON 1" />
                                        <img
                                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                            src={COTTON1}
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
                                        <img className='w-full object-contain' src={JERSEY2} alt="Content 1" />
                                        <img
                                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                            src={JERSEY1}
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
                                        <img className='w-full object-contain' src={UNISEX2} alt="Content 1" />
                                        <img
                                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                            src={UNISEX1}
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
                                        <img className='w-full object-contain' src={CARGO2} alt="Content 1" />
                                        <img
                                            className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                            src={CARGO1}
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
                            </section>
                            <section className='flex flex-wrap justify-center items-center py-7'>
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
                            </section>
                        </section>
                        <section className='flex flex-wrap justify-center items-center py-7'>
                            <div className='xl:w-[20%] lg:w-[30%] md:w-[50%] w-[80%] p-5'>

                                <div className='relative group mb-2'>
                                    <img className='w-full object-contain' src={COTTON2} alt="COTTON 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={COTTON1}
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
                                    <img className='w-full object-contain' src={JERSEY2} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={JERSEY1}
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
                                    <img className='w-full object-contain' src={UNISEX2} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={UNISEX1}
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
                                    <img className='w-full object-contain' src={CARGO2} alt="Content 1" />
                                    <img
                                        className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                        src={CARGO1}
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
                        </section>
                    </section>
                )
            }

        </React.Fragment>
    );
}

export default PageShorts;
