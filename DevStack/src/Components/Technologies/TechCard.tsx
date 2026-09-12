import {  type Dispatch, type SetStateAction } from "react";
import { type TechnologiesProps } from "../../Type";
import { toast } from "react-toastify";

export interface TechCardProps {
  tech: TechnologiesProps;
  selectedTech: TechnologiesProps[];
  setselectedTech: Dispatch<SetStateAction<TechnologiesProps[]>>;
  
}
export default function TechCard({
  tech,
  selectedTech,
  setselectedTech,
  
}: TechCardProps) {

//const [isAdded, setIsAdded] = useState(false);

  const isAdded = selectedTech.some(
    (item) => item.name === tech.name
  );

  const handleAddToStack = () => {
     if(isAdded)
      return
    const newTech = [...selectedTech, tech];
    setselectedTech(newTech);
    toast.success(`${tech.name} Added Successfully`);
    // setIsAdded(true);
  };

  return (
    <div
      className={`w-full max-w-sm bg-white border rounded-[28px] p-6 shadow-sm font-sans transition-all hover:scale-100 ${
        isAdded ? "border-secondary" : "border-slate-100"
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
          />
        </div>

        {tech.badge && (
          <span className="bg-soft text-secondary text-xs font-semibold px-3 py-1 rounded-full">
            {tech.badge}
          </span>
        )}
      </div>

      <div className="mb-6 space-y-2">
        <h3 className="text-2xl font-bold text-[#0F172A]">{tech.name}</h3>
        <p className="text-sm text-slate-400 leading-relaxed font-normal">
          {tech.description}
        </p>
      </div>

      <div className="flex items-center justify-between mb-6 text-xs">
        <span className="bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-md">
          {tech.category}
        </span>

        <span className="text-slate-500 font-medium">{tech.difficulty}</span>

        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 fill-amber-400 text-amber-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-bold text-slate-700 text-xs">
            {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={handleAddToStack}
        className={
          isAdded
            ? " w-full rounded-xl btn btn-soft btn-secondary pointer-events-none"
            : "w-full bg-[#0B0F17] hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-xl transition-colors duration-200"
        }
      >
        {isAdded === true ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

// import { type Dispatch, type SetStateAction } from "react";
// import { type TechnologiesProps } from "../../Type";
// import { toast } from "react-toastify";

// export interface TechCardProps {
//   tech: TechnologiesProps;
//   selectedTech: TechnologiesProps[];
//   setselectedTech: Dispatch<SetStateAction<TechnologiesProps[]>>;
// }

// export default function TechCard({
//   tech,
//   selectedTech,
//   setselectedTech,
// }: TechCardProps) {

//   // Check whether this technology is already in the stack
//   const isAdded = selectedTech.some(
//     (item) => item.name === tech.name
//   );

//   const handleAddToStack = () => {
//     // Prevent duplicate technology
//     if (isAdded) return;

//     setselectedTech((prev) => [...prev, tech]);

//     toast.success(`${tech.name} Added Successfully`);
//   };

//   return (
//     <div
//       className={`w-full max-w-sm bg-white border rounded-[28px] p-6 shadow-sm font-sans transition-all hover:scale-100 ${
//         isAdded ? "border-secondary" : "border-slate-100"
//       }`}
//     >
//       <div className="flex items-center justify-between mb-5">
//         <div className="w-10 h-10 flex items-center justify-center">
//           <img
//             src={tech.icon}
//             alt={tech.name}
//             className="w-10 h-10 object-contain"
//           />
//         </div>

//         {tech.badge && (
//           <span className="bg-soft text-secondary text-xs font-semibold px-3 py-1 rounded-full">
//             {tech.badge}
//           </span>
//         )}
//       </div>

//       <div className="mb-6 space-y-2">
//         <h3 className="text-2xl font-bold text-[#0F172A]">
//           {tech.name}
//         </h3>

//         <p className="text-sm text-slate-400 leading-relaxed font-normal">
//           {tech.description}
//         </p>
//       </div>

//       <div className="flex items-center justify-between mb-6 text-xs">
//         <span className="bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-md">
//           {tech.category}
//         </span>

//         <span className="text-slate-500 font-medium">
//           {tech.difficulty}
//         </span>

//         <div className="flex items-center gap-1">
//           <svg
//             className="w-4 h-4 fill-amber-400 text-amber-400"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>

//           <span className="font-bold text-slate-700 text-xs">
//             {tech.rating}
//           </span>
//         </div>
//       </div>

//       <button
//         onClick={handleAddToStack}
//         disabled={isAdded}
//         className={
//           isAdded
//             ? "w-full rounded-xl btn btn-soft btn-secondary"
//             : "w-full bg-[#0B0F17] hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-xl transition-colors duration-200"
//         }
//       >
//         {isAdded ? "✓ Added to Stack" : "Add to Stack"}
//       </button>
//     </div>
//   );
// }