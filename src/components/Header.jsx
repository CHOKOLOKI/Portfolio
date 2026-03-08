import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 border-4 border-white bg-gradient-uniform backdrop-blur-md shadow-lg ${isMenuOpen ? 'w-[calc(100%-40px)] rounded-[35px]' : 'w-fit rounded-[70px]'}`}>
      <nav className="flex items-center justify-center py-2 px-4">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center p-2.5 cursor-pointer z-[101]" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-1 bg-white transition-all duration-300">
            <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0 bg-transparent' : '-translate-y-2'}`}>
               {!isMenuOpen && <span className="absolute inset-0 bg-white"></span>}
            </span>
            <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}></span>
            <span className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </div>
        </button>

        <ul className={`list-none m-0 p-0 flex-col md:flex-row gap-1.5 md:flex ${isMenuOpen ? 'flex w-full py-2.5 px-0' : 'hidden'}`}>
          <li>
            <a href="#hero" onClick={closeMenu} className="inline-block py-2 px-4 no-underline text-white font-bold transition-all duration-300 rounded-[50px] border-4 border-transparent hover:border-white hover:bg-gradient-opposite text-center block w-full md:w-auto">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="inline-block py-2 px-4 no-underline text-white font-bold transition-all duration-300 rounded-[50px] border-4 border-transparent hover:border-white hover:bg-gradient-opposite text-center block w-full md:w-auto">
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu} className="inline-block py-2 px-4 no-underline text-white font-bold transition-all duration-300 rounded-[50px] border-4 border-transparent hover:border-white hover:bg-gradient-opposite text-center block w-full md:w-auto">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="inline-block py-2 px-4 no-underline text-white font-bold transition-all duration-300 rounded-[50px] border-4 border-transparent hover:border-white hover:bg-gradient-opposite text-center block w-full md:w-auto">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
