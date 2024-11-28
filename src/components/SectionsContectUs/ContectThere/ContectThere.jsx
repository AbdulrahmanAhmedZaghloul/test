import React from 'react'
import { useTranslation } from 'react-i18next';

function ContectThere() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <div className='mb-20 mt-10 border  rounded-3xl container p-9 mx-auto'>
                <h1 className='text-center text-pink-600 font-normal text-3xl tracking-widest'>{t("content.Follow")}</h1>
                <div className='flex justify-between flex-wrap'>
                    <div className='my-10 w-1/2 p-9 mx-auto'>
                        <a
                            href="https://wa.me/201097184660"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border rounded-3xl p-9 shadow-md flex items-center"
                        >
                            <div className='flex items-center'>
                                <div className='border p-4 px-5 bg-green-800 rounded-full'>
                                    <i className="fa-solid fa-phone text-white text-xl"></i>
                                </div>
                                <span className='mx-3 font-normal tracking-widest text-xl'>phone+201097184660</span>
                            </div>
                        </a>
                    </div>

                    <div className='my-10 w-1/2 p-9 mx-auto'>
                        <a
                             href="https://www.instagram.com/cench.in/?igsh=dmY4OWFyMGIzZ2Jk"
                             target="_blank"
                             rel="noopener noreferrer"
                            className="border rounded-3xl p-9 shadow-md flex items-center"
                        >
                            <div className='flex items-center'>
                                <div className='border p-4 px-5 bg-pink-500 rounded-full'>
                                    <i className="fa-brands fa-instagram text-white text-xl"></i>
                                </div>
                                <span className='mx-3 font-normal tracking-widest text-xl'>instagram.com/cench.in</span>
                            </div>
                        </a>
                    </div>
                    <div className='my-10 w-1/2 p-9 mx-auto'>
                        <a
                               href="http://www.tiktok.com/@cench.in"
                               target="_blank"
                               rel="noopener noreferrer"
                            className="border rounded-3xl p-9 shadow-md flex items-center"
                        >
                            <div className='flex items-center'>
                                <div className='border p-4 px-5 bg-black rounded-full'>
                                    <i className="fa-brands fa-tiktok text-white text-xl"></i>
                                </div>
                                <span className='mx-3 font-normal tracking-widest text-xl'>tiktok.com/@cench.in</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContectThere