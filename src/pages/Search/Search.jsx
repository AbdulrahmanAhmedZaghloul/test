import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
    const [categories, setCategories] = useState([]); 
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(""); 

    // Fetch categories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://backend.cenchh.com/api/category/getAll");
                if (response.data.status === "success") {
                    setCategories(response.data.data);
                } else {
                    throw new Error("Failed to fetch categories");
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchCategories();
    }, []);

    // Fetch products when a category is selected
    const fetchProductsByCategory = async (categoryName) => {
        const selected = categories.find((cat) => cat.name === categoryName); // البحث عن الفئة
        if (!selected) return;

        try {
            const response = await axios.get(`https://backend.cenchh.com/api/product/getAll`);
            if (response.data.status === "success") {
                // تصفية المنتجات حسب الفئة المختارة
                const filteredProducts = response.data.data.filter(
                    (product) => product.category_name === categoryName
                );
                setProducts(filteredProducts);
            } else {
                throw new Error("Failed to fetch products");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const handleInputChange = (event) => {
        const categoryName = event.target.value;
        setSelectedCategory(categoryName);
        fetchProductsByCategory(categoryName); // استدعاء API المنتجات
    };

    const getCategoryIdByName = (categoryName) => {
        const category = categories.find((cat) => cat.name === categoryName);
        return category ? category.id : null;
    };

    return (
        <React.Fragment>
        <div className="mt-64 mb-10 pb-20 text-center">
            <div className="flex justify-center">
                <input
                    type="text"
                    list="categories"
                    value={selectedCategory}
                    onChange={handleInputChange}
                    placeholder="Select a category..."
                    className="border border-gray-400 rounded-md px-4 py-2 w-full max-w-[400px]"
                />
                <datalist id="categories">
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </datalist>
            </div>
            {error && <p className="text-red-500 mt-4">Error: {error}</p>}
            <div className="mt-8 ">
                {products.length > 0 ? (
                    <div className=" container mx-auto">
                        <div
                            className="flex flex- items-center"
                        >
                            {products.map((product) => {
                                const categoryId = getCategoryIdByName(product.category_name);
                                return (
                                    <>
                                        <div
                                            key={product?.id}
                                            className="xl:w-[25%] lg:w-[30%] md:w-[50%] w-[80%] p-5"
                                        >
                                            <Link className='' to={`/product/${product.id}/${categoryId}`} state={{ product }}>
                                                <div className="relative border group m-3 overflow-hidden">
                                                    {/* الصورة الرئيسية التي تظهر افتراضياً */}
                                                    <img
                                                        className="w-full object-contain"
                                                        src={product?.imag}
                                                        alt={product?.category_name}
                                                    />
                                                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                                                        {product.images?.slice(0, 1).map((imgs) => (

                                                            <div key={imgs.url} className="flex object-contain bg-white w-full justify-center items-center h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                <img
                                                                    className="w-full object-contain mx-2"
                                                                    src={imgs.url}
                                                                    alt={product?.category_name}
                                                                />
                                                            </div>
                                                        ))}

                                                    </div>
                                                    <div className="absolute inset-x-0 top-100 group-hover:top-0 flex flex-wrap justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                                                        {product.stock.map((size) => (
                                                            <span
                                                                key={size.size_id}
                                                                className="bg-white  w-fit text-gray-800 px-4 py-2 m-2 rounded-md shadow-lg hover:bg-gray-200 transition-all"
                                                            >
                                                                size :: {size.size}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="px-2 mt-2 ">
                                                    <div className="flex justify-between mt-4 mx-auto text-center">
                                                        <p className="text-center text-gray-800 text-base font-normal">
                                                            {product?.category_name}
                                                        </p>
                                                        <span className="text-gray-800 text-base tracking-widest">
                                                            LE {product?.price}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 break-words whitespace-normal text-base mx-auto mt-3 tracking-[2.7px]">
                                                        {product.details}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    selectedCategory && <p className="text-pink-600 mt-4">No products found for this category.</p>
                )}
            </div>
        </div>
    </React.Fragment>
    );
}

export default Search;