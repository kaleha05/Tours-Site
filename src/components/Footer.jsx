import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaRegSun } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <div className="w-screen bg-zinc-800">
            <div className="grid grid-cols-3 gap-4 px-10 py-10">
                <div>
                    <div className="flex flex-row">
                        <img className=" w-40" src={logo} />
                        <div className="px-3 py-2 text-white">
                            <p className="text-2xl">Lorem Tours and Safaris</p>
                            <p className="text-gray-300 py-2">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className=" mx-4">
                    <h4 className=" text-2xl text-white py-2">Our Socials</h4>
                    <div className="text-gray-300">
                        <div className="flex items-center">
                            <FaFacebookF className="m-2 text-blue-400" />
                            <p>Facebook</p>
                        </div>
                        <div className="flex items-center">
                            <FaInstagram className="m-2 text-white" />
                            <p>Instagram</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="m-2 text-blue-400" />
                            <p>tours@domain.com</p>
                        </div>
                    </div>
                </div>
                <div className="" >
                    <h4 className="text-2xl text-white py-2">Quick Links</h4>
                    <div className="px-3 text-gray-300">
                        <p>Home</p>
                        <p>About</p>
                        <p>Destinations</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-zinc-700">
                <div className='flex items-center text-white px-4'>
                    <p className="py-2 text-gray-300">Developed by Gloria Keya</p>
                    <FaRegSun className="m-2 text-yellow-400"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;