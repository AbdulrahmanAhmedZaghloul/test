import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import iconimage from '../../assets/image/black.png'
import { Helmet } from 'react-helmet-async';
import RecentProduct from '../../components/RecentProduct/RecentProduct';
import { useTranslation } from 'react-i18next';

function ProductDetails() {
    const location = useLocation();
    const { t } = useTranslation();

    const id = useParams();
    const product = location.state?.product;
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error(`${t("cart.errorSize")}`, { autoClose: 3000 });
            return;
        };
        const sizeDetails = product.stock.find((s) => s.size === selectedSize);
        if (!sizeDetails) {
            toast.error(`${t("cart.errorSize")}`, { autoClose: 3000 });
            return;
        };
        if (quantity < 1) {
            toast.error(`${t("cart.errorSizee")}`, { autoClose: 3000 });
            return;
        };
        const newCartItem = {
            product_id: product.id,
            size_id: sizeDetails?.size_id,
            name: product.category_name,
            imag: product.imag,
            quantity: Number(quantity),
            size: selectedSize,
            price: sizeDetails.price,
            total_price: sizeDetails.price * Number(quantity),
        };
        addToCart(newCartItem);
        toast.success(`${t("cart.success")}`, { autoClose: 3000 });
    };
    console.log(product);
    return (
        <React.Fragment>
            <Helmet>
                <title>ProductDetails</title>
                <link rel="icon" href={iconimage} />
            </Helmet>
            <div className="p-5 pt-28 my-24">
                <div className="flex justify-between items-center flex-wrap">
                    <div className="xl:w-[50%] mx-auto ms:w-[80%] p-5">
                        <img
                            className="w-[70%] mx-auto object-contain mb-4"
                            src={product?.imag}
                            alt={product?.category_name}
                        />
                    </div>
                    <div className="xl:w-[50%] mx-auto ms:w-[80%] p-5">

                        <p className="tracking-[3px] text-gray-500 text-4xl mt-9 mb-5 font-medium">
                            {product?.category_name}
                        </p>
                        <span className="text-pink-500 text-base tracking-widest mb-3">LE {product?.price}</span>                        <div className="mb-4">
                            <label className="block  text-pink-500 text-lg font-semibold mb-2 mt-4">Size :</label>
                            <div className='flex flex-wrap gap-3'>
                                {product.stock.map((size) => (
                                    <button
                                        key={size.size_id}
                                        onClick={() => setSelectedSize(size.size)}
                                        className={`px-2 py-2 rounded-md border ${selectedSize === size.size
                                            ? 'bg-pink-600 text-white'
                                            : 'bg-gray-200 hover:bg-gray-300 text-pink-500'
                                            }`}
                                    >
                                        {size.size} / LE {size.price}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg text-gray-700 font-semibold mb-2">Quantity:</label>
                            <div className="flex items-center  border border-pink-300 w-fit">
                                <button
                                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                                    className="px-4 py-2 text-pink-500"
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
                                    className="w-16 text-pink-500 text-center border-none "
                                />
                                <button
                                    onClick={() => setQuantity((prev) => prev + 1)}
                                    className="px-4 py-2 text-pink-500"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className='mx-auto w-full flex justify-center'>
                            <div className='w-3/4 mx-auto'>
                                <button onClick={handleAddToCart}
                                    className='border border-pink-500 hover:border-none mx-2 shadow-sm my-4 p-1 py-2 px-3 w-full hover:bg-[#242323] hover:text-pink-500 -skew-x-[25deg] hover:-skew-x-[5deg] transition-transform'>
                                    {t("productId.add")}
                                </button>
                            </div>
                        </div>
                    </div>
                    <ToastContainer position="bottom-right"
                        reverseOrder={false} />
                </div>
            </div>
            <RecentProduct id={id?.product} />
        </React.Fragment>
    );
};
export default ProductDetails;