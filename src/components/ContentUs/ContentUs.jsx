import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading'; // استيراد مكون التحميل
import { Helmet } from 'react-helmet-async';
import Contectone from '../SectionsContectUs/Contectone/Contectone';
import ContectTwo from '../SectionsContectUs/ContectTwo/ContectTwo';
import ContectThere from '../SectionsContectUs/ContectThere/ContectThere';
import ContectMap from '../SectionsContectUs/ContectMap/ContectMap';
function ContentUs() {
    const [loading, setLoading] = useState(true);

    // محاكاة تحميل البيانات
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // إنهاء حالة التحميل بعد 2 ثانية
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />; // عرض مكون التحميل أثناء التحميل
    }

    return (
        <React.Fragment>
            <Helmet>

                <title>Contact Us</title>
            </Helmet>
            <main className="mt-[9.5rem]">
                <h1 className='text-5xl mt-6 pt-2 text-center tracking-widest text-gray-700 font-semibold'>Contact Us</h1>
                <div className='flex justify-center items-center my-3'>
                    <Link className='text-[19px] text-gray-700 font-medium tracking-widest' to={"/"}>home </Link>
                    <span className='mx-2'>/</span>
                    <Link className='text-[19px] text-gray-700 font-medium tracking-widest' to={"/ContentUs"}>ContentUs </Link>
                </div>

                {/* <Contectone /> */}
                <ContectTwo />
                <ContectThere />
                <ContectMap />
                
            </main>
        </React.Fragment>

    );
}

export default ContentUs;
