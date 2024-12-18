import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { ToastContainer } from 'react-toastify';
import iconimage from '../../assets/image/black.png';
import { Helmet } from 'react-helmet-async';
import RecentProduct from '../../components/RecentProduct/RecentProduct';
import ImageSlider from '../../components/Products/ImageSlider';
import ProductInfo from '../../components/Products/ProductInfo';

function ProductDetails() {
    const location = useLocation();
    const id = useParams();
    const { addToCart } = useCart();
    const [mainImage, setMainImage] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const product = location.state?.product;

    return (
        <React.Fragment>
            <Helmet>
                <title>Product Details</title>
                <link rel="icon" href={iconimage} />
            </Helmet>
            <div className="p-5 pt-28 my-24">
                <div className="flex flex-wrap justify-between items-center gap-8">
                    <div className="w-full xl:w-[48%] lg:w-[60%] md:w-[80%] mx-auto flex flex-col items-center">
                        <div className="flex flex-wrap justify-center items-center">
                        
                            <ImageSlider
                                images={product?.images || []}
                                onImageClick={setMainImage}
                            />
                            <div className='w-[70%] flex justify-center items-center'>
                                <img
                                    className="w-80 mx-auto object-contain mb-6"
                                    src={mainImage || product?.imag}
                                    alt={product?.category_name}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-[48%] lg:w-[60%] md:w-[80%] mx-auto p-5">
                    {product && (
                            <ProductInfo
                                product={product}
                                selectedSize={selectedSize}
                                setSelectedSize={setSelectedSize}
                                quantity={quantity}
                                setQuantity={setQuantity}
                                onAddToCart={addToCart}
                            />
                        )}
                    </div>
                </div>
                <ToastContainer position="bottom-right" reverseOrder={false} />
            </div>
            <RecentProduct id={id?.product} />
        </React.Fragment>
    );
}

export default ProductDetails;