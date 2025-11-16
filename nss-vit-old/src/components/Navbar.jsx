import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-800 border-b border-blue-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center space-x-2">
                        <a
                            href="https://www.nss.gov.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-background flex items-center space-x-2"
                        >
                            <div className="flex items-center space-x-2">
                                {/* NSS Logo */}
                                <img
                                    src="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/nss-logo.png"
                                    alt="NSS Logo"
                                    className="h-10 sm:h-12 md:h-12"
                                />
                            </div>
                        </a>

                        <a
                            href="https://www.vit.edu.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-background flex items-center space-x-2"
                        >
                            <div className="flex items-center space-x-2">
                                {/* VIT Logo */}
                                <img
                                    src="https://res.cloudinary.com/du6zyqqyw/image/upload/v1740557668/img/vit-logo.png"
                                    alt="VIT Logo"
                                    className="h-6 sm:h-8 md:h-8"
                                />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {['/', '/team', '/events', '/gallery', '/camp', '/achievements'].map((path, index) => (
                            <NavLink
                                key={index}
                                to={path}
                                className={({ isActive }) =>
                                    `p-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out ${
                                        isActive
                                            ? 'text-secondary transform scale-105'
                                            : 'text-background hover:text-secondary hover:scale-105'
                                    }`
                                }
                            >
                                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            </NavLink>
                        ))}
                    </div>

                    {/* Hamburger Menu (Mobile) */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-background hover:text-secondary focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        {['/', '/team', '/events', '/gallery', '/camp', '/achievements'].map((path, index) => (
                            <NavLink
                                key={index}
                                to={path}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                                        isActive
                                            ? 'text-secondary transform scale-105'
                                            : 'text-background hover:text-secondary hover:scale-105'
                                    }`
                                }
                            >
                                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;