import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaRegSun } from 'react-icons/fa';
import logo from '../assets/logo.jpg';
import { Outlet, Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="w-screen bg-zinc-800">
            <div className="grid grid-cols-3 gap-4 pl-8 py-10">
                <div>
                    <div >
                        <img className=" h-20" src={logo} />
                        <div className="pl-0 py-2 text-white">
                            <p className="text-2xl py-0">Lorem Tours and Safaris</p>
                        </div>
                    </div>
                </div>
                <div className=" ml-0">
                    <h4 className=" text-2xl text-white py-2">Our Socials</h4>
                    <div className="text-gray-300">
                        <div className="flex items-center mb-1">
                            <FaFacebookF className="mr-2 text-blue-400" />
                            <p className="py-0 my-0">Facebook</p>
                        </div>
                        <div className="flex items-center mb-1">
                            <FaInstagram className="mr-2 text-white" />
                            <p className="py-0 my-0">Instagram</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-1 text-blue-400" />
                            <p className="py-0 my-0">tours@domain.com</p>
                        </div>
                    </div>
                </div>
                <div className="" >
                    <h4 className="text-2xl text-white py-2">Quick Links</h4>
                    <div className="px-3 text-gray-300">
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/destinations'>Destinations</Link>
                            </li>
                            <li>
                                <Link to='/gallery'>Gallery</Link>
                            </li>
                            <li>
                                <Link to='/contacts'>Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-zinc-700">
                <div className='flex items-center text-white px-4'>
                    <p className="py-2 text-gray-300">Developed by Gloria Keya</p>
                    <FaRegSun className="m-2 text-yellow-400" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;