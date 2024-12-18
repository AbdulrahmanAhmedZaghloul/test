import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import shopping from '../../../assets/shopping-trolley.png';
import { useCart } from '../../../context/CartContext';
import { useTranslation } from 'react-i18next';

function NavbarCart() {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    const cartRef = useRef(null);
    const { cart, updateQuantity, removeFromCart } = useCart();
    console.log(cart);
    const navigate = useNavigate();

    const { t } = useTranslation();
    
    const handleNavigate = () => {
        navigate("/search");
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <div className='flex items-center '>
                <i onClick={handleNavigate} className="mx-6 cursor-pointer fa-solid fa-magnifying-glass text-pink-500 text-[20px]"></i>
                <i className={` ${isSticky ? 'cursor-pointer fa-flip-horizontal relative text-pink-500 text-[18px] mx-3 fa-solid fa-cart-shopping' :
                    'text-pink-600 cursor-pointer fa-flip-horizontal relative text-[18px] mx-3 fa-solid fa-cart-shopping'}`}
                    onClick={toggleCart}>
                    {cart.length > 0 && (
                        <span className="absolute fa-flip-horizontal top-[-0.7rem] left-3 bg-pink-600 text-white text-sm py-[0.9px] px-[4px] rounded-full">
                            <span className='py-[1px] p-[5px] text-[10px] font-light text-white'>
                                {cart.length}
                            </span>
                        </span>
                    )}
                </i>
            </div>
            {isCartOpen && (
                <div
                    ref={cartRef}
                    className="fixed top-0 overflow-scroll right-0 h-full md:w-1/2 lg:w-1/3 bg-gray-100 p-4 z-[999]"
                >
                    <div
                        onClick={toggleCart}
                        className="text-black border-b w-full flex justify-between items-center text-center text-xl p-2 mb-4 hover:text-gray-400"
                    >
                        <p className="text-[20px] tracking-[2.9px] font-semibold text-pink-500">{t("cart.Cart")}</p>
                        <i className="cursor-pointer fa-solid fa-xmark text-pink-500"></i>
                    </div>
                    {cartItemCount == 0 ? <>
                        <img src={shopping} className='w-1/2 mx-auto pt-4' alt="shopping" />
                        <h2 className='my-6 mx-auto text-center text-3xl tracking-widest text-gray-800 font-medium'>{t("cart.basket")}</h2>
                    </> : <>
                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center flex-wrap justify-between mb-5 border-b">
                                <div className='w-1/4 '>
                                    <img className="w-20 h-20 mb-4 rounded-sm" src={item.imag} alt={item?.name} />
                                </div>
                                <div className='w-3/4'>
                                    <div className="flex mx-auto justify-between w-full items-center mb-4">
                                        <div>
                                            <p className="font-medium mb-2 tracking-[2.4px] text-pink-500">{item?.name}</p>
                                            <p className="text-base text-pink-500 tracking-widest">Size: {item?.size}</p>
                                            <p className="text-base text-pink-500 tracking-widest">LE {item?.total_price}</p>
                                        </div>
                                        <p className="text-base text-pink-500 tracking-widest">
                                            LE {cart.reduce((total, item) => total + item.total_price, 0)}
                                        </p>
                                    </div>
                                    <div className="mx-4 flex items-center">
                                        <div className="flex items-center my-2 border border-pink-500">
                                            <i
                                                onClick={() =>
                                                    item.quantity > 1 &&
                                                    updateQuantity(item.product_id, item.size, item.quantity - 1)
                                                }
                                                className={`cursor-pointer text-pink-600 text-xl px-2 ${item.quantity <= 1 ? 'opacity-50 cursor-not-allowed' : ''
                                                    } fa-solid fa-minus`}
                                            ></i>
                                            <span className="mx-5 text-pink-600 flex items-center">{item.quantity}</span>
                                            <i
                                                onClick={() => updateQuantity(item.product_id, item.size, item.quantity + 1)}
                                                className="cursor-pointer text-pink-600 px-2 text-xl fa-solid fa-plus"
                                            ></i>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.product_id, item.size)}
                                            className="text-pink-500 mx-4"
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="mt-4">
                            <div className='flex justify-between flex-wrap'>
                                <p className='text-base text-pink-500 tracking-[2.5px] font-medium '>
                                    {t("cart.total")}
                                </p>
                                <p className="text-lg tracking-widest text-pink-500">
                                    LE {cart.reduce((total, item) => total + item.total_price, 0)}
                                </p>
                            </div>
                            <p className='mb-2 pt-7 text-[14px] tracking-widest text-pink-700'>
                                {t("cart.Taxes")}
                            </p>
                            <Link
                                to="/OrderUsers"
                                className="mt-4 w-11/12 text-center mx-auto flex justify-center
                                     tracking-[3px] text-xl -skew-x-[25deg]
                                      hover:-skew-x-[5deg] border border-pink-500
                                       hover:border-none shadow-sm  hover:bg-[#242323]
                                        text-pink-300 hover:text-white py-2 transition-transform "
                            >
                                {t("cart.check")}
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
