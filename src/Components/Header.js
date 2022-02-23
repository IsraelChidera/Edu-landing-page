import React from 'react';
import Navbar from './Navbar';
import headerImg from '../Assets/header.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Header() {
    AOS.init();
    return (
        <header 
            className="mb-16 bg-blend-color-dodge bg-hero-img  
             rounded-bl-xx "
        > 
            < Navbar />
            
            <section className="w-100 max-w-5xl xl:flex justify-around mt-16 mb-0 mr-auto ml-auto">
                <div className="mt-20 xl:pr-2">
                    <div>
                        <div                             
                            className="xl:p-0 p-6"
                        > 
                            <p className="xl:text-5xl text-4xl leading-tight text-white capitalize font-bold">
                                Take your learning to the next level.
                            </p>
                            <p 
                                className="xl:mb-6 xl:text-sm leading-snug mt-4 text-gray-100"
                            >
                                Gain critical student insights when assessing while
                                relieving teachers from the pains of grading. Simply add
                                Master Edu to your learning platform.
                            </p>
                        </div>

                        <div className="flex items-center">
                            <div className="xl:p-0 p-6">
                                <a 
                                    className="
                                        transition duration-300 ease-in
                                        bg-pink-900
                                        hover:bg-blue-500
                                        xl:mr-4 text-white xl:text-sm rounded-md pt-3 pr-3.5 pb-3 pl-3.5"
                                    href="#"
                                >
                                    Request Demo
                                </a>
                            </div>

                            <div className="bg-gray-50 rounded-full">
                                <i className="
                                        hover:text-red-900 hover:border-red-900 hover:border-2
                                        inline-block p-2 fas fa-1.5x fa-play
                                        fa-spin fa-border border-blue-600 rounded-full"
                                ></i>
                            </div>

                            <div className="xl:ml-4 ml-2 text-sm underline hover:no-underline text-white items-center">
                                <a 
                                    href="#"
                                >
                                    What's M.Edu?
                                </a>
                            </div>
                        </div>

                        <div className="p-6 xl:mt-16 xl:mr-8 xl:ml-0 xl:mb-8 xl:flex max-w-md mx-auto ">
                            <div className="bg-gray-50 xl:mb-0 xl:mt-0 xl:mr-auto xl:ml-auto 
                                border-2 
                                rounded-lg xl:p-6 p-6 xl:w-32 text-center border-indigo-400 m-6"
                            >
                                <div className="bg-green-500 p-2 block rounded-full xl:mb-2">
                                    <i className="fas text-white fa-school"></i>
                                </div>
                                <p className="text-green-500 font-bold text-lg">16,032</p>
                                <p>Schools</p>
                            </div>

                            <div className="bg-gray-50 xl:p-6 p-6 border-2 rounded-lg m-6 
                                 xl:w-32
                                xl:mb-0 xl:mt-0 xl:mr-6 xl:ml-6 text-center border-indigo-400"
                            >
                                <div className="bg-red-400 p-2 rounded-full mb-2">
                                    <i className="fa fa-users text-white" aria-hidden="true"></i>
                                </div>
                                <p className="text-red-400 font-bold text-lg">10M</p>
                                <p>Users</p>
                            </div>

                            <div className="bg-gray-50 xl:p-6 p-6 border-2 rounded-lg m-6
                                text-center xl:w-32
                                xl:mb-0 xl:mt-0 xl:mr-auto xl:ml-auto border-indigo-400"
                            >
                                <div className="bg-indigo-500 p-2 rounded-full mb-2">
                                    <i className="fas text-white fa-globe"></i>
                                </div>
                                <p className="text-indigo-500 font-bold text-lg">119</p>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden xl:ml-24 xl:flex xl:justify-center xl:items-center">
                    <img 
                        src={headerImg}
                    />
                </div>
            </section>
        </header>
    )
}

export default Header
