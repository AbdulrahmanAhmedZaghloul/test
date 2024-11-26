import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes

import content4 from '../../image/about/person_1.jpg';
import content5 from '../../image/about/person_2.jpg';
import content6 from '../../image/about/person_3.jpg';
import content7 from '../../image/about/person_4.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Loading from '../../components/Loading/Loading';
function AboutUs() {

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
                <title>About Us</title>
            </Helmet>
            <h6 className="text-gray-700 mt-44 mb-6 text-[2rem] text-center font-bold tracking-widest leading-relaxed">About Us</h6>
            <div className='flex justify-center items-center my-3'>
                <Link className='text-[19px] text-gray-600 font-medium tracking-widest' to={"/"}>home </Link>
                <span className='mx-2'>/</span>
                <Link className='text-[19px] text-gray-600 font-medium tracking-widest' to={"/AboutUs"}>About Us </Link>
            </div>
            <section className="pb-20  relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className="rounded-xl object-cover" src={content4} alt="about Us image" />
                            </div>
                            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src={content5} alt="about Us image" />
                        </div>

                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-gray-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Empowering Each Other to Succeed
                                    </h2>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Every project we ve undertaken has been a collaborative effort, where every person involved has left their mark. Together, we ve not only constructed buildings but also built enduring connections that define our success story.
                                    </p>
                                </div>
                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <StatItem count="33+" label="Years of Experience" />
                                    <StatItem count="125+" label="Successful Projects" />
                                    <StatItem count="52+" label="Happy Clients" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center py-5">Our Team</h2>
                    <div className="flex flex-wrap justify-center ">
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
                            <img
                                src={content4}
                                alt="csd"
                                className="img-fluid rounded-lg"
                            />
                            <h3 className='text-2xl mt-2 font-semibold tracking-widest'>
                                Lawson Arnold
                            </h3>
                            <h4 className=' mb-3 mt-1 font-semibold tracking-widest'>
                                CEO, Founder, Atty.

                            </h4>
                            <p className='font-medium tracking-wider'>
                                Separated they live in. Separated they live in
                                Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                            </p>

                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
                            <img
                                src={content5}
                                alt="csd"
                                className="img-fluid rounded-lg"
                            />
                            <h3 className='text-2xl mt-2 font-semibold tracking-widest'>
                                Jeremy Walker
                            </h3>
                            <h4 className=' mb-3 mt-1 font-semibold tracking-widest'>
                                CEO, Founder, Atty.

                            </h4>
                            <p className='font-medium tracking-wider'>
                                Separated they live in. Separated they live in
                                Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                            </p>

                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
                            <img
                                src={content6}
                                alt="csd"
                                className="img-fluid rounded-lg"
                            />
                            <h3 className='text-2xl mt-2 font-semibold tracking-widest'>
                                Patrik White
                            </h3>
                            <h4 className=' mb-3 mt-1 font-semibold tracking-widest'>
                                CEO, Founder, Atty.

                            </h4>
                            <p className='font-medium tracking-wider'>
                                Separated they live in. Separated they live in
                                Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                            </p>

                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-4 text-center">
                            <img
                                src={content7}
                                alt="csd"
                                className="img-fluid rounded-lg"
                            />
                            <h3 className='text-2xl mt-2 font-semibold tracking-widest'>
                                Kathryn Ryan
                            </h3>
                            <h4 className=' mb-3 mt-1 font-semibold tracking-widest'>
                                CEO, Founder, Atty.

                            </h4>
                            <p className='font-medium tracking-wider'>
                                Separated they live in. Separated they live in
                                Bookmarksgrove right at the coast of the Semantics,
                                a large language ocean.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-40 relative xl:mr-0 lg:mr-5 mr-0">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-gray-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story</h2>
                                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Our achievement story is a testament to teamwork and perseverance. Together, we ve
                                            overcome challenges, celebrated victories, and created a narrative of progress and
                                            success.</p>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-700 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                                                Landscapes Together</p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-700 text-2xl font-bold font-manrope leading-9">125+ Projects
                                            </h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                                Through Success</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-700 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                                                Innovation Wins Understanding</p>
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-700 text-2xl font-bold font-manrope leading-9">99% Happy
                                                Clients</h4>
                                            <p className="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                                                Client Satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                                    More</span>
                                <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
                                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24  relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">

                        <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h2 className="text-gray-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Empowerment</h2>
                                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                            </div>
                            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}
const StatItem = ({ count, label }) => {
    return (
        <div className="flex-col justify-start items-start inline-flex">
            <h3 className="text-gray-700 text-4xl font-bold font-manrope leading-normal">{count}</h3>
            <h6 className="text-gray-500 text-base font-normal leading-relaxed">{label}</h6>
        </div>
    );
};

StatItem.propTypes = {
    count: PropTypes.string.isRequired, 
    label: PropTypes.string.isRequired, 
};
export default AboutUs