const Banner = () => {
    return (
       
        <div className="w-full bg-white py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                 
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
                            Build Your Ideal <br />
                           
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600">
                                Development Stack
                            </span>
                        </h1>
                        
                        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits your
                            next project.
                        </p>
                        
                        
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                           
                            <button className="btn border-none text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 normal-case px-8 rounded-lg shadow-md">
                                Explore Technologies
                            </button>
                            
                           
                            <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 normal-case px-8 rounded-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end relative">
                        
                        <img 
                            src="/src/assets/banner-stack.png" 
                            alt="Development Stack Illustration" 
                            className="w-full max-w-md lg:max-w-lg object-contain relative z-10"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;