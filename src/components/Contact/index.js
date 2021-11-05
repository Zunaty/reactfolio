import React from 'react';

function Contact() {
    return (
        <div className="h-screen w-full md:w-3/4 xl:w-1/3 mx-auto my-5 md:my-10">

            {/* Background box that hold the form */}
            <div className="rounded-lg bg-gray-300 divide-y divide-pink-700">

                {/* section Title */}
                <p className="text-3xl text-center">Contact Me</p>

                {/* Form Starts here */}
                <form action="mailTo:Zunaty@gmail.com" className="flex justify-center">
                    <div className="flex flex-col mt-3">

                        {/* Getting Users full name */}
                        <div className="flex-col">
                            <label className="text-lg font-medium m-2">
                                Your name here:
                            </label>
                            <div className="mt-1 rounded-md">
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    className="focus:ring-gray-800 focus:border-gray-800 w-full border-gray-500 rounded-md"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>
                        
                        {/* Getting Users email */}
                        <div className="flex-col">
                            <label className="text-lg font-medium m-2">
                                Your email here:
                            </label>
                            <div className="mt-1 rounded-md">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="focus:ring-gray-800 focus:border-gray-800 w-full border-gray-500 rounded-md"
                                    placeholder="johnDoe@blah123.com"
                                />
                            </div>
                        </div>

                        {/* Getting Users message */}
                        <div className="flex-col">
                            <label className="text-lg font-medium m-2">
                                Your message here:
                            </label>
                            <div className="mt-1 rounded-md">
                                <textarea
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    rows="5"
                                    cols="40"
                                    className="focus:ring-gray-800 focus:border-gray-800 w-full border-gray-500 rounded-md"
                                    placeholder="Type your message here..."
                                />
                            </div>
                        </div>

                        {/* Submiting information */}
                        <div className="place-self-center">
                            <button className="rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 text-white shadow-md p-2 my-5 w-32">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;