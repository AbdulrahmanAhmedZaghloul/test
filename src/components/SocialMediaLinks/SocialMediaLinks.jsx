import React, { useState } from "react";

function SocialMediaLinks() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <div className="fixed bottom-10 right-10 z-50">
                <button
                    onClick={toggleMenu}
                    className="relative w-11 h-11 bg-pink-500 text-white rounded-full shadow-lg flex justify-center items-center hover:bg-pink-600 focus:outline-none"
                >
                    <div className="absolute inset-0 w-full h-full rounded-full bg-pink-400 opacity-50 animate-ping"></div>
                    <i className={`fa-solid ${isOpen ? "fa-solid fa-link" : "fa-solid fa-link"} text-xl z-10`}></i>
                </button>

                {isOpen && (
                    <div className="absolute -top-40 left-[0px] flex flex-col items-center space-y-3">
                        <a
                            href="https://www.instagram.com/cench.in/?igsh=dmY4OWFyMGIzZ2Jk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-10 h-10 bg-pink-500 rounded-full shadow-md flex justify-center items-center hover:bg-pink-600"
                        >
                                 <i className="fa-brands fa-instagram text-white text-lg z-10"></i>
                        </a>

                        <a
                            href="http://www.tiktok.com/@cench.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-10 h-10 bg-black rounded-full shadow-md flex justify-center items-center hover:bg-pink-600"
                        >
                            <i className="fa-brands fa-tiktok text-white text-lg z-10"></i>
                        </a>

                        <a
                            href="https://wa.me/201097184660"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-10 h-10 bg-green-500 rounded-full shadow-md flex justify-center items-center hover:bg-pink-600"
                        >
                             <i className="fa-brands fa-whatsapp text-white text-lg z-10"></i>
                        </a>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

export default SocialMediaLinks;