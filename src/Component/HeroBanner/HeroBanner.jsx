import React from 'react';
import Image from 'next/image';
import { FiSearch, FiStar } from 'react-icons/fi';

const HeroBanner = () => {
    return (
        <section className="relative bg-[#0022FF] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Floating Graphic Assets (Positioned matching reference layout) */}
            {/* Top-Left Scribble */}
            <div className="absolute top-32 left-10 w-24 h-24 opacity-90 pointer-events-none hidden md:block">
                <Image src="/Banner_Graphics/Frame.png" alt="Scribble Graphic" width={100} height={100} />
            </div>

            {/* Mid-Left Scribble 2 */}
            <div className="absolute top-72 left-20 w-16 h-16 opacity-90 pointer-events-none hidden lg:block">
                <Image src="/Banner_Graphics/Frame (1).png" alt="Scribble Graphic" width={80} height={80} />
            </div>

            {/* Bottom-Left Ring / Donut */}
            <div className="absolute bottom-10 left-12 w-32 h-32 opacity-95 pointer-events-none hidden lg:block">
                <Image src="/Banner_Graphics/Cone (1).png" alt="Ring Graphic" width={140} height={140} />
            </div>

            {/* Top-Right Cone */}
            <div className="absolute top-28 right-12 w-28 h-28 opacity-95 pointer-events-none hidden md:block">
                <Image src="/Banner_Graphics/Cone.png" alt="Cone Graphic" width={120} height={120} />
            </div>

            {/* Bottom-Right Scribble */}
            <div className="absolute bottom-16 right-16 w-28 h-28 opacity-95 pointer-events-none hidden lg:block">
                <Image src="/Banner_Graphics/Frame (2).png" alt="Scribble Graphic" width={120} height={120} />
            </div>

            {/* Main Hero Container */}
            <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
                
                {/* Heading (72px, SemiBold, -1% Letter Spacing) */}
                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold leading-[1.12] tracking-[-0.01em] max-w-[935px] mb-6">
                    Get Access to Hundreds <br className="hidden sm:inline" /> Courses Available
                </h1>

                {/* Subtitle / Description */}
                <p className="text-[#E5E6E7] text-base sm:text-lg leading-[160%] max-w-[819px] mb-10 font-normal">
                    Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
                </p>

                {/* Search Bar Component */}
                <div className="w-full max-w-xl bg-white p-2 rounded-full shadow-lg flex items-center mb-16">
                    <div className="flex items-center pl-4 text-gray-400 gap-2 w-full">
                        <FiSearch className="w-5 h-5 text-gray-400 shrink-0" />
                        <input 
                            type="text" 
                            placeholder="Course, topic, creator" 
                            className="w-full bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base"
                        />
                    </div>
                    <button className="bg-[#CCFF00] hover:bg-[#b3e600] text-black font-medium px-6 py-3 rounded-full text-sm sm:text-base transition-colors shrink-0">
                        Search
                    </button>
                </div>

                {/* Hero Central Image Section with Backdrop Arc and Floating Cards */}
                <div className="relative w-full max-w-3xl flex justify-center mt-6">
                    
                    {/* Lime Green Curved Backdrop Arc */}
                    <div className="absolute bottom-0 w-[550px] h-[280px] sm:w-[680px] sm:h-[340px] bg-[#CCFF00] rounded-t-full -z-10" />

                    {/* Instructor / Student Portrait Image */}
                    <div className="relative z-10 w-72 sm:w-96">
                        <Image 
                            src="/Banner_Graphics/Image.png" 
                            alt="Student with headphones and laptop" 
                            width={400} 
                            height={450} 
                            priority
                            className="object-contain mx-auto"
                        />
                    </div>

                    {/* Floating Card: UI/UX Design (Top Left of Model) */}
                    <div className="absolute left-2 sm:-left-6 top-16 sm:top-24 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-xl z-20 flex items-center gap-3 text-left border border-gray-100">
                        <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 text-xs">
                            UI
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-900">UI/UX Design</p>
                            <p className="text-[10px] text-gray-500">200 Courses &bull; 1000+ Students</p>
                        </div>
                    </div>

                    {/* Floating Card: Learning Progress (Top Right of Model) */}
                    <div className="absolute right-2 sm:-right-6 top-12 sm:top-20 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-xl z-20 text-left w-44 sm:w-48 border border-gray-100">
                        <p className="text-[11px] text-gray-500 mb-0.5">Learning Progress</p>
                        <p className="text-xl font-bold text-gray-900 mb-2">55%</p>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#CCFF00] h-full w-[55%] rounded-full" />
                        </div>
                    </div>

                    {/* Floating Card: Happy Students (Bottom Left of Model) */}
                    <div className="absolute left-0 sm:-left-12 bottom-6 sm:bottom-10 bg-white text-gray-900 px-4 py-3 rounded-xl shadow-xl z-20 text-left border border-gray-100 hidden sm:block">
                        <p className="text-xs font-bold text-gray-900 mb-1">Happy Students</p>
                        <div className="flex items-center gap-1 mb-2">
                            <span className="text-xs font-semibold text-gray-800">4.5</span>
                            <div className="flex text-amber-400 text-xs">
                                <FiStar className="fill-current" />
                            </div>
                            <span className="text-[10px] text-gray-400">(240)</span>
                        </div>
                        {/* Avatar stack mockup */}
                        <div className="flex items-center">
                            <div className="flex -space-x-2 overflow-hidden">
                                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-blue-400" />
                                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-green-400" />
                                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-indigo-400" />
                                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-purple-400" />
                            </div>
                            <span className="ml-2 text-[10px] font-bold text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded-full">2K+</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HeroBanner;