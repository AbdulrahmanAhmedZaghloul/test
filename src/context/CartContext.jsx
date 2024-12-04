
import PropTypes from 'prop-types';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('cart'); 
        }
    }, [cart]);

    const addToCart = (newItem) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (item) => item.product_id === newItem.product_id && item.size === newItem.size
            );

            if (existingItemIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += newItem.quantity;
                updatedCart[existingItemIndex].total_price += newItem.total_price;
                return updatedCart;
            }

            return [...prevCart, newItem];
        });
    };

    const updateQuantity = (productId, size, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.product_id === productId && item.size === size
                    ? { ...item, quantity: newQuantity, total_price: newQuantity * item.price }
                    : item
            )
        );
    };

    const removeFromCart = (productId, size) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.product_id === productId && item.size === size))
        );
    };

    const clearCart = () => {
        setCart([]); // تفريغ السلة
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,

            }}
        >
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
