import React, { use } from 'react';
import type iTechnology from '../Types/TechnologyTypes'; // আপনার টাইপ ইমপোর্ট ঠিক আছে
import TechnologyCard from './TechnologyCard';

interface technologyProps {
    technologyPromise: Promise<iTechnology[]>
}

const Technology = ({ technologyPromise }: technologyProps) => {
    const technologyFetchData = use(technologyPromise);

    return (
        <div className="w-full bg-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                
               
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                        Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600">Technologies</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

               
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {
                            technologyFetchData.map((technology,index) => (
                               <TechnologyCard key={index} technology={technology}></TechnologyCard>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Technology;