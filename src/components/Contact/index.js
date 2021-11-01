import React from 'react';

function Contact() {
    return (
        <div className="container grid grid-cols-1 h-full w-1/2 mx-auto my-10 font-mono">
            <div className="rounded-lg bg-gray-300 h-4/5 divide-y divide-pink-700">
                <p className="text-3xl text-center">Contact Me</p>
                <form action="#" method="POST">
                    <div className="grid grid-rows-4 grid-flow-row">
                        {/* Getting Users full name */}
                        <div className="h-10">
                            <label className="text-lg font-medium m-2">
                                Your name here:
                            </label>
                            <div className="mt-1 rounded-md">
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    className="focus:ring-gray-800 focus:border-gray-800 w-3/4 ml-5 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>
                        
                        {/* Getting Users email */}
                        <div className="h-10">
                            <label className="text-lg font-medium m-2">
                                Your email here:
                            </label>
                            <div className="mt-1 rounded-md">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="focus:ring-gray-800 focus:border-gray-800 w-3/4 ml-5 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="johnDoe@blah123.com"
                                />
                            </div>
                        </div>

                        {/* Getting Users message */}
                        <div className="h-40">
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
                                    className="focus:ring-gray-800 focus:border-gray-800 w-3/4 ml-5 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Type your message here..."
                                />
                            </div>
                        </div>

                        {/* Submiting information */}
                        <div className="place-self-center">
                            <button className="rounded-lg ring-2 ring-gray-700 ring-offset-2 ring-offset-red-400 bg-pink-800 hover:bg-gray-800 hover:text-white shadow-md p-2 mt-5 w-20">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;