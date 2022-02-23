import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setIsOpen(!isOpen); 
    }

    const [isOpen, setIsOpen] =useState(false);

    const closeMobileMenu = () => {
        setClick(false)
    }

    return (
        <>
            <nav className="z-40 relative xl:flex xl:justify-around flex justify-between xl:px-0 px-6 items-center pt-4">
                <p className="text-white hover:text-blue-400 transition duration-500 ease-in-out cursor-pointer font-bold xl:text-4xl text-2xl"> 
                    <a href="#/">
                        M.Edu
                    </a>
                </p>

                <div className="menu-icon text-white bg-red-900 p-2 block xl:hidden shadow-2xl" 
                    onClick={handleClick}
                >
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>

                {/* +
                    (navbarOpen ? " block absolute top-20 -left-full  w-full h-screen" : "hidden")} */}


                <ul 
                    className={click ? "transition duration-500 bg-hero-img text-xl z-0 p-36 text-center flex flex-col justify-around items-center shadow-2xl w-full absolute top-14 left-0 h-screen text-white bg-blue-500" : "xl:flex xl:justify-around text-sm text-white hidden" } 
                >
                    <li className="pr-6 group" onClick={closeMobileMenu}>
                        <Link smooth to="#courses">
                            <span>
                                Courses
                            </span>
                            <i className="pl-0.5 group-hover:text-blue-300 text-xl fas fa-arrow-down"></i>
                        </Link>
                    </li>
                    <li className="pr-6 group" onClick={closeMobileMenu}>
                        <Link smooth to="#innovation">
                            Innovations
                            <i className="pl-0.5 fas group-hover:text-blue-300 text-xl fa-arrow-down"></i>
                        </Link>
                    </li>
                    <li className="pr-6 group" onClick={closeMobileMenu}>
                        <Link smooth to="#platform">
                            Platforms
                            <i className="pl-0.5 group-hover:text-blue-300 text-xl fas fa-arrow-down"></i>
                        </Link>
                    </li>
                    <li className="pr-6 group" onClick={closeMobileMenu}> 
                        <Link smooth href="#resources">
                            Resources
                            <i className="pl-0.5 fas group-hover:text-blue-300 text-xl fa-arrow-down"></i>
                        </Link>
                    </li>
                    <li className="pr-6 group no-underline hover:underline" onClick={closeMobileMenu}>
                        <Link smooth to="#about">
                            About
                            <i className="pl-0.5 fas invisible group-hover:text-blue-300 text-xl fa-arrow-down"></i>
                        </Link>
                    </li>
                </ul>
                

                <a 
                    className="
                        bg-pink-900 transition duration-500 ease-in xl:block hidden
                        hover:bg-blue-500 hover:text-gray-200 text-white text-sm rounded-md pt-3 pr-3.5 pb-3 pl-3.5" 
                    href="#"
                >
                    Request Demo
                </a>
            </nav>
        </>
    )
}

export default Navbar
