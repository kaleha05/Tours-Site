import React from "react";

const Contacts = () => {
    return (
        <>
            <div className="flex justify-center w-full bg-[url('https://res.cloudinary.com/dcxosct8v/image/upload/v1676231669/aloolo/WhatsApp_Image_2023-02-12_at_21.15.57_rszqle.jpg')]">
                <h1 className="text-7xl text-white py-10">Contacts</h1>
            </div>
            <div className="md:mx-40 my-10">
                <div>
                    <h2 className="text-3xl text-center">Talk to us Today</h2>
                </div>
                <form className="test-Mailing">
                    <div className="">
                        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 my-10">
                            <input type='text' className="form-control block" placeholder="First name" />
                            <input type='text' className="form-control block" placeholder="Last name" />
                        </div>
                        <div className="mr-10">
                            <input type='email' className="form-control block w-full" placeholder="Email address" />
                            <textarea className="form-control block w-full mt-10" placeholder="Type your message here" />
                        </div>
                        <div className="flex justify-center mt-6">
                            <button value="Submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contacts;