import React from 'react';

const Navbar = () => {
    return (
      
        <nav className="w-full bg-white py-4 px-6 md:px-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                
                <div className="flex items-center gap-2">
                   
    
                    <img src="/src/assets/logo-text.png" alt="Logo" className="h-8" />
                    
                </div>

             
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <li className="text-[#D91B7E] cursor-pointer">Home</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Technologies</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Projects</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">About</li>
                    <li className="hover:text-[#D91B7E] cursor-pointer transition-colors">Contact</li>
                </ul>

               
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-gray-600 hover:text-[#D91B7E] transition-colors">
                        Sign In
                    </button>
                    
                    <button className="btn btn-sm h-10 px-6 rounded-full bg-[#D91B7E]  text-white border-none normal-case text-sm font-medium">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;