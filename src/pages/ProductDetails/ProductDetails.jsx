import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import iconimage from '../../assets/image/black.png'
import { Helmet } from 'react-helmet-async';

function ProductDetails() {
    const location = useLocation();
    const product = location.state?.product;
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error(`Please select a size`, { autoClose: 3000 });

            return;
        }

        const sizeDetails = product.stock.find((s) => s.size === selectedSize);

        if (!sizeDetails) {
            toast.error(`Invalid size selected`, { autoClose: 3000 });

            return;
        }

        if (quantity < 1) {
            toast.error(`Please choose a number`, { autoClose: 3000 });
            return;
        }

        const newCartItem = {
            product_id: product.id,
            size_id: sizeDetails.size_id,
            name: product.name,
            imag: product.imag,
            quantity: Number(quantity),
            size: selectedSize,
            price: sizeDetails.price,
            total_price: sizeDetails.price * Number(quantity),
        };

        addToCart(newCartItem);
        toast.success(`Product added to cart`, { autoClose: 3000 });

    };

    return (
        <React.Fragment>
            <Helmet>
                <title>ProductDetails</title>
                <link rel="icon" href={iconimage} />

            </Helmet>
            <div className="p-5 my-24">
                <div className="flex justify-between items-center flex-wrap">
                    <div className="xl:w-[50%] mx-auto ms:w-[80%] p-5">
                        <img
                            className="w-[70%] mx-auto object-contain mb-4"
                            src={product?.imag}
                            alt={product?.name}
                        />
                        <div className='px-2 mt-2'>
                            <p className="text-gray-600 text-base mx-auto text-center tracking-[2.8px]">{product.details}</p>

                            <div className="flex justify-center mt-4 mx-auto text-center flex-col">
                                <p className="text-center tracking-[3px] text-gray-800 text-base font-normal">
                                    {product?.name}
                                </p>
                                <span className="text-gray-800 text-base tracking-widest">LE {product?.price}</span>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-[50%] mx-auto ms:w-[80%] p-5">
                        <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2">Select Size :</label>
                            <select
                                value={selectedSize}
                                onChange={(e) => setSelectedSize(e.target.value)}
                                className="border border-gray-300 rounded px-5 py-2 w-1/2"
                            >
                                <option value="">Choose a size</option>
                                {product.stock.map((size) => (
                                    <option key={size.size_id} value={size.size}>
                                        {size.size} - LE {size.price}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-lg font-semibold mb-2">Quantity:</label>
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                            />
                        </div>

                        <div className='mx-auto w-full flex justify-center'>
                            <div className='w-3/4 mx-auto'>
                                <button onClick={handleAddToCart}
                                    className='border mx-2 shadow-sm my-4 p-1 py-2 px-3 w-full hover:bg-[#242323] hover:text-white -skew-x-[25deg] hover:-skew-x-[5deg] transition-transform'>
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    </div>

                    <ToastContainer position="bottom-right"
                        reverseOrder={false} />
                </div>
            </div>
        </React.Fragment>

    );
}

export default ProductDetails;
