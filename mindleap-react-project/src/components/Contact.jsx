import React, { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaUserAlt, FaGlobe } from "react-icons/fa";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg-heroBg flex items-center justify-center py-28 px-8' id='contact'>
            <div className='container mx-auto'>
                <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
                    {/* Left side */}
                    <div className='space-y-8'>
                        <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>
                            Make an appointment
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                    <FaUserAlt className='text-primary' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-medium'>
                                        24 Hours Services
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                    <FaEnvelope className='text-primary' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-medium'>
                                        Expert Therapist
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                    <FaPhoneAlt className='text-primary' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-medium'>
                                        High Quality Core
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start gap-4'>
                                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                                    <FaGlobe className='text-primary' />
                                </div>
                                <div className='space-y-1'>
                                    <h3 className='text-xl font-medium'>
                                        Trusted Clinic
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                        <h2 className='text-2xl font-bold mb-4'>
                            Book Appointment
                        </h2>
                        <form className='space-y-8' onSubmit={handleSubmit}>
                            <div className='flex sm:flex-row flex-col gap-4'>
                                <input type="text" placeholder="Name" className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                                <input type="email" placeholder="Email Address" className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                            </div>
                            <div className='flex sm:flex-row flex-col gap-4'>
                                <input type="tel" placeholder="Contact Number" className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                                <input type="text" placeholder="Country" className='w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow' />
                            </div>
                            <textarea placeholder="Message" className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow" rows="5" spellCheck="false"></textarea>
                            <button type='submit' className='w-full p-3 bg-primary text-white rounded-md hover:bg-green-600'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact