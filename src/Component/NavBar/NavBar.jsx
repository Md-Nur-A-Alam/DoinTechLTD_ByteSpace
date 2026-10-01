"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingBag } from 'react-icons/fi';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-base-100/70 backdrop-blur-md shadow-sm border-b border-base-200/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
                <div className="navbar-start">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/Logo.png"
                            alt="ByteSpace Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                        />
                        <span 
                            className="tracking-tight text-white group-hover:text-lime-400 transition-colors font-bold text-[24px]"
                            style={{ fontFamily: "'Clash Display', sans-serif" }}
                        >
                            ByteSpace
                        </span>
                    </Link>
                </div>

                {/* Navbar Center: Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 text-sm font-medium text-neutral-300">
                        <li>
                            <Link href="/" className="hover:text-white hover:bg-white/10 rounded-lg">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/courses" className="hover:text-white hover:bg-white/10 rounded-lg">
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link href="/creators" className="hover:text-white hover:bg-white/10 rounded-lg">
                                Creators
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Navbar End: Auth & Cart */}
                <div className="navbar-end gap-3">
                    <Link 
                        href="/signin" 
                        className="btn btn-ghost btn-sm text-white hover:bg-white/10 font-normal text-sm px-4"
                    >
                        Sign In
                    </Link>
                    <Link 
                        href="/join" 
                        className="btn btn-neutral btn-sm bg-white text-black hover:bg-lime-400 hover:text-black border-none font-medium text-sm px-4 rounded-lg shadow"
                    >
                        Join Us
                    </Link>
                    <Link 
                        href="/cart" 
                        className="btn btn-ghost btn-circle btn-sm text-white hover:bg-white/10 ml-1"
                        aria-label="Shopping Cart"
                    >
                        <FiShoppingBag className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;