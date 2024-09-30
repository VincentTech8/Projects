// "use client";
// import Link from 'next/link';
// import React, { useState } from 'react';
// import NavLink from './NavLink';
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from './MenuOverlay';

// const navLinks = [
//     {
//         title: "About",
//         href: "#home",
//         sectionId: "home",
//     },
//     {
//         title: "Projects",
//         href: "#projects",
//         sectionId: "projects",
//     },
//     {
//         title: "Contact",
//         href: "#contact",
//         sectionId: "contact"
//     },
// ];

// const NavBar = () => {
//     const [navbarOpen, setNavbarOpen] = useState(false);

//     const handleCloseMenu = () => {
//         setNavbarOpen(false);
//     }

//     return (
//         <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-100">
//             <div className='container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4'>
//                 <Link href={"/"} className="text-lg md:text-xl lg:text-2xl font-extrabold">
//                     <span className='bg-clip-text text-transparent hover:opacity-80 bg-white'>
//                         Vincent
//                         <span className='text-[#01EEFC] font-sans'>
//                             .
//                         </span>
//                     </span>
//                 </Link>
//                 <div className="mobile-menu block md:hidden">
//                     {!navbarOpen ? (
//                         <button
//                             onClick={() => setNavbarOpen(true)}
//                             className="flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white"
//                         >
//                             <Bars3Icon className="h-5 w-5" />
//                         </button>
//                     ) : (
//                         <button
//                             onClick={() => setNavbarOpen(false)}
//                             className="flex items-center px-3 py-2 border rounded border-slate-300 text-slate-300 hover:text-white hover:border-white"
//                         >
//                             <XMarkIcon className="h-5 w-5" />
//                         </button>
//                     )}
//                 </div>
//                 <div className='menu hidden md:block md:w-auto' id='navbar'>
//                     <ul className='flex md:flex-row md:space-x-8'>
//                         {navLinks.map((link, index) => (
//                             <li key={index}>
//                                 <NavLink href={link.href} title={link.title} />
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//             {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//         </nav>
//     )
// }

// export default NavBar;