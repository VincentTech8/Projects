import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col items-center">
            {navLinks.map((link, index) => (
                <li key={index}>
                    <NavLinks href={link.href} title={link.title} sectionId={link.sectionId} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;