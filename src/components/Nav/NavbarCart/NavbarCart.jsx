import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import shopping from '../../../assets/shopping-trolley.png';
import { useCart } from '../../../context/CartContext';

function NavbarCart() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    const cartRef = useRef(null);
    const { cart, updateQuantity, removeFromCart } = useCart();

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [cartRef]);

    useEffect(() => {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(totalItems);
    }, [cart]);

    return (
        <>
            <i className="cursor-pointer fa-flip-horizontal relative
                 text-black text-[18px] mx-3 fa-solid fa-cart-shopping"
                onClick={toggleCart}>
                {cartItemCount > 0 && (
                    <span className="absolute fa-flip-horizontal top-[-0.7rem] left-3 bg-gray-900 text-white text-sm py-[0.9px] px-[4px] rounded-full">
                        <span className='py-[1px] p-[5px] text-[10px] font-light text-white'>
                            {cartItemCount}
                        </span>
                    </span>
                )}
            </i>
            {isCartOpen && (
                <div
                    ref={cartRef}
                    className="fixed top-0 overflow-scroll right-0 h-full md:w-1/2 lg:w-1/3 bg-gray-100 p-4 z-[999]"
                >
                    <div
                        onClick={toggleCart}
                        className="text-black border-b w-full flex justify-between items-center text-center text-xl p-2 mb-4 hover:text-gray-400"
                    >
                        <p className="text-[20px] tracking-widest font-semibold">Cart</p>
                        <i className="cursor-pointer fa-solid fa-xmark"></i>
                    </div>
                    {cartItemCount == 0 ? <>
                        <img src={shopping} className='w-1/2 mx-auto pt-4' alt="shopping" />
                        <h2 className='my-6 mx-auto text-center text-3xl tracking-widest text-gray-800 font-medium'>The basket is empty</h2>
                    </>

                        : <>
                            {cart.map((item, index) => (
                                <div key={index} className="flex items-center flex-wrap justify-between mb-5 border-b">
                                    <img className="w-20 h-20 mb-4 rounded-sm" src={item.imag} alt={item.name} />
                                    <div className="mx-4 flex-1">
                                        <div className="flex items-center my-2">
                                            <i
                                                onClick={() => updateQuantity(item.product_id, item.size, item.quantity - 1)}
                                                className={`cursor-pointer text-2xl ${item.quantity <= 1 ? 'text-gray-200' : 'text-gray-400'
                                                    } fa-solid fa-circle-minus`}
                                            ></i>
                                            <span className="mx-5 text-gray-600 flex items-center">{item.quantity}</span>
                                            <i
                                                onClick={() => updateQuantity(item.product_id, item.size, item.quantity + 1)}
                                                className="cursor-pointer text-2xl text-gray-400 fa-solid fa-circle-plus"
                                            ></i>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.product_id, item.size)}
                                            className="text-red-500  mx-4 mt-2 mb-4"
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                    <div className="flex flex-col mx-auto justify-center items-center mb-4">
                                        <p className="font-medium mb-2 tracking-[2px]">{item.name}</p>
                                        <p className="text-base  tracking-[2.8px]">Size: {item.size}</p>
                                        <p className="ml-4 tracking-[2.8px]">LE {item.total_price}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="mt-4 text-center">
                                <p className="font-semibold text-lg">
                                    Total: LE {cart.reduce((total, item) => total + item.total_price, 0)}
                                </p>
                                <Link
                                    to="/OrderUsers"
                                    className="mt-4 inline-block bg-black text-white px-6 py-2 rounded"
                                >
                                    Proceed to checkout
                                </Link>
                            </div>

                        </>


                    }

                </div>
            )}
        </>
    );
}

export default NavbarCart;
