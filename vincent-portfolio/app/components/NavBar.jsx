"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from 'framer-motion';

const navLinks = [
    {
        title: "About",
        href: "#home",
        sectionId: "home",
    },
    {
        title: "Projects",
        href: "#projects",
        sectionId: "projects",
    },
    {
        title: "Contact",
        href: "#contact",
        sectionId: "contact"
    },
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleToggle = () => {
        setNavbarOpen(!isOpen);
    }

    const handleCloseMenu = () => {
        setNavbarOpen(false);
    }

    useEffect(() => {
        // The code that we want to run
        window.addEventListener('scroll', handleScroll);
        // Optional return function - For clean up. Usually to reset a variable
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // The dependency array

    const handleScrollTo = (targetID) => {
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 75,
                behavior: 'smooth'
            });
        }
    }

    const handleScroll = () => {
        const sections = ['home', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 75;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop - 75;
                const height = element.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        });
    }

    const NavLinks = ({ href, title, sectionId }) => {
        return (
            <motion.a
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                    handleScrollTo(sectionId);
                }}
                className={`text-white ${activeSection === sectionId ? 'isActive' : ''}`}>
                {title}
            </motion.a>
        )
    }

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-100">
            <div className='container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4'>
                <Link href={"/"} className="text-lg md:text-xl lg:text-2xl font-extrabold">
                    <span className='bg-clip-text text-transparent hover:opacity-80 bg-white'>
                        Vincent
                        <span className='text-[#01EEFC] font-sans'>
                            .
                        </span>
                    </span>
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex md:flex-row md:space-x-8'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLinks href={link.href} title={link.title} sectionId={link.sectionId} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && (
                <ul className="flex flex-col items-center">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLinks href={link.href} title={link.title} sectionId={link.sectionId} />
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default NavBar;