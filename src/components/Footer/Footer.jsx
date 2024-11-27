import React, { useEffect, useState } from "react";
import footer from "../../assets/image/footer.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer() {
  const [categories, setCategories] = useState([]);
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
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <React.Fragment>
      <footer className="bg-[#727071] -mt-10">
        <div className="flex w-[90%] justify-between mx-auto py-10 flex-wrap">
          <div className="md:w[30%] ">
            <img className="w-1/4" src={footer} alt="" />
          </div>
          <div className="md:w[30%] ">
            <ul>
              <li className="pb-3 tracking-[0.2rem] text-white text-[10px] uppercase font-bold my-1">Main menu</li>
              {categories.map((category) => (
                <li key={category?.id} className="text-white text-[11px] uppercase font-bold my-[0.30rem] ">
                  <Link className="cursor-pointer px-4 tracking-[0.2rem]"
                    to={`/category/${category?.id}`}>
                    {category?.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
          <div className="md:w[30%] ">
            <div className="">
              <p className="text-white text-[11px] uppercase m-5 font-bold my-[0.30rem] mb-4">cench.in</p>
              <p className="text-white text-[11px] uppercase m-5 font-bold my-[0.30rem] tracking-widest">
              A store and website that sells clothes with 
                <p className="mb-1"></p>
                the latest fashion trends and the best quality
              </p>

              <div className="ms-4 mt-8">
                <a href="https://www.instagram.com/cench.in/?igsh=dmY4OWFyMGIzZ2Jk" target="_blank" rel="noopener noreferrer">
                  <i className="text-white mx-2 text-xl fa-brands fa-instagram"></i>
                </a>
                <a href="http://www.tiktok.com/@cench.in" target="_blank" rel="noopener noreferrer">
                  <i className="text-white mx-2 text-xl fa-brands fa-tiktok"></i>
                </a>
                <a href="https://wa.me/201097184660" target="_blank" rel="noopener noreferrer">
                  <i className="text-white mx-2 text-xl fa-brands fa-brands fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white text-[12px] pb-10 font-bold tracking-widest">© 2024 cench.in</p>
      </footer>
    </React.Fragment>
  );
}