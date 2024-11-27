// import React from 'react'

import SvgContect from "../../Svg/SvgContect"

function ContectThere() {
    return (

        <div className="container flex justify-between flex-wrap mx-auto items-center">
            <div className="lg:w-1/2 md:w-[40%] mx-auto py-9">
                <SvgContect />
            </div>

            <form className=" lg:w-1/2 md:w-[40%] mx-auto p-5">
                <h1 className="text-gray-700 text-2xl font-bold text-center mb-4">Talk to Us</h1>

                {/* Name */}
                <div className="relative mb-4">
                    <label htmlFor="formName" className="absolute left-3 top-3">
                        <i className="feather feather-user" />
                    </label>
                    <input
                        type="text"
                        id="formName"
                        className="pl-10 p-3 w-full border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
                        placeholder="Name"
                    />
                </div>

                {/* Numbar */}
                <div className="relative mb-4">
                    <label htmlFor="formName" className="absolute left-3 top-3">
                        <i className="feather feather-user" />
                    </label>
                    <input
                        type="number"
                        id="formName"
                        className="pl-10 p-3 w-full border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
                        placeholder="Number"
                    />
                </div>

                {/* E-mail */}
                <div className="relative mb-4">
                    <label htmlFor="formEmail" className="absolute left-3 top-3">
                        <i className="feather feather-mail" />
                    </label>
                    <input
                        type="email"
                        id="formEmail"
                        className="pl-10 p-3 w-full border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
                        placeholder="E-mail"
                    />
                </div>

                {/* Message */}
                <div className="mb-4">
                    <textarea
                        id="formMessage"
                        className="p-3 w-full border border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
                        rows={7}
                        placeholder="Message"
                    />
                </div>

                {/* Submit btn */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Send message
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ContectThere