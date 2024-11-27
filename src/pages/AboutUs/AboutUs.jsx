import React from 'react'
import { Helmet } from 'react-helmet-async';
import iconimage from '../../assets/image/black.png'
import { Link } from 'react-router-dom';

function AboutUs() {

    return (
        <React.Fragment>
            <Helmet>
                <title>About Us</title>
                <link rel="icon" href={iconimage} />
            </Helmet>
            <div className='flex justify-center items-center mb-3 mt-60'>
                <Link className='text-[29px] text-gray-600 font-medium tracking-widest' to={"/"}>home </Link>
                <span className='mx-2'>/</span>
                <Link className='text-[29px] text-gray-600 font-medium tracking-widest' to={"/AboutUs"}>About Us </Link>
            </div>
            <div className='mb-20 mt-10 border rounded-3xl container p-9 mx-auto'>
                {/* Who are we? */}
                <div className='border my-10 rounded-3xl p-9 w-[95%] mx-auto'>
                    <div>
                        <h1 className="text-center tracking-widest text-xl relative mb-7">
                            Who are we?
                            <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gray-600 mx-auto w-24"></span>
                            <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-gray-600 mx-auto w-16"></span>
                        </h1>
                        <h2 className='tracking-widest text-xl'>A store and website that sells clothes with the latest fashion trends and the best quality</h2>
                    </div>
                </div>

                {/* Our goal */}

                <div className='border my-10 rounded-3xl p-9 w-[95%] mx-auto'>
                    <div>
                        <h1 className="text-center tracking-widest text-xl relative mb-7">
                            Our goal
                            <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gray-600 mx-auto w-24"></span>
                            <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-gray-600 mx-auto w-16"></span>
                        </h1>
                        <h2 className='tracking-widest text-xl'>To be the first supporter of the customer and his satisfaction</h2>
                    </div>
                </div>

                {/*  Our vision */}

                <div className='border my-10 rounded-3xl p-9 w-[95%] mx-auto'>
                    <div>
                        <h1 className="text-center tracking-widest text-xl relative mb-7">
                            Our vision
                            <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gray-600 mx-auto w-24"></span>
                            <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-gray-600 mx-auto w-16"></span>
                        </h1>
                        <h2 className='tracking-widest text-xl'>We strive to deliver orders as quickly as possible and satisfy the customer in all cases</h2>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default AboutUs;