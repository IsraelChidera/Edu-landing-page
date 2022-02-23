import React from 'react';
import first from '../Assets/6.png';
import second from '../Assets/7.png';
import third from '../Assets/8.png';
import fourth from '../Assets/9.png';
import fifth from '../Assets/10.png';
import sixth from '../Assets/11.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Innovations() {
    AOS.init();
    return (
        <>
            <section id="innovation" className="mt-32 mb-0 mr-auto ml-auto max-w-4xl">
                <div>
                    <div>
                        <p 
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            className="text-4xl text-blue-900 font-bold text-center">
                            Our Innovations
                        </p>

                        <p 
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            className="text-center text-gray-500 p-6 text-lg xl:text-sm xl:pr-16 xl:pl-16 xl:pt-2"
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Velit quis dolorem a placeat accusantium dicta dolor animi
                            exercitationem ullam maiores aliquam pariatur, rerum alias provident voluptatem
                            impedit et distinctio consequatur.
                        </p>

                        <div 
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="2000"
                            className=" mt-2 xl:grid xl:grid-cols-3 xl:gap-6 xl:max-w-4xl max-w-md mx-auto"
                        >
                            <div className="rounded-xl mt-12 xl:mr-0 xl:ml-0 mr-4 ml-4 bg-white">
                                <div className="p-6">
                                    <div>
                                        <img 
                                            className="transform transition hover:scale-105 rounded-xl w-full"
                                            src={first} 
                                        />
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="text-gray-900 font-bold">
                                            News Feed
                                        </p>
                                        <div className="mt-4">
                                            <a 
                                                className="transition duration-500 ease-in-out bg-blue-900 hover:bg-indigo-500 hover:text-white inline text-sm border-2 text-white font-bold rounded-md pt-2 pr-5 pb-2 pl-5" 
                                                href="#"
                                            >
                                                Subscribe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl mt-12 xl:mr-0 xl:ml-0 mr-4 ml-4 bg-white">
                                <div className="p-6">
                                    <div>
                                        <img
                                            className="transform transition hover:scale-105 rounded-xl"
                                            src={second}
                                        />
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="text-gray-900 font-bold">Real-Time Intelligence</p>
                                        <div className="mt-4">
                                            <a 
                                                className="transition duration-500 ease-in-out bg-blue-900 hover:bg-indigo-500 hover:text-white inline text-sm border-2 text-white font-bold rounded-md pt-2 pr-5 pb-2 pl-5" 
                                                href="#"
                                            >
                                                Subscribe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl mt-12 xl:mr-0 xl:ml-0 mr-4 ml-4 bg-white">
                                <div className="p-6">
                                    <div>
                                        <img 
                                            className="transform transition w-full hover:scale-105 rounded-xl"
                                            src={third}
                                        />
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="text-gray-900 font-bold">Student Centered</p>
                                        <div className="mt-4">
                                            <a 
                                                className="transition duration-500 ease-in-out bg-blue-900 hover:bg-indigo-500 hover:text-white inline text-sm border-2 text-white font-bold rounded-md pt-2 pr-5 pb-2 pl-5" 
                                                href="#"
                                            >
                                                Subscribe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl mt-12 xl:mr-0 xl:ml-0 mr-4 ml-4 bg-white">
                                <div className="p-6">
                                    <div>
                                        <img 
                                            className="transform transition w-full hover:scale-105 rounded-xl"
                                            src={fourth}
                                        />
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="text-gray-900 font-bold">Mastery Focused</p>
                                        <div className="mt-4">
                                            <a 
                                                className="transition duration-500 ease-in-out bg-blue-900 hover:bg-indigo-500 hover:text-white inline text-sm border-2 text-white font-bold rounded-md pt-2 pr-5 pb-2 pl-5" 
                                                href="#"
                                            >
                                                Subscribe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl mt-12 xl:mr-0 xl:ml-0 mr-4 ml-4 bg-white">
                                <div className="p-6">
                                    <div>
                                        <img 
                                            className="transform transition hover:scale-105 rounded-xl"
                                            src={fifth}
                                        />
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="text-gray-900 font-bold">Any Platform</p>
                                        <div className="mt-4">
                                            <a 
                                                className="transition duration-500 ease-in-out bg-blue-900 hover:bg-indigo-500 hover:text-white inline text-sm border-2 text-white font-bold rounded-md pt-2 pr-5 pb-2 pl-5" 
                                                href="#"
                                            >
                                                Subscribe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl mt-12 xl:mr-0 xl:ml-0 mr-4 ml-4 bg-white">
                                <div className="p-6">
                                    <div>
                                        <img 
                                            className="transform transition hover:scale-105 rounded-xl"
                                            src={sixth}
                                        />
                                    </div>

                                    <div className="text-center mt-4">
                                        <p className="text-gray-900 font-bold">Mastery Focused</p>
                                        <div className="mt-4">
                                            <a 
                                                className="transition duration-500 ease-in-out bg-blue-900 hover:bg-indigo-500 hover:text-white inline text-sm border-2 text-white font-bold rounded-md pt-2 pr-5 pb-2 pl-5" 
                                                href="#"
                                            >
                                                Subscribe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Innovations
