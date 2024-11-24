import React, { useState, useEffect } from 'react';
import Categories1 from '../../image/Categories/IMG-1 (1).jpg';
import Categories2 from '../../image/Categories/IMG-1 (3).jpg';
import Categories3 from '../../image/Categories/IMG-1 (4).jpg';
import Categories4 from '../../image/Categories/IMG-1 (5).jpg';
import CategoriesOver from '../CategoriesOver/CategoriesOver';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet-async';

const categoriesImages = [
    Categories1,
    Categories2,
    Categories3,
    Categories4,
];

function Categories() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleImageClick = (index) => {
        setCurrentIndex(index);
    };

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
                <title>Categories</title>
            </Helmet>
            <div className='flex w-[90%] mt-24 pt-10 mx-auto justify-between items-center flex-wrap'>
                <div className='md:w-1/2'>
                    <div className='flex p-5 justify-between'>
                        <div className='flex-col justify-center mt-4 p-5'>
                            {categoriesImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Category ${index + 1}`}
                                    className={`w-24 h-24 object-cover cursor-pointer mx-2 border ${currentIndex === index ? 'border-black' : 'border-transparent'}`}
                                    onClick={() => handleImageClick(index)}
                                />
                            ))}
                        </div>
                        <div className='py-12 p-5 flex justify-center items-center mx-auto'>
                            <div className='flex justify-center items-center mx-auto'>
                                <div className='relative'>
                                    <img src={categoriesImages[currentIndex]} alt="Category" className="w-96 h-96 object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2'>
                    <h3 className='text-xl font-semibold tracking-[0.1rem] text-[#532227]'>BLUE SHADOW OVERSIZED T-SHIRT</h3>
                    <p className='my-6 font-semibold tracking-widest text-[#532227]'>LE 650.00</p>
                    <p className='text-[12px]'>Size</p>

                    <div className='flex flex-wrap my-4 mb-7'>
                        <button className=' border border-[#532227] mx-2 my-1 p-1 px-3'>X-small</button>
                        <button className=' border border-[#532227] mx-2 my-1 p-1 px-3'>small</button>
                        <button className=' border border-[#532227] mx-2 my-1 p-1 px-3'>Medium</button>
                        <button className=' border border-[#532227] mx-2 my-1 p-1 px-3'>X-Large</button>
                        <button className=' border border-[#532227] mx-2 my-1 p-1 px-3'>Large</button>
                    </div>

                    <div>
                        <div className='flex items-center'>
                            <span><i className="mx-4 fa-solid fa-globe"></i></span>
                            <span className='text-[14px] text-[#532227]'>worldwide shipping</span>
                        </div>
                        <div className='flex items-center my-4'>
                            <span className='w-3 h-3 mx-4 bg-[#532227] rounded-full animate-pulse mr-2'></span>
                            <span className='text-[14px] mx-3 text-[#532227]'>worldwide shipping</span>
                        </div>
                    </div>

                    <div className='mx-auto w-full flex justify-center'>
                        <div className='w-3/4 mx-auto'>
                            <button className='border mx-2 my-4 p-1 py-2 px-3 w-full -skew-x-[25deg] hover:-skew-x-[5deg] transition-transform'>
                                ADD TO CART
                            </button>
                            <button className='border bg-[#532227] text-white mx-2 py-2 p-1 px-3 w-full skew-x-[25deg] hover:skew-x-[5deg] transition-transform'>
                                BUY IT NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <CategoriesOver />
        </React.Fragment>
    );
}

export default Categories;
