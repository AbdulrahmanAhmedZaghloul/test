import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FromOrdes from '../../components/Ordes/FromOrdes/FromOrdes';
import DetailsOrdes from '../../components/Ordes/DetailsOrdes/DetailsOrdes';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import iconimage from '../../assets/image/black.png'

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
                <link rel="icon" href={iconimage} />

            </Helmet>
            

            <div className="container flex flex-wrap justify-between items- mx-auto mt-60 mb-16">
             
              <FromOrdes/>

              <DetailsOrdes/>
           
            </div>

        </React.Fragment>
    );
}