import React from 'react';
import AddToCartButton from '../../components/Products/AddToCartButton';
import PropTypes from 'prop-types';

const ProductInfo = ({ product, selectedSize, setSelectedSize,
     quantity, setQuantity, onAddToCart }) => {
    return (
        <React.Fragment>
            <p className="tracking-[3px] text-gray-500 text-3xl md:text-4xl mt-6 mb-5 font-medium text-center md:text-left">
                {product?.category_name}
            </p>
            <span className="text-pink-500 text-lg md:text-xl font-semibold block mb-4 text-center md:text-left">
                LE {product?.price}
            </span>
            <div className="mb-6">
                <label className="block text-pink-500 text-lg font-semibold mb-3">Size</label>
                <div className="flex flex-wrap gap-3">
                    {product?.stock.map((size) => (
                        <button
                            key={size?.size_id}
                            onClick={() => setSelectedSize(size.size)}
                            className={`px-4 py-2 rounded-md border transition-colors ${
                                selectedSize === size.size
                                    ? 'bg-pink-600 text-white'
                                    : 'bg-gray-200 hover:bg-gray-300 text-pink-500'
                            }`}
                        >
                            {size.size} / LE {size.price}
                        </button>
                    ))}
                </div>
            </div>
            <div className="mb-6">
                <label className="block text-lg text-gray-700 font-semibold mb-3">Quantity</label>
                <div className="flex items-center border border-pink-300 w-fit mx-auto md:mx-0">
                    <button
                        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                        className="px-4 py-2 text-pink-500"
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(Number(e.target.value), 1))}
                        className="w-16 text-pink-500 text-center border-none outline-none"
                    />
                    <button
                        onClick={() => setQuantity((prev) => prev + 1)}
                        className="px-4 py-2 text-pink-500"
                    >
                        +
                    </button>
                </div>
            </div>
            <AddToCartButton
                product={product}
                selectedSize={selectedSize}
                quantity={quantity}
                onAddToCart={onAddToCart}
            />
        </React.Fragment>
    );
};

ProductInfo.propTypes = {
    product: PropTypes.string,
    selectedSize: PropTypes.string,
    setSelectedSize: PropTypes.string,
    quantity: PropTypes.string,
    setQuantity: PropTypes.string,
    onAddToCart: PropTypes.string,
};


export default ProductInfo;
