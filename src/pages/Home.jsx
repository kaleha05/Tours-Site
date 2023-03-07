import React from "react";
import { FaHandshake, FaMoneyBillWave, FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
    return (
        <>
            <div className='w-full'>
                <Carousel />
                <div className="bg-[url('https://res.cloudinary.com/dcxosct8v/image/upload/v1676234980/aloolo/WhatsApp_Image_2023-02-12_at_21.15.57_1_vylnii.jpg')] pb-8">
                    <h3 className="text-center text-[#230E00] text-2xl font-semibold py-6">Plan your next getaway with us</h3>
                    <div className="grid grid-cols-3">
                        <input type='text' className="form-control block" placeholder="Where to" />
                        <input type='text' className="form-control block" placeholder="When" />
                        <select className="form-select block bg-transparent h-10 border border-solid border-[#230E00] rounded mx-5 justify-center items-center px-3 text-[#230E00]" >
                            <option selected>Travel type</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                        </select>                    </div>
                    <div className="flex justify-center mt-6">
                        <button>Book now</button>
                    </div>
                </div>
                <div className="mx-20 my-10">
                    <div className="flex justify-center items-center my-10">
                        <div>
                            <h2 className="text-center text-3xl">Popular destinations</h2>
                            <p className="py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-1 gap-1">
                        <Link to="destinations">
                            <div className="h-96 bg-[url('https://res.cloudinary.com/dcxosct8v/image/upload/v1676315333/aloolo/WhatsApp_Image_2023-02-12_at_21.15.57_3_g9ekha.jpg')] bg-cover">
                                <div className="grid grid-rows-2 h-full hover:shadow-2xl">
                                    <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white"></h5>
                                    <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                        <p className="text-xl font-medium text-white pl-2">Explore the wild within the city at Nairobi National Park</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="destinations">
                            <div className="h-96 bg-[url('https://res.cloudinary.com/dcxosct8v/image/upload/v1676314319/aloolo/Maasai%20Mara/IMG_6262_lweoom.jpg')] bg-cover">
                                <div className="grid grid-rows-2 h-full hover:shadow-2xl">
                                    <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white"></h5>
                                    <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                        <p className="text-xl font-medium text-white pl-2">Safari at the famous Maasai Mara</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="destinations">
                            <div className="h-96 bg-[url('https://res.cloudinary.com/dcxosct8v/image/upload/v1676313224/aloolo/naivasha/LN_15_of_56_r2igy3.jpg')] bg-cover">
                                <div className="grid grid-rows-2 h-full hover:shadow-2xl">
                                    <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white"></h5>
                                    <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                        <p className="text-xl font-medium text-white pl-2">Bird-watching at Lake Naivasha</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="destinations">
                            <div className="h-96 bg-[url('https://res.cloudinary.com/dcxosct8v/image/upload/v1676313405/aloolo/Tsavo/IMG_1054_masgo8.jpg')] bg-cover">
                                <div className="grid grid-rows-2 h-full hover:shadow-2xl">
                                    <h5 className="bg-gray-800 bg-opacity-50 text-3xl font-bold p-3 text-white"></h5>
                                    <div className="bg-gray-800 bg-opacity-50 mb-0 inset-x-0 bottom-0 flex items-end">
                                        <p className="text-xl font-medium text-white pl-2">Red elephants at Tsavo National Park</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center my-10">
                        <div className=" bg-gray-200 w-screen h-60 sm:h-auto py-10">
                            <h2 className="text-center text-3xl">Why Choose Us</h2>
                            <div className="grid grid-cols-3 sm:grid-cols-1 gap-40 sm:gap-5 mt-5 px-20">
                                <div className="flex items-center">
                                    <FaMoneyBillWave className="mr-3 text-orange-500 text-5xl" />
                                    <p className="font-bold text-xl text-gray-800">Pocket-friendly prices</p>
                                </div>
                                <div className="flex items-center">
                                    <FaHandshake className="mr-3 text-orange-500 text-5xl" />
                                    <p className="font-bold text-xl text-gray-800">Best customer service</p>
                                </div>
                                <div className="flex items-center">
                                    <FaPlaneDeparture className="mr-3 text-orange-500 text-5xl" />
                                    <p className="font-bold text-xl text-gray-800">Amazing destinations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center my-10">
                        <div>
                            <h2 className="text-center text-3xl">Explore our rich gallery</h2>
                            <p className="py-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676314334/aloolo/Maasai%20Mara/kk_22_of_23_weqecf.jpg" />
                        <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676314278/aloolo/Maasai%20Mara/1_16_of_27_zcakgg.jpg" />
                        <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313434/aloolo/Tsavo/kk_4_of_23_bnb2jh.jpg" />
                        <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313676/aloolo/Nairobi%20National%20Park/JNP_87_of_92_li1sup.jpg" />
                        <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313452/aloolo/Nairobi%20National%20Park/jnp_17_of_63_weqoyd.jpg" />
                        <img src="https://res.cloudinary.com/dcxosct8v/image/upload/v1676313320/aloolo/naivasha/LN_16_of_56_wyxdj6.jpg" />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button><Link to="gallery">See more</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;