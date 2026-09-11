import { useState, type Dispatch, type SetStateAction } from "react";
import { type TechnologiesProps } from "../../Type";
import { toast } from "react-toastify";

export interface TechCardProps {
  selectedTech : TechnologiesProps[];
  setselectedTech : Dispatch<SetStateAction<TechnologiesProps[]>>
}
export default function Stack({ selectedTech, setselectedTech }: TechCardProps) {
  const hasSelectedTech = selectedTech.length > 0;

  const removeTech = (techName: string) => {
    setselectedTech((current) => current.filter((tech) => tech.name !== techName));
    toast.success(`${techName} is removed`)
  };

   const removeAllTech = () => {
    setselectedTech([])
    toast.success("All Tech Items Removed Successfully")
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[340px] bg-white rounded-[28px] p-6 shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Your Stack
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-normal">
            {hasSelectedTech ? `${selectedTech.length} technology selected` : "No technologies selected yet."}
          </p>
        </div>

        {hasSelectedTech ? (
          <div className="mt-6 space-y-3">
            {selectedTech.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2"
              >
                <div className="flex justify-center items-center">
                  <img src={tech.icon} alt="" height={30} width={30}  />
                  <span className="text-sm font-medium text-slate-700 ml-2">{tech.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeTech(tech.name)}
                  className="text-xs font-medium text-slate-500 hover:text-red-500 transition-colors cursor-pointer"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 border border-dashed border-slate-200 rounded-2xl py-8 text-center">
            <p className="text-slate-400 text-sm font-normal">
              Your stack is empty.
            </p>
          </div>
        )}
      <div className="mt-5 flex justify-center ">
        {
         hasSelectedTech ? <button className="btn btn-soft btn-error w-70 h-10 rounded-2xl cursor-pointer" onClick={removeAllTech}>Remove all</button> : ""
        }
      </div>
      </div>
     
    </div>
  );
}
