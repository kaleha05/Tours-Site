import React from "react";
import Leading from "../components/Leading";

const Contacts = () => {
    return (
        <>
            <Leading />
            <div className="mx-40 my-10">
                <div>
                    <h2 className="text-3xl text-center">Talk to us Today</h2>
                    <p>Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt</p>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 my-10">
                        <input type='text' className="form-control block text-gray-800" placeholder="First name" />
                        <input type='text' className="form-control block text-gray-800" placeholder="Last name" />
                    </div>
                    <div className="mr-10">
                    <input type='text' className="form-control block w-full text-gray-800" placeholder="Email address" />
                    <input type='text' className="form-control block w-full mt-10 text-gray-800" placeholder="Type your message here" />
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className=" w-fit bg-orange-600 border border-orange-600 rounded px-4 py-2 text-white">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;