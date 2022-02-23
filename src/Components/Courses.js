import React from 'react';
import course1 from '../Assets/course-1.png';
import course2 from '../Assets/course-2.png';
import course3 from '../Assets/course-3.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Courses() {
    AOS.init();
    return (
        <>
            <section id="courses" className="mt-32">
                <div 
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                    className="text-center"
                >
                    <p 
                        className="font-bold text-4xl xl:px-0 px-6 text-blue-900"
                    >
                        Our Popular Courses
                    </p>
                    <p className="text-sm mt-2 xl:px-0 px-10 text-grey-100">
                        Discover some of the many benefits you will enjoy
                        when you add us to your online learning platform
                    </p>
                </div>
  
                <div className="xl:flex m-8 xl:mt-22 xl:mb-0 xl:mr-auto xl:ml-auto xl:max-w-4xl max-w-md mx-auto ">
                    <div 
                        data-aos="zoom-in-right"
                        data-aos-duration="1500"
                        className="rounded-xl xl:mr-6 mt-8 xl:mt-0 bg-white 
                        border-t-2 border-b-2 border-blue-600 xl:ml-0 mx-6"
                    >
                        <div className="p-1">
                            <img
                                className="rounded-xl transform transition hover:scale-95 w-full
                                    xl:mr-auto xl:ml-auto xl:mt-0 xl:mb-0 mr-auto ml-auto mt-0 mb-0" 
                                src={course1}
                            />
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between">
                                <p className="bg-gray-300 text-xs font-bold text-blue-800 p-0.5">
                                    English Department
                                </p>
                                <p className="bg-blue-800 p-1 text-xs rounded-full">
                                    <i className="text-yellow-300 fas fa-star pr-3"></i>
                                    <span className="text-white">
                                        4.9
                                    </span>
                                </p>
                            </div>

                            <div className="pt-4">
                                <p className="font-semibold text-gray-800 text-base">
                                    Master English: How To Improve Your
                                    English Speaking
                                </p>
                            </div>

                            <div className="pt-4">
                                <div className="flex justify-between">
                                    <p>
                                        <i className="inline-block p-2 fas text-xs fa-play fa-border border-blue-600 cursor-pointer hover:text-red-900 hover:border-red-900  rounded-full"></i>
                                        <span className="text-xs font-bold pl-1 cursor-pointer  hover:text-gray-700 text-gray-500">10x Lesson</span>
                                    </p>
                                    <p>
                                        <i className="inline-block p-2 fas text-xs fa-play fa-border border-blue-600 cursor-pointer hover:text-red-900 hover:border-red-900  rounded-full"></i>
                                        <span className="text-xs font-bold pl-1 cursor-pointer  hover:text-gray-700 text-gray-500">Online Lesson</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div                         
                        className="rounded-xl xl:mr-6 mt-8 xl:mt-0 xl:ml-0 mx-6 bg-white border-t-2 border-b-2 border-blue-600"
                    >
                        <div className="p-1">
                            <img
                                className="rounded-xl transform transition hover:scale-95 
                                    xl:mr-auto xl:ml-auto xl:mt-0 xl:mb-0 w-full" 
                                src={course2}
                            />
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between">
                                <p className="bg-gray-300 text-xs font-bold text-blue-800 p-0.5">
                                    English Department
                                </p>
                                <p className="bg-blue-800 p-1 text-xs rounded-full">
                                    <i className="text-yellow-300 fas fa-star pr-3"></i>
                                    <span className="text-white">
                                        4.9
                                    </span>
                                </p>
                            </div>

                            <div className="pt-4">
                                <p className="font-semibold text-gray-800 text-base">
                                    Master English: How To Improve Your
                                    English Speaking
                                </p>
                            </div>

                            <div className="pt-4">
                                <div className="flex justify-between">
                                    <p>
                                        <i className="inline-block p-2 fas text-xs fa-play fa-border border-blue-600 cursor-pointer hover:text-red-900 hover:border-red-900  rounded-full"></i>
                                        <span className="text-xs font-bold pl-1 cursor-pointer  hover:text-gray-700 text-gray-500">10x Lesson</span>
                                    </p>
                                    <p>
                                        <i className="inline-block p-2 fas text-xs fa-play fa-border border-blue-600 cursor-pointer hover:text-red-900 hover:border-red-900  rounded-full"></i>
                                        <span className="text-xs font-bold pl-1 cursor-pointer  hover:text-gray-700 text-gray-500">Online Lesson</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div
                        data-aos="zoom-in-left" 
                        data-aos-duration="1500"
                        className="rounded-xl mt-8 xl:mt-0 xl:mr-6 xl:ml-0 mx-6 
                        bg-white border-t-2 border-b-2 border-blue-600"
                    >
                        <div className="p-1">
                            <img
                                className="rounded-xl transform transition hover:scale-95
                                    xl:mr-auto xl:ml-auto xl:mt-0 xl:mb-0 w-full" 
                                src={course3}
                            />
                        </div>

                        <div className="p-4">
                            <div className="flex justify-between">
                                <p className="bg-gray-300 text-xs font-bold text-blue-800 p-0.5">
                                    English Department
                                </p>
                                <p className="bg-blue-800 p-1 text-xs rounded-full">
                                    <i className="text-yellow-300 fas fa-star pr-3"></i>
                                    <span className="text-white">
                                        4.9
                                    </span>
                                </p>
                            </div>

                            <div className="pt-4">
                                <p className="font-semibold text-gray-800 text-base">
                                    Master English: How To Improve Your
                                    English Speaking
                                </p>
                            </div>

                            <div className="pt-4">
                                <div className="flex justify-between">
                                    <p>
                                        <i className="inline-block p-2 fas text-xs fa-play fa-border hover:text-red-900 hover:border-red-900 border-blue-600 rounded-full"></i>
                                        <span className="text-xs font-bold pl-1 cursor-pointer hover:text-gray-700 text-gray-500">10x Lesson</span>
                                    </p>
                                    <p>
                                        <i className="inline-block p-2 fas text-xs fa-play fa-border hover:text-red-900 hover:border-red-900  border-blue-600 rounded-full"></i>
                                        <span className="text-xs font-bold pl-1 cursor-pointer hover:text-gray-700 text-gray-500">Online Lesson</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Courses;
