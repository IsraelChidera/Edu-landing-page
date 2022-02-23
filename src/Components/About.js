import React from 'react';
import header2 from '../Assets/header2.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function About() {
    AOS.init();
    return (
        <>
            <section id="about">
                <div className="xl:flex mt-16 xl:mt-32 xl:mb-0 xl:mr-auto xl:ml-auto xl:max-w-4xl">
                    <div 
                        data-aos="flip-left"
                        data-aos-duration="2000"
                        className="flex p-4 xl:p-2 flex-col text-center justify-center"
                    >
                        <p className="font-bold text-4xl mb-6 text-blue-900">Become an instructor</p>
                        <p className="xl:text-sm text-gray-500">
                            Despite going online, it remains excessively manual,
                            wastes countless teacher hours and hasn't improved student
                            writing skills since 1998
                        </p>

                        <p className="mb-8 mt-4 xl:text-sm text-gray-500">
                            Despite going online, it remains excessively manual,
                            wastes countless teacher hours and hasn't improved student
                        </p>

                        <div>
                            <a 
                                className="transition duration-500 ease-in-out bg-transparent hover:bg-blue-900 hover:text-white inline text-sm border-2 border-blue-900 text-grey-800 font-bold rounded-md pt-3 pr-3.5 pb-3 pl-3.5" 
                                href="#"
                            >
                                Click Here to Apply
                            </a>
                        </div>

                    </div>

                    <div 
                        data-aos="flip-right"
                        data-aos-duration="2000"
                        className=" max-w-md mx-auto m-8 xl:ml-4"
                    >
                        <img
                            className="rounded xl:px-0 px-6" 
                            src={header2} 
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
