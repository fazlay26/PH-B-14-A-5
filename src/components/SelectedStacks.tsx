import { type Dispatch, type SetStateAction } from 'react';
import type iTechnology from '../Types/TechnologyTypes';
import { RxCross1 } from 'react-icons/rx';

interface SelectedStacksProps {
    selectedStacks: iTechnology[];
    setSelectedStacks: Dispatch<SetStateAction<iTechnology[]>>;
}

const SelectedStacks = ({ selectedStacks, setSelectedStacks }: SelectedStacksProps) => {
    
    //console.log(selectedStacks);
    const handleRemoveTech = (selectedStack:iTechnology) =>{

     
      const afterRemoveTechStacks = selectedStacks.filter((stack)=>stack.name !== selectedStack.name);
        setSelectedStacks(afterRemoveTechStacks);
       
    }
    const handleRemoveAll = () =>{
       setSelectedStacks([])
    }
   
    

    return (
       
        <div className="card bg-white border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-6">
            
            {/* Header Section */}
            <h2 className='text-lg font-bold text-gray-900 mb-1'>Your Stack</h2>
            <p className='text-xs text-gray-500 mb-6'>
                {selectedStacks.length > 0 
                    ? `${selectedStacks.length} Technology Selected` 
                    : "No technologies selected yet."}
            </p>

            
            <div className="flex flex-col gap-3 mb-6">
                {
                    selectedStacks.map((selectedStack,index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-sm"
                        >
                            
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <img 
                                        src={selectedStack.icon} 
                                        alt={selectedStack.name} 
                                        className="w-full h-full object-contain" 
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <span className="text-sm font-semibold text-gray-800">
                                    {selectedStack.name}
                                </span>
                                <span className="text-sm font-light text-gray-400">
                                    {selectedStack.category}
                                </span>
                                </div>
                            </div>

                            
                            <button onClick={()=>{handleRemoveTech(selectedStack)}} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <RxCross1 />
                            </button>
                        </div>
                    ))
                }
            </div>

           
            {selectedStacks.length === 0 && (
                <div className="w-full h-32 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50/50 mb-6">
                    <p className="text-sm text-gray-400">Your stack is empty.</p>
                </div>
            )}

            
            {selectedStacks.length > 0 && (
                <button onClick={handleRemoveAll} className="w-full btn btn-sm h-10 bg-white hover:bg-gray-50 text-red-500 border border-red-200 rounded-lg normal-case text-sm font-medium mt-auto">
                    Remove All
                </button>
            )}
            
        </div>
    );
};

export default SelectedStacks;