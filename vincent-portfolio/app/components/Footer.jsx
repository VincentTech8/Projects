import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-b-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container py-10 flex justify-center">
        {/* Copyright */}
        <span className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Vincent. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;