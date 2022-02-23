import React from 'react';
import pop from '../Assets/pop.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Platform() {
    AOS.init();
    return (
        <>
            <section 
                
                id="platform" 
                className="xl:flex mt-32 xl:mb-0 xl:mr-auto xl:ml-auto xl:max-w-4xl max-w-md mx-auto "
            >
                <div 
                    data-aos="fade-right" 
                    className="xl:mr-0 xl:w-9/12 xl:ml-0 xl:mt-0 xl:mb-0 mr-auto ml-auto mt-0 mb-0 p-2 xl:p-0"
                >
                    <img 
                        src={pop}
                        alt="l" 
                        className=""
                    />
                </div>

                <div className="xl:mt-8">
                    <p 
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        className="font-bold text-center xl:text-left text-4xl text-indigo-900"
                    >
                        Benefit from our online learning
                    </p>

                    <div
                        data-aos="fade-left" 
                        data-aos-delay="50"
                        className="mt-8"
                    >
                        <div className="xl:flex">
                            <div className="xl:mr-6 xl:ml-0 xl:mt-0 xl:mb-0 mr-12 ml-12 xl:block flex justify-center bg-green-500 p-2 rounded-full">
                                <i className="fas hover:transform rotate-45 xl:fa-2x text-white fa-book-reader"></i>
                            </div>
                            <div className="xl:text-left text-center xl:pt-0 pt-4">
                                <p className="text-lg font-bold mb-2">Online degrees</p>
                                <p className="xl:text-sm">
                                    On the other hand, we denounce with righteous
                                    indignation and dislike men who are so
                                </p>
                            </div>
                        </div>

                        <div className="xl:flex xl:mt-7 mt-9">
                            <div className="xl:mr-6 xl:block bg-red-400 xl:ml-0 xl:mt-0 xl:mb-0 mr-12 ml-12 flex justify-center pt-3 pr-2 pl-2 pb-2 rounded-full">
                                <i className="fas xl:fa-2x text-white fa-photo-video"></i>
                            </div>
                            <div className="xl:text-left text-center xl:pt-0 pt-4">
                                <p className="text-lg font-bold mb-2">Short courses</p>
                                <p className="xl:text-sm">
                                    On the other hand, we denounce with righteous
                                    indignation and dislike men who are so
                                </p>
                            </div>
                        </div>

                        <div className="xl:flex mt-7">
                            <div className="xl:mr-6 xl:block xl:ml-0 xl:mt-0 xl:mb-0 mr-12 ml-12 flex justify-center bg-indigo-500 pt-3 pr-2 pl-2 pb-2 rounded-full">
                                <i className="fas xl:fa-2x text-white fa-people-arrows"></i>
                            </div>
                            <div className="xl:text-left text-center xl:pt-0 pt-4">
                                <p className="text-lg font-bold mb-2">Learn with experts</p>
                                <p className="xl:text-sm">
                                    On the other hand, we denounce with righteous
                                    indignation and dislike men who are so
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Platform
