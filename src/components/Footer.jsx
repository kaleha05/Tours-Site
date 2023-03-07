import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaRegSun } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="w-screen bg-[#230E00]">
            <div className="grid grid-cols-3 gap-4 pl-8 py-10">
                <div>
                    <img className=" h-20" src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676228228/aloolo/Aloolo_Logos-01_jwvdk1.png" />
                </div>
                <div className=" ml-0">
                    <h4 className=" text-2xl text-white py-2">Our Socials</h4>
                    <div className="text-gray-300">
                        <div className="flex items-center mb-1">
                            <FaFacebookF className="mr-2 text-[#FFA161]" />
                            <p className="py-0 my-0">Facebook</p>
                        </div>
                        <div className="flex items-center mb-1">
                            <FaInstagram className="mr-2 text-[#FFA161]" />
                            <p className="py-0 my-0">Instagram</p>
                        </div>
                        <a href='mailto:info@aloolo.com'><div className="flex items-center">
                            <FaEnvelope className="mr-1 text-[#FFA161]" />
                            <p className="py-0 my-0">info@aloolo.com</p>
                        </div></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-2xl text-white py-2">Quick Links</h4>
                    <div className="px-3">
                        <ul className=" font-normal">
                            <li className="text-white font-normal">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="text-white font-normal">
                                <Link to='/about'>About</Link>
                            </li>
                            <li className="text-white font-normal">
                                <Link to='/destinations'>Destinations</Link>
                            </li>
                            <li className="text-white font-normal">
                                <Link to='/gallery'>Gallery</Link>
                            </li>
                            <li className="text-white font-normal">
                                <Link to='/contacts'>Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#351901]">
                <div className='flex items-center text-white px-4'>
                    <p className="py-1 text-gray-300">Developed by Gloria Keya</p>
                    <FaRegSun className="m-2 text-yellow-400" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;