import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex justify-between items-center px-5 py-2 bg-primary sticky top-0 z-10" id="home">
            <a className="font-bold text-white text-xl" href="#">Amal Nisha</a>
            <nav className="hidden md:block">
                <ul className="flex space-x-4 text-white">
                    <li className='hover:underline' style={{ textDecorationColor: 'white' }}><a href="/">Home</a></li>
                    <li className='hover:underline' style={{ textDecorationColor: 'white' }}><a href="#about">About</a></li>
                    <li className='hover:underline' style={{ textDecorationColor: 'white' }}><a href="#projects">Projects</a></li>
                    <li className='hover:underline' style={{ textDecorationColor: 'white' }}><a href="#resume">Resume</a></li>
                    <li className='hover:underline' style={{ textDecorationColor: 'white' }}><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && (
                <nav className="block md:hidden fixed top-0 left-0 right-0 bg-gray-800
                shadow-lg z-20 transition-transform transform duration-300 ease-in-out">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white space-y-4 p-6">
                        <li className='cursor-pointer py-2 border-b border-white'><a href="/">Home</a></li>
                        <li className='cursor-pointer py-2 border-b border-white'><a href="#about">About</a></li>
                        <li className='cursor-pointer py-2 border-b border-white'><a href="#projects">Projects</a></li>
                        <li className='cursor-pointer py-2 border-b border-white'><a href="#resume">Resume</a></li>
                        <li className='cursor-pointer py-2'><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
            <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className='block md:hidden'
                aria-label="Toggle navigation menu"
                aria-controls="mobile-nav"
                aria-expanded={toggleMenu}
            >
                <Bars3Icon className='text-white h-8 w-8' />
            </button>
        </header>
    );
}
