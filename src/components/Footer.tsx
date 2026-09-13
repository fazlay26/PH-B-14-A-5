
const Footer = () => {
    return (
        <footer className="w-full bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    
                    <div className="lg:col-span-2 space-y-5 pr-8">
                       
                        <div className="flex items-center gap-2">
                            <img src="/src/assets/logo-text.png" alt="Logo" className="h-8" />
                            
                        </div>
                        
                       
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm font-medium text-gray-700 pt-2">
                            <a href="#" className="hover:text-[#D91B7E] transition-colors">GitHub</a>
                            <a href="#" className="hover:text-[#D91B7E] transition-colors">Twitter</a>
                            <a href="#" className="hover:text-[#D91B7E] transition-colors">LinkedIn</a>
                        </div>
                    </div>

                   
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">Technologies</a></li>
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">Projects</a></li>
                        </ul>
                    </div>

                   
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">Careers</a></li>
                        </ul>
                    </div>

                   
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#D91B7E] transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;