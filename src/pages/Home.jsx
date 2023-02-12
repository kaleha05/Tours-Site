import React from "react";
import img1 from '../assets/jungle1.jpg';
import img2 from '../assets/jungle3.jpg';
import heroImg from '../assets/hero.jpg';
import { FaDollarSign, FaMoneyBill } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className='w-full'>
                <img className='w-full' src={heroImg} alt="" />
                <div className=" bg-zinc-800 pb-8">
                    <h3 className="text-center text-2xl text-white py-6">Plan your next getaway with us</h3>
                    <div className="grid grid-cols-3">
                        <input type='text' className="form-control block" placeholder="Where to" />
                        <input type='text' className="form-control block" placeholder="When" />
                        <input type='text' className="form-control block " placeholder="Travel type" />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className=" w-fit bg-orange-600 border border-orange-600 rounded px-4 py-2 text-white">Book now</button>
                    </div>
                </div>
                <div className="mx-20 my-10">
                    <div className="flex justify-center items-center my-10">
                        <div>
                            <h2 className="text-center text-3xl">Offers and Packages</h2>
                            <p className="py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                        <div className="h-96 bg-[url('\\assets\\jungle2.jpg')] bg-cover">
                            <div className="grid grid-rows-2 h-full">
                                <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white">Ksh 3,999</h5>
                                <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                    <p className="text-xl font-medium text-white pl-2">5 Days | 4 Nights Kenyan Safari</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-96 bg-[url('\\assets\\jungle2.jpg')] bg-cover">
                            <div className="grid grid-rows-2 h-full">
                                <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white">Ksh 3,999</h5>
                                <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                    <p className="text-xl font-medium text-white pl-2">5 Days | 4 Nights Kenyan Safari</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-96 bg-[url('\\assets\\jungle2.jpg')] bg-cover">
                            <div className="grid grid-rows-2 h-full">
                                <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white">Ksh 3,999</h5>
                                <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                    <p className="text-xl font-medium text-white pl-2">5 Days | 4 Nights Kenyan Safari</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-96 bg-[url('\\assets\\jungle2.jpg')] bg-cover">
                            <div className="grid grid-rows-2 h-full">
                                <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white">Ksh 3,999</h5>
                                <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                    <p className="text-xl font-medium text-white pl-2">5 Days | 4 Nights Kenyan Safari</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-10">
                        <div className=" bg-gray-200 w-screen h-60 py-10">
                            <h2 className="text-center text-3xl">Why Choose Us</h2>
                            <div className="grid grid-cols-3 gap-40 mt-5 px-20">
                                <div className="flex items-center">
                                    <FaDollarSign className="mr-3 text-orange-500 text-5xl"/>
                                    <p className="font-bold text-xl text-gray-800">Pocket-friendly prices</p>
                                </div>
                                <div className="flex items-center">
                                    <FaDollarSign className="mr-3 text-orange-500 text-5xl"/>
                                    <p className="font-bold text-xl text-gray-800">Pocket-friendly prices</p>
                                </div>
                                <div className="flex items-center">
                                    <FaDollarSign className="mr-3 text-orange-500 text-5xl"/>
                                    <p className="font-bold text-xl text-gray-800">Pocket-friendly prices</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-10">
                        <div>
                            <h2 className="text-center text-3xl">Dolore Magna Aliqua</h2>
                            <p className="py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        <img className="h-full" src={img1} />
                        <img src={img2} />
                        <img src={img2} />
                        <img className="h-full" src={img1} />
                        <img src={img2} />
                        <img src={img2} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;