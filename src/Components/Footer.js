import React from 'react'

function Footer() {
    return (
        <>
            <section className="bg-gray-900 rounded-tl-xx rounded-tr-xx">
                <div className="mt-32 mb-0 mr-auto ml-auto xl:max-w-5xl">
                    <div className="bg-white border-t-2 border-blue-600 
                        rounded-r-xxl rounded-l-xxl m-6 shadow-2xl "
                    >
                        <div className="text-center xl:p-20 p-8">
                            <p className="text-3xl text-current font-bold">
                                Get In Touch
                            </p>
                            <p className="text-gray-500 xl:text-sm">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Distinctio soluta beatae unde adipisci, quisquam cumque!
                            </p>
                            <div className="mt-4 max-w-md mx-auto">
                                <form className="space-y-4">
                                    
                                    <div>
                                        <input type="email" 
                                            id="mail" 
                                            className="border-2 border-grey-200 pl-2 pr-8 py-2 w-full 
                                                text-center rounded text-sm outline-none focus:border-blue-500 focus:bg-blue-100" 
                                            placeholder="Enter your email here"
                                        />
                                    </div>

                                    <button className="block bg-blue-400 hover:shadow-2xl hover:bg-blue-500 w-full transition duration-300 rounded p-2 font-bold text-white">
                                        Subscribe
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="pt-16 pr-4 pl-4 xl:grid xl:grid-cols-5 gap-4">
                        <div className="xl:text-left text-center">
                            <p className="text-white  
                                cursor-pointer font-bold text-4xl"
                            > 
                                M.Edu
                            </p>
                            <p className="xl:text-sm text-white sm:px-0 px-12">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Numquam qui possimus perferendis ipsum sint cupiditate 
                            </p>

                            <ul className="hover:underline flex xl:justify-start justify-center 
                                xl:flex pb-8 xl:pt-4 max-w-md mx-auto "
                            >
                                <li className="hover:underline xl:pr-2 pr-2">
                                    <a href="#">
                                        <i className="text-blue-500 hover:text-white fab fa-facebook"></i>
                                    </a>
                                </li>

                                <li className="xl:pr-2 pr-2">
                                    <a href="#">
                                        <i className="text-blue-500 hover:text-white  fab fa-twitter"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i className="text-blue-500 hover:text-white  fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-white text-center">
                            <p className="font-bold">
                                Company
                            </p>

                            <ul className="xl:text-sm">
                                <li className="pt-2 ">
                                    <a 
                                        href="#"
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                    >
                                        About Us
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        href="#"
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                    >
                                        Services
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Community
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Testimonial
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-white xl:pt-0 pt-6 text-center">
                            <p className="font-bold">
                                Support
                            </p>
                            <ul className="xl:text-sm">
                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Help Center
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Tweet @ Us
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Webinars
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Feedback
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Offline Services
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-white xl:pt-0 pt-6 text-center">
                            <p className="font-bold">
                                Links
                            </p>

                            <ul className="xl:text-sm">
                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Courses
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="transition duration-1000 ease-in-out no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Become Teacher
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Service
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        All in one
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-white xl:pt-0 pt-6 text-center">
                            <p className="font-bold">
                                Contact Us
                            </p>

                            <ul className="xl:text-sm">
                                <li className="pt-2">
                                    <a 
                                        className="no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        (+234) 817 876 4726
                                    </a>
                                </li>

                                <li className="pt-2">
                                    <a 
                                        className="no-underline hover:underline hover:opacity-70"
                                        href="#"
                                    >
                                        Support@medu.com
                                    </a>
                                </li>
                            </ul> 
                        </div>

                    </div>

                    <div className="mt-6 pt-2 pb-4 text-center border-t-2 border-gray-400">
                        <p className="text-gray-400">
                            Copyright &copy; 2021, M.Edu
                        </p>
                        <p className="text-gray-400 text-xs">
                            Developed by Israel Chidera with <i class="fas fa-2x text-red-600 fa-heart"></i>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
