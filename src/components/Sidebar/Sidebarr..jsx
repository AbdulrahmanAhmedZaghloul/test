import React, { useState, useEffect } from 'react';

function Sidebarr() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [colorItems, setColorItems] = useState([]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Function to generate random colors without any fixed colors
    const generateRandomColors = () => {
        const colors = [];
        for (let i = 0; i < 5; i++) { // Generate 5 random colors
            let red = Math.round(Math.random() * 255);
            let green = Math.round(Math.random() * 255);
            let blue = Math.round(Math.random() * 255);
            colors.push(`rgb(${red},${green},${blue})`);
        }
        setColorItems(colors);
    };

    useEffect(() => {
        generateRandomColors();
        // Load saved color from localStorage
        const savedColor = localStorage.getItem('selectedColor');
        if (savedColor) {
            changeColor(savedColor);
        }
    }, []);

    const changeColor = (color) => {
        document.querySelectorAll('*').forEach((element) => {
            element.style.color = color;
        });
        // Save selected color to localStorage
        localStorage.setItem('selectedColor', color);
    };

    return (
        <React.Fragment>
            <div className="relative">
                {/* Sidebar */}
                <div
                    id="sideBar"
                    className={`fixed top-1/3 right-0 lg:w-[15%] z-[4] transition-all duration-1000 ease-in-out bg-gray-900 text-white ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    style={{ right: isSidebarOpen ? '0' : '-100%' }}
                >
                    <div id="colorBox" className="p-4">
                        <h4 className="pb-3">Choose Your Color:</h4>
                        <div className="flex space-x-2">
                            {colorItems.map((color, index) => (
                                <div
                                    key={index}
                                    className="color-item w-6 h-6 cursor-pointer"
                                    style={{ backgroundColor: color }}
                                    onClick={() => changeColor(color)}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar Toggle Button */}
                <i
                    id="sideBarToggle"
                    className={`z-[12134] fa fa-cog fa-spin text-brown-500 text-3xl cursor-pointer fixed top-1/3 transition-all duration-1000 ease-in-out ${isSidebarOpen ? 'right-56' : 'right-4'}`}
                    onClick={toggleSidebar}
                ></i>
            </div>
        </React.Fragment>
    );
};

export default Sidebarr;
