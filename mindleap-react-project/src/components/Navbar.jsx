// Type: rafce - to create the framework below
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    const handleSelectedMenu = () => {
        setIsOpen(false);
    }
    const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            
        })
    }
    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                <a href="#home" className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`} onClick={(e) => {e.preventDefault(); handleSelectedMenu();}}>
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
    );
    return (
        <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                {/* Logo */}
                <div className='text-white text-sm font-semibold'>
                    {/* Syntax a */}
                    <a href="/">
                        {/* Syntax img */}
                        <img src="/logo.svg" alt="Mind Leap Logo" />
                        <span className='ml-12'>By Vincent</span>
                    </a>
                </div>
                {/* NavItems */}
                <div className='hidden md:flex flex-grow justify-center'>
                    {navLinks}
                </div>
                {/* Button */}
                <div className='hidden md:block'>
                    <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
                        Contact Us
                    </a>
                </div>
                {/* Hamburger Menu */}
                {/* ${} is a dynamic class */}
                <div className='block md:hidden'>
                    <button className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`} onClick={handleToggle}>
                        <HiOutlineMenuAlt3 className='size-6' />
                    </button>
                </div>
            </div>
            {/* Mobile NavItems */}
            {/* Conditional Rendering with isOpen */}
            {
                isOpen && (
                    <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                        <ul className='flex flex-col p-4 space-y-3'>
                            {navLinks.props.children}
                            <li className='py-2'>
                                <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded' onClick={(e) => { e.preventDefault(); handleSelectedMenu(); }}>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </header>
    )
}

export default Navbar