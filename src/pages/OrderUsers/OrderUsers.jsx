import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FromOrdes from '../../components/Ordes/FromOrdes/FromOrdes';
import DetailsOrdes from '../../components/Ordes/DetailsOrdes/DetailsOrdes';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function OrderUsers() {
    const { cart } = useCart();
    const navigate = useNavigate();
    useEffect(() => {
        if (cart.length === 0) {
            navigate('/'); // إعادة التوجيه إذا كانت السلة فارغة
        }
    }, [cart, navigate]);
    return (
        <React.Fragment>
            <Helmet>
                <title>Check order</title>
            </Helmet>
            <h1 className="text-2xl font-bold mt-16 mb-6 pt-32 text-gray-500 ms-9 tracking-widest">
                Check order
            </h1>


            <div className="container flex flex-wrap justify-between items- mx-auto mb-16">
             
              <FromOrdes/>

              <DetailsOrdes/>
           
            </div>

        </React.Fragment>
    );
}