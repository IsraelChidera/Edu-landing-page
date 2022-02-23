import React from 'react';
import TestimonialImg from '../Assets/testimonials.png';
import TestimonialImg2 from '../Assets/testimonials2.png';
import user from '../Assets/user.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Testimonials() {
    AOS.init();
    return (
        <>
            <section id="resources">
                <div className="mt-32 mb-0 mr-auto ml-auto max-w-4xl">
                    <div 
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="text-center"
                    >
                        <p className="text-3xl text-current font-bold">
                            Student Testimonials
                        </p>
                        <p className="text-gray-500 text-base pr-8 pl-8 xl:text-sm xl:pr-16 xl:pl-16 xl:pt-2">
                            Discover some of the many benefits you will
                            enjoy when you add us to your online learning
                            platform
                        </p>
                    </div>

                    <div className="xl:flex mt-8 mx-auto">
                        <div 
                            data-aos="fade-left"
                            data-aos-duration="3000"
                            className="p-4 xl:p-0"
                        >
                            <img
                                className="" 
                                src={TestimonialImg}
                            />
                        </div>

                        <div className="p-4">
                            <div>
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ullam perferendis ad officiis iusto voluptatem veniam 
                                    sit natus aut commodi harum delectus vel asperiores facere 
                                    reprehenderit nam deserunt sapiente, facilis ipsam?
                                </p>
                                <div className="mt-8 text-center flex justify-center">
                                    <img
                                        className="w-8 rounded-full" 
                                        src={user} 
                                    />
                                </div>
                                
                                <div className="text-center">
                                    <p className="text-current font-bold">
                                        Jane Doe
                                    </p>
                                    <p className="text-gray-500 xl:text-sm text-lg">
                                        Student
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div 
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            className="p-4 xl:p-0"
                        >
                            <img
                                className="" 
                                src={TestimonialImg2} 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials
