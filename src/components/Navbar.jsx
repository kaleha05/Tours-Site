import React from 'react';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaPhone, FaLocationArrow, FaWhatsapp, FaFacebook, FaInstagram, FaMailBulk, FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <div className=''>
            <div className='flex flex-row w-screen justify-end items-center px-10 bg-[#230E00] h-10'>
                <a href='tel:254716584690'><FaPhone className='m-2 text-[#FFA161]' /></a>
                <a href='https://wa.me/254716584690'><FaWhatsapp className='m-2 text-[#FFA161]' /></a>                
                <a href='mailto:info@aloolo.com'><FaEnvelope className='m-2 text-[#FFA161]' /></a>
                <FaFacebook className='m-2 text-[#FFA161]' />
                <FaInstagram className='m-2 text-[#FFA161]' />
            </div>
            <nav className="w-full bg-white shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to=''>
                                <img className="max-h-10" src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676228094/aloolo/Aloolo_Logos-02_t3euwy.png" />
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-zinc-800"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-zinc-800"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-stone-700">
                                <li>
                                    <Link to='/' onClick={() => setNavbar(!navbar)}>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about' onClick={() => setNavbar(!navbar)}>About Us</Link>
                                </li>
                                <li >
                                    <Link to='/destinations' onClick={() => setNavbar(!navbar)}>Our Destinations</Link>
                                </li>
                                <li >
                                    <Link to='/gallery' onClick={() => setNavbar(!navbar)}>Gallery</Link>
                                </li>
                                <li >
                                    <Link to='/contacts' onClick={() => setNavbar(!navbar)}>Contact Us</Link>
                                </li>
                            </ul>

                            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                <Link to='contacts'
                                    className="inline-block w-full px-4 py-2 text-center text-[#230E00] bg-[#FFA161] md:bg-white rounded-md shadow hover:bg-[#FFA161]"
                                >
                                    Book a Tour
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <Link to='contacts'
                            className="px-4 py-2 text-[#230E00] bg-white border-[#230E00] border-solid border-2 rounded-md shadow hover:bg-[#FFA161]"
                        >
                            Book a Tour
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;