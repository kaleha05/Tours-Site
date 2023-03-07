import React from "react";
import Leading from "../components/Leading";
import { FaHandshake, FaMoneyBillWave, FaPlaneDeparture } from "react-icons/fa";

const About = () => {
    return (
        <>
            <Leading />
            <div className="mx-20">
                <div className="flex justify-center items-center my-10">
                    <div>
                        <h2 className="text-left text-3xl">Our Story</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum</p>
                        <h2 className="text-left text-3xl mt-4 py-3">Our Values</h2>
                        <div className="grid grid-cols-3 gap-40 mt-5 py-10 px-20 bg-gray-200">
                            <div className="flex items-center">
                                <FaHandshake className="mr-3 text-orange-500 text-5xl" />
                                <p className="font-bold text-xl text-gray-800">Value</p>
                            </div>
                            <div className="flex items-center">
                                <FaHandshake className="mr-3 text-orange-500 text-5xl" />
                                <p className="font-bold text-xl text-gray-800">Value</p>
                            </div>
                            <div className="flex items-center">
                                <FaHandshake className="mr-3 text-orange-500 text-5xl" />
                                <p className="font-bold text-xl text-gray-800">Value</p>
                            </div>
                        </div>
                        <p>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;