import React from 'react'
import { Helmet } from 'react-helmet-async';
import iconimage from '../../assets/image/black.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AboutUs() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Helmet>
                <title>About Us</title>
                <link rel="icon" href={iconimage} />
            </Helmet>
            <div className='flex justify-center items-center mb-3 mt-60'>
                <Link className='text-[29px] text-gray-600 font-medium tracking-widest' to={"/"}>{t("nav.Home")} </Link>
                <span className='mx-2'>/</span>
                <Link className='text-[29px] text-gray-600 font-medium tracking-widest' to={"/AboutUs"}>{t("nav.AboutUS")} </Link>
            </div>
            <div className='mb-20 mt-10 border rounded-3xl container p-9 mx-auto'>
                <div className='border my-10 rounded-3xl p-9 w-[95%] mx-auto'>
                    <div>
                        <h1 className="text-center tracking-widest text-xl relative mb-7">
                            {t("about.Who")} ?
                            <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gray-600 mx-auto w-24"></span>
                            <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-gray-600 mx-auto w-16"></span>
                        </h1>
                        <h2 className='tracking-widest text-xl'>{t("about.store")}</h2>
                    </div>
                </div>

                {/* Our goal */}

                <div className='border my-10 rounded-3xl p-9 w-[95%] mx-auto'>
                    <div>
                        <h1 className="text-center tracking-widest text-xl relative mb-7">
                            {t("about.goal")}
                            <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gray-600 mx-auto w-24"></span>
                            <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-gray-600 mx-auto w-16"></span>
                        </h1>
                        <h2 className='tracking-widest text-xl'>{t("about.first")}</h2>
                    </div>
                </div>

                {/*  Our vision */}

                <div className='border my-10 rounded-3xl p-9 w-[95%] mx-auto'>
                    <div>
                        <h1 className="text-center tracking-widest text-xl relative mb-7">
                            {t("about.vision")}
                            <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gray-600 mx-auto w-24"></span>
                            <span className="absolute inset-x-0 -bottom-3.5 h-0.5 bg-gray-600 mx-auto w-16"></span>
                        </h1>
                        <h2 className='tracking-widest text-xl'>{t("about.strive")}</h2>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
};

export default AboutUs;