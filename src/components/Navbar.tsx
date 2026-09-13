import  { useState } from 'react';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <nav className="w-full bg-white py-4 px-6 md:px-12 border-b border-gray-100 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                
                <div className="grid grid-cols-2 items-center gap-3">
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        
                    >
                       {isMenuOpen ?  <RxCross2 size={26} /> : <RxHamburgerMenu size={26} />}
                    </button>

                    <img src="/src/assets/logo-text.png" alt="Logo" className="h-8" />
                </div>

                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <li className="text-[#D91B7E] cursor-pointer">Home</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Technologies</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Projects</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">About</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Contact</li>
                </ul>

               
                <div className="flex items-center gap-2 md:gap-4">
                    <button className="text-sm font-medium text-gray-600 hover:text-[#D91B7E] transition-colors">
                        Sign In
                    </button>

                    <button className="btn btn-sm h-10 px-4 md:px-6 rounded-full bg-[#D91B7E] text-white border-none normal-case text-sm font-medium">
                        Sign Up
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-md z-50">
                    <ul className="flex flex-col py-4 px-6 gap-4 text-sm font-medium text-gray-600">
                   <li className="text-[#D91B7E] cursor-pointer">Home</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Technologies</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Projects</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">About</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;