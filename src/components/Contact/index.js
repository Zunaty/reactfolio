import React from 'react';

function Contact() {
    return (
        <div className="container h-full lg:w-1/3 md:w-1/2 sm:w-full mx-auto mt-10 pb-10 font-mono sm:overflow-hidden">
            <div className="rounded-lg bg-gray-300 h-4/5 divide-y divide-pink-700">
                <p className="text-3xl text-center">Contact Me</p>
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
                                    className="focus:ring-gray-800 focus:border-gray-800 w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="focus:ring-gray-800 focus:border-gray-800 w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="focus:ring-gray-800 focus:border-gray-800 w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Type your message here..."
                                />
                            </div>
                        </div>

                        {/* Submiting information */}
                        <div className="place-self-center">
                            <button className="rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 hover:text-white shadow-md p-2 mt-5 w-32 mb-20">
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