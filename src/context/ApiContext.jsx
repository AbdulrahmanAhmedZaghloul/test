import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// إنشاء الـ Context
const ApiContext = createContext();

// مزود الـ Context
export const ApiProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://backend.cenchh.com/api/category/getAll');
                if (response.data.status === 'success') {
                    setCategories(response?.data?.data);
                } else {
                    throw new Error('Failed to fetch categories');
                }
            } catch (error) {
                setError(error.message);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = {};
            try {
                for (const category of categories) {
                    const response = await axios.get(`https://backend.cenchh.com/api/product/getAll/${category.id}`);
                    if (response?.data?.status === 'success') {
                        fetchedProducts[category?.id] = response?.data?.data;
                    }
                }
                setProducts(fetchedProducts);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (categories.length > 0) {
            fetchProducts();
        }
    }, [categories]);

    return (
        <ApiContext.Provider value={{ categories, products, loading, error }}>
            {children}
        </ApiContext.Provider>
    );
};


ApiProvider.propTypes = {
    children: PropTypes.any,
};

export const useApiContext = () => {
    return useContext(ApiContext);
};
