import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading'; 
import { Helmet } from 'react-helmet-async';
import ContectThere from '../../components/SectionsContectUs/ContectThere/ContectThere';
import iconimage from '../../assets/image/black.png'
import { useTranslation } from 'react-i18next';

function ContentUs() {
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />; 
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>Contact Us</title>
                <link rel="icon" href={iconimage} />

            </Helmet>
            <main className="mt-48 pt-5 mb-20">
                <div className='flex justify-center items-center my-3'>
                    <Link className='text-[29px] text-gray-700 font-medium tracking-widest' to={"/"}>{t("nav.Home")}</Link>
                    <span className='mx-2'>/</span>
                    <Link className='text-[29px] text-gray-700 font-medium tracking-widest' to={"/ContentUs"}>{t("nav.ContentUs")} </Link>
                </div>
                <ContectThere />                
            </main>
        </React.Fragment>

    );
}

export default ContentUs;
