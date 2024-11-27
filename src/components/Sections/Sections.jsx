
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

function Sections() {
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
    console.log(products);

    if (error) return <p>Error: {error}</p>;

    return (
        <React.Fragment>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {categories?.map((category) => (
                        <section key={category?.id} className="mb-16">
                            <h2 className="text-center my-3 text-xl font-semibold tracking-wider">
                                {category.name}
                            </h2>
                            <div className="mx-auto w-full flex justify-center">
                                <Link
                                    to={`/category/${category?.id}`}
                                    className="text-black w-[8rem] ms-2 text-[0.9rem] px-1 py-1 my-2 -skew-x-[15deg] border border-gray-600 tracking-widest text-center"
                                >
                                    VIEW ALL

                                </Link>
                            </div>

                            <div className="flex flex-wrap justify-center items-center">
                                {products[category?.id]?.slice(0, 4).map((product) => (
                                    <div
                                        key={product?.id}
                                        className="xl:w-[25%] lg:w-[30%] md:w-[50%] w-[80%] p-5"
                                    >
                                        <Link to={`/product/${product.id}/${category?.id}`} state={{ product }}>
                                            <div className="relative group m-3 overflow-hidden">
                                                <img
                                                    className="w-full object-contain"
                                                    src={product?.imag}
                                                    alt={product?.name}
                                                />
                                                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                                                <div className="absolute inset-x-0 top-100 group-hover:top-0 flex flex-col justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                                                    <div className='flex flex-wrap'>
                                                        {product.stock.map((size) => (
                                                            <span
                                                                key={size.size_id}
                                                                className="bg-white w-fit text-gray-800 px-4 py-2 m-2 rounded-md shadow-lg hover:bg-gray-200 transition-all"
                                                            >
                                                                size :: {size.size}
                                                            </span>
                                                        ))}
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="px-2 mt-2">
                                                <div className="flex justify-between mt-4 mx-auto text-center">
                                                    <p className="text-center text-gray-800 text-base font-normal">
                                                        {product?.name}
                                                    </p>
                                                    <span className="text-gray-800 text-base tracking-widest">
                                                        LE {product?.price}
                                                    </span>
                                                </div>

                                                <p className="text-gray-600 text-base mx-auto mt-3 tracking-[2.7px]">
                                                    {product.details}
                                                </p>

                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </>
            )}
        </React.Fragment>
    );
}
export default Sections;