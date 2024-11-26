import React, { useEffect, useState } from 'react'
import { useCart } from '../../../context/CartContext';
 
function DetailsOrdes() {

    const [cartItemCount, setCartItemCount] = useState(0);
    const { cart } = useCart();


    useEffect(() => {

        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(totalItems);
    }, [cart]);

 
    return (
        <React.Fragment>
            <div className='md:w-1/2 w-[90%] mx-auto p-6 '>
                <div className='md:container border p-5 '>
                    <h3 className=' pb-6 text-2xl font-bold text-gray-500 ms-4 tracking-widest'>
                        Your order
                    </h3>
                    <>
                        <div className='flex justify-between p-6 border-b '>
                            <p className='text-gray-500'>Product</p>
                            <p className='text-gray-500'>{cartItemCount}</p>
                        </div>

                        {cart.map((item, index) => (
                            <div key={index} className="flex items-center flex-wrap justify-between p-6  ">
                                    <p className='text-gray-500'>{item.name} {item.size} <span className='text-gray-600 text-[18px] mx-2'> x </span>  {item.quantity}</p>
                                    <p className='text-gray-500'>{item.total_price}</p>
                            </div>
                        ))}

                        <div className='flex justify-between p-6 border-b border-t '>
                            <p className='text-gray-500'>Subtotal</p>
                            <p className='text-gray-500'>Total: LE {cart.reduce((total, item) => total + item.total_price, 0)}                                </p>
                        </div>
                    </>
                </div>
            </div>
        </React.Fragment>
    )
}
export default DetailsOrdes