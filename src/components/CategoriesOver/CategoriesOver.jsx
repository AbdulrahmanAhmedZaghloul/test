

import React from 'react';
import Slider from 'react-slick';
import content1 from '../../image/Categories/IMG-1 (1).jpg';
import content2 from '../../image/Categories/IMG-1 (3).jpg';
import DEPT1 from '../../image/Categories/IMG-1 (5).jpg';
import DEPT2 from '../../image/Categories/IMG-1 (4).jpg';
import SHABOW1 from '../../image/Categories/IMG-1 (1).jpg';
import SHABOW2 from '../../image/Categories/IMG-1 (3).jpg';
import OVER1 from '../../image/Categories/IMG-1 (5).jpg';
import OVER2 from '../../image/Categories/IMG-1 (1).jpg';
import TOXIC1 from '../../image/Categories/IMG-1 (4).jpg';
import TOXIC2 from '../../image/Categories/IMG-1 (3).jpg';

const products = [
    {
        id: 1,
        images: [content1, content2],
        name: 'SENSITIVE CONTENT OVERSIZED T-SHIRT',
        price: 'LE 650.00',
    },
    {
        id: 2,
        images: [DEPT1, DEPT2],
        name: 'SECURITY DEPT OVERSIZED T-SHIRT',
        price: 'LE 650.00',
    },
    {
        id: 3,
        images: [SHABOW1, SHABOW2],
        name: 'BLUE SHADOW OVERSIZED T-SHIRT',
        price: 'LE 650.00',
    },
    {
        id: 4,
        images: [OVER1, OVER2],
        name: 'PROJECT 019 OVERSIZED T-SHIRT',
        price: 'LE 650.00',
    },
    {
        id: 5,
        images: [TOXIC1, TOXIC2],
        name: 'No toxic tee',
        price: 'LE 650.00',
        sale: true,
    },
];

function CategoriesOver() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplaySpeed:true,
        autoplay:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <React.Fragment>
            <h2 className='text-[#532227] text-center my-3 text-xl font-semibold tracking-wider mt-10 mb-7'>OVERSIZED T-SHIRTS</h2>
            <div className='my-10'>
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className='p-5'>
                            <div className='relative group mb-2'>
                                <img className='w-full object-contain' src={product.images[0]} alt={`Product ${product.id} - 1`} />
                                <img
                                    className='w-full object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                                    src={product.images[1]}
                                    alt={`Product ${product.id} - 2`}
                                />
                                <div className='bg-[#4d1d22] text-white py-1 w-full absolute bottom-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>Quick view</p>
                                </div>
                                {product.sale && (
                                    <div className='bg-red-700 text-white py-1 w-12 absolute top-0 right-0 tracking-wider'>
                                        <p className='text-center text-[12px] font-semibold mx-auto flex justify-center'>sale</p>
                                    </div>
                                )}
                            </div>
                            <p className='text-center text-[#532227] text-[13px] font-semibold'>
                                {product.name}
                                <br />
                                {product.sale ? (
                                    <span className="text-[#532227] line-through text-[11px] mx-2">LE 650.00</span>
                                ) : null}
                                <span className='text-[12px]'>{product.price}</span>
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </React.Fragment>
    );
}

export default CategoriesOver;
