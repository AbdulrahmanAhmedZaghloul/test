import React from "react";
import footer from "../../assets/image/footer.png";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="bg-[#727071] -mt-10">
        <div className="flex w-[90%] justify-between mx-auto py-10 flex-wrap">
          <div className="md:w[30%] ">
            <img className="w-full" src={footer} alt="" />
          </div>
          <div className="md:w[30%] ">
            <ul>
              <li className="pb-3 tracking-[0.2rem] text-white text-[10px] uppercase font-bold my-1">Main menu</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">HOME</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">OVERSIZED T-SHIRTS</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">SHORTS</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">SUMMER SWEATPANTS</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">CARGOS</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">Hoodies</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">Crewnecks</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">Jackets</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">WINTER SWEATPANTS</li>
              <li className="text-white text-[11px] uppercase font-bold my-[0.30rem]">SOCKS</li>
            </ul>
          </div>
          <div className="md:w[30%] ">
            <div className="">
              <p className="text-white text-[11px] uppercase m-5 font-bold my-[0.30rem] mb-4"> SUBSCRIBE To our newsletter</p>
              <p className="text-white text-[11px] uppercase m-5 font-bold my-[0.30rem]">
                Be the first to know about our newest arrivals,
                special offers
                <br />
                and store events near you!
              </p>
              <div className="relative">
                <input className="text-white relative bg-transparent border-b w-3/4 m-7" type="email" placeholder="Enter Your email" />
                <i className="absolute right-[20%] bottom-5 focus:outline-none  text-xl p-2 text-white fa-regular fa-envelope"></i>
              </div>
              <div className="ms-4">
                <i className="text-white mx-2 text-xl fa-brands fa-facebook"></i>
                <i className="text-white mx-2 text-xl fa-brands fa-instagram"></i>
                <i className="text-white mx-2 text-xl fa-brands fa-x-twitter"></i>
                <i className="text-white mx-2 text-xl fa-brands fa-whatsapp"></i>
                <i className="text-white mx-2 text-xl fa-brands fa-linkedin"></i>
              </div>
            </div>

          </div>
        </div>
        <p className="text-center text-white text-[12px] pb-10 font-bold tracking-widest">© 2024 Blackedition</p>
      </footer>
    </React.Fragment>
  );
}
