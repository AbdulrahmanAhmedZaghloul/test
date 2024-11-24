import React, { useState } from 'react';
// import orderimage from '../../image/Order Tracking.mp4';
import { Helmet } from 'react-helmet-async';
export default function OrderUsers() {
    const [showCouponInput, setShowCouponInput] = useState(false);


    return (
        <React.Fragment>
            <Helmet>
                <title>Check order</title>
            </Helmet>

            <h1 className='text-2xl font-bold mt-16 mb-6 pt-32 text-gray-500 ms-9 tracking-widest'>Check order</h1>



            <div className='container  mx-auto mb-16 '>
                <div className='bg-gray-200 rounded-sm p-2'>
                    <p className='w-fit cursor-pointer p-2'
                                            onClick={() => setShowCouponInput(!showCouponInput)}

                    >
                        Have a coupon? Click here to enter your code
                    </p>
                </div>
                {showCouponInput && (
                        <input
                            type="text"
                            placeholder="Enter coupon code"
                            className="mt-2 py-2 ms-4 px-3 w-3/12 border border-gray-400 rounded-md"
                        />
                    )}
                <div className='flex mx-auto flex-wrap'>
                    <form className='md:w-1/2 w-[90%] mx-auto p-3' >
                        <h2 className='border-b pb-6 text-2xl font-bold text-gray-400 ms-4 tracking-widest'>Billing details</h2>

                        {/* /////////////// First Name && Last Name ////////////////*/}

                        <div className='flex flex-wrap justify-between items-center'>
                            <div className='w-1/2 px-4' >
                                <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="details">First name  <span className='text-red-600 mx-3 text-sm'>*</span> </label>
                                <input
                                    name='First name '
                                    id='First name '
                                    className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                    type="text"
                                />
                            </div>

                            <div className='w-1/2 px-4'>
                                <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="phone">Last name<span className='text-red-600 mx-3 text-sm'>*</span></label>
                                <input
                                    name='phone'
                                    id='phone'
                                    className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                    type="tel"
                                />
                            </div>

                        </div>

                        {/* /////////////// Country ////////////////*/}

                        <div className='px-4'>
                            <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="city">Country / Region <span className='text-red-600 mx-3 text-sm'>*</span></label>
                            <input
                                name='Country'
                                id='Country'
                                className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                type="text"
                            />
                        </div>

                        {/* /////////////// city ////////////////*/}

                        <div className='px-4'>
                            <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="city">Company name (optional) <span className='text-red-600 mx-3 text-sm'>*</span></label>
                            <input
                                name='city'
                                id='city'
                                className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                type="text"
                            />
                        </div>

                        {/* /////////////// Street ////////////////*/}

                        <div className='px-4'>
                            <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="city">Street address <span className='text-red-600 mx-3 text-sm'>*</span></label>
                            <input
                                name='Street'
                                id='Street'
                                className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                type="text"
                            />
                        </div>

                        {/* /////////////// Postcode ///////////////////////*/}

                        <div className='px-4'>
                            <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="city">Postcode / ZIP <span className='text-red-600 mx-3 text-sm'>*</span></label>
                            <input
                                name='Postcode'
                                id='Postcode'
                                className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                type="text"
                            />
                        </div>

                        {/* //////////////////// phone ///////////////////////*/}

                        <div className='px-4'>
                            <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="city">Phone  <span className='text-red-600 mx-3 text-sm'>*</span></label>
                            <input
                                name='Phone '
                                id='Phone '
                                className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                type="tell"
                            />
                        </div>

                        {/* ////////////////////  e-mail */}

                        <div className='px-4'>
                            <label className='text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto' htmlFor="city">E-mail   <span className='text-red-600 mx-3 text-sm'>*</span></label>
                            <input
                                name='Email  '
                                id='Email  '
                                className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none  flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                                type="email"
                            />
                        </div>

                        <div className='flex'>
                            <button type="submit" className="mx-5 rounded bg-gray-500 font-normal text-white flex items-center py-2 px-3 justify-end my-5">
                                Go to Visa <i className="fa-brands text-lg fa-cc-visa mx-3"></i>
                            </button>
                        </div>
                    </form>
                    <div className='md:w-1/2 w-[90%] mx-auto p-6 '>
                        <div className='md:container border p-5 '>
                            <h3 className=' pb-6 text-2xl font-bold text-gray-500 ms-4 tracking-widest'>
                                Your order
                            </h3>
                            <div className='flex justify-between p-6 border-b '>
                                <p className='text-gray-500'>Product</p>
                                <p className='text-gray-500'>Subtotal</p>
                            </div>
                            <div className='flex justify-between p-6 border-b '>
                                <p className='text-gray-500'>Blue Bubble Pop Shirt - S × 2</p>
                                <p className='text-gray-500'>1.500EGP</p>
                            </div>
                            <div className='flex justify-between p-6 border-b '>
                                <p className='text-gray-500'>Subtotal</p>
                                <p className='text-gray-500'>1.500EGP</p>
                            </div>
                            <div className='flex justify-between p-6 border-b '>
                                <p className='text-gray-500'>Shipping</p>
                                <p className='text-gray-500'>Free shipping</p>
                            </div>
                            <div className='flex justify-between p-6'>
                                <p className='text-gray-500'>Total</p>
                                <p className='text-gray-500'>1.500EGP</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

