import React, { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FromOrdes() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        company_name: '',
        country: '',
        address: '',
        city: '',
        province: '',
        post_code: '',
        phone: '',
        email: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
    const buttonRef = useRef(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        toast.info(t('from.order') + '...', { autoClose: 2000 });

        const products = cart.map((item) => ({
            product_id: item.product_id,
            size_id: item.size_id,
            name: item.name,
            quantity: item.quantity,
            size: item.size,
            price: item.price,
        }));

        const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const orderData = {
            ...formData,
            products,
            total,
        };

        try {
            const response = await axios.post('https://backend.cenchh.com/api/user/order/store', orderData);
            clearCart();
            toast.success(`${t('from.order')} ${response.data.status}`, { autoClose: 3000 });
            setTimeout(() => {
                navigate('/');
            }, 5000);
        } catch (error) {
            toast.error(t('from.error') + ' ' + t('cart.check'), { autoClose: 3000 });
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <React.Fragment>
            <form className="md:w-1/2 w-[90%] mx-auto p-3" onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div className="px-4 border-t" key={key}>
                        <label
                            className="text-start flex justify-start my-3 text-gray-400 text-[1rem] tracking-widest ms-auto"
                            htmlFor={key}
                        >
                            {key.replace('_', ' ').toUpperCase()}
                            <span className="text-red-600 mx-3 text-sm">*</span>
                        </label>
                        <input
                            name={key}
                            id={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="flex py-2 rounded-md px-2 focus:border-gray-500 border-gray-500 border outline-none flex-wrap items-center mx-auto w-full placeholder text-[1.1rem] tracking-[0.1rem]"
                            type={key === 'email' ? 'email' : 'text'}
                        />
                    </div>
                ))}

                <div className="flex">
                    <button
                        ref={buttonRef}
                        type="submit"
                        className={`mx-5 rounded w-fit bg-gray-500 font-normal text-white flex items-center py-2 px-3 justify-end my-5 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span>{t('from.order')}...</span>
                        ) : (
                            <span>{t('from.order')}</span>
                        )}
                    </button>
                </div>

                <ToastContainer position="bottom-right" reverseOrder={false} />
            </form>
        </React.Fragment>
    );
}

export default FromOrdes;
