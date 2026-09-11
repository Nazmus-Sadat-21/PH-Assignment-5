import { use, useState, type Dispatch, type SetStateAction } from 'react';
import { type TechnologiesProps } from '../../Type';
import TechCard from './TechCard';

export interface TechnologiesPageProps {
  Technologies: Promise<TechnologiesProps[]>;
    selectedTech : TechnologiesProps[];
    setselectedTech : Dispatch<SetStateAction<TechnologiesProps[]>>
};

export default function Technologies({ Technologies,selectedTech,setselectedTech }: TechnologiesPageProps) {
    const Data = use(Technologies);
    
   
  return (
    <>
        <div className="w-full max-w-8xl container mx-auto px-4 py-8 ">
            <h2 className="text-3xl font-bold mb-4">Explore The <span className="text-blue-500">Technologies</span></h2>
            <p className="text-slate-600">Pick one Technology per category to build your ideal stack</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4 transition-all hover:scale-100">
                {
                   Data.map((tech, ind) => (
                     <TechCard
                       key={ind}
                       tech={tech}
                       selectedTech={selectedTech}
                       setselectedTech={setselectedTech}
                     />
                   ))
                }
            </div>
        </div>
    </>
  );
}
