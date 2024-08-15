// Type: rafce - to create the framework below
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <a href="#home" className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}>
                    Home
                </a>
            </li>
            <li>
                <a href="#services" className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}>
                    Services
                </a>
            </li>
            <li>
                <a href="#about" className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}>
                    About Us
                </a>
            </li>
            <li>
                <a href="#pricing" className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}>
                    Pricing
                </a>
            </li>
            <li>
                <a href="#testimonial" className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}>
                    Testimonial
                </a>
            </li>
        </ul>
    )
    return (
        <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                {/* {Logo} */}
                <div className='text-white text-sm font-semibold'>
                    {/* Syntax a */}
                    <a href="/">
                        {/* Syntax img */}
                        <img src="/logo.svg" alt="Mind Leap Logo" />
                        <span className='ml-12'>By Vincent</span>
                    </a>
                </div>
                {/* {NavItems} */}
                <div className='hidden md:flex flex-grow justify-center'>
                    {navLinks}
                </div>
                {/* {Button} */}
                <div className='hidden md:block'>
                    <a href="#contact">
                        Contact Us
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar