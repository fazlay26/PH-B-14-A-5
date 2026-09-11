import React, { useState } from 'react';
import type iTechnology from '../Types/TechnologyTypes';
import { TiTick } from 'react-icons/ti';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface technologyCardProps{
    technology: iTechnology;
}

const TechnologyCard = ({technology}:technologyCardProps) => {
    const [isAddToStack,setIsAddToStack] = useState(false);
    return (
         <div className={`${isAddToStack === true ? 'card bg-white border border-[#D91B7E] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow' : 'card bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full'} `}>
                                    
                                   
                                    <div className='flex justify-between items-start mb-4'>
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-[11px] font-semibold px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 rounded-full">
                                            {technology.badge}
                                        </span>
                                    </div>

                                    
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{technology.name}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                                        {technology.description}
                                    </p>

                                   
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                                                {technology.category}
                                            </span>
                                            <span className="text-[11px] font-medium text-gray-500">
                                                {technology.difficulty}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs font-bold text-gray-700">
                                            <span className="text-yellow-500 text-sm">★</span>
                                            {technology.rating}
                                        </div>
                                    </div>
                                  
                                   
                                    <button disabled={isAddToStack === true ? true:false} onClick={()=>{setIsAddToStack(true)
                                        toast.success("Added to Stack")
                                        
                                    }} className={`${isAddToStack === true ? 'btn text-[#D91B7E]' : 'w-full btn btn-sm h-10 bg-gray-900 hover:bg-gray-800 text-white border-none rounded-lg normal-case text-sm font-medium mt-auto'}`}>
                                       {isAddToStack && <FaCheck className="text-lg" />}  
                                       
                                       {isAddToStack === true ? `Added to Stack` : " Add to Stack"}
                                    </button>
                                </div>
    );
}

export default TechnologyCard;