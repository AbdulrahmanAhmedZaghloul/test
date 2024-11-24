
import React, { useState, useEffect } from "react";
import ShortS from "../Sections/ShortS/ShortS";
import Undershirt from "../Sections/Undershirt/Undershirt";
import Tshirts from "../Sections/Tshirts/Tshirts";
import Hoodies from "../Sections/Hoodies/Hoodies";
import Edition from "../Edition/Edition";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import { Helmet } from "react-helmet-async";
import Socks from "../Sections/Socks/Socks";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // تعيين مدة التحميل لمدّة 2 ثانية

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <Header />
      {loading ? (
        <Loading />
      ) : (<>

        <div className="mx-auto mt-8 pt-5 pb-8">
          <div className="mx-auto mt-8 pt-5 pb-8">
            <Hoodies />
          </div>
          <div className="mx-auto mt-8 pt-5 pb-8">
            <Tshirts />
          </div>
          <div className="mx-auto mt-8 pt-5 pb-8">
            <ShortS />
          </div>
          
          <div className="mx-auto mt-8 pt-5 pb-8">
            <Socks />
          </div>
          <div className="mx-auto mt-8 pt-5 pb-8">
            <Undershirt />
          </div>
          <div className="mx-auto mt-8 pt-5">
            <Edition />
          </div>
        </div>
      </>
      )}
    </React.Fragment>
  );
}
