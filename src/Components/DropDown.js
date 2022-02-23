import React, {useState} from 'react';

function DropDown({isOpen, toggle, handleClick}) {
    const [click, setClick] = useState(false);


    const closeMobileMenu = () => {
        setClick(false);
    }

    return (
        <div className="relative text-left">
            <div className={isOpen 
                ? 'absolute h-screen text-left text-base text-white pt-12 list-none z-20 top-0 left-0 flex flex-col bg-blue-700 items-center' : 'hidden'
                }
                onClick={toggle}    
            >
                <li 
                    className="px-6 pb-4 group"
                >
                    <a 
                        href="#"
                        onClick={closeMobileMenu}    
                    >
                        Courses
                        <i className="pl-0.5 group-hover:text-indigo-900 text-xl fas fa-arrow-down"></i>
                    </a>
                </li>
                <li className="px-6 pb-4 group">
                    <a href="#">
                        Innovations
                        <i className="pl-0.5 fas group-hover:text-indigo-900 text-xl fa-arrow-down"></i>
                    </a>
                </li>
                <li className="px-6 pb-4 group">
                    <a href="#">
                        Platforms
                        <i className="pl-0.5 group-hover:text-indigo-900 text-xl fas fa-arrow-down"></i>
                    </a>
                </li>
                <li className="px-6 pb-4 group"> 
                    <a href="#">
                        Resources
                        <i className="pl-0.5 fas group-hover:text-indigo-900 text-xl fa-arrow-down"></i>
                    </a>
                </li>
                <li className="px-6  group no-underline hover:underline">
                    <a href="#">
                        About
                        <i className="pl-0.5 fas invisible group-hover:text-indigo-900 text-xl fa-arrow-down"></i>
                    </a>
                </li>
            </div>
        </div>
    )
}

export default DropDown
