import { type TechnologiesProps } from "../../Type";

export interface TechCardProps {
  tech: TechnologiesProps;
}
export default function TechCard({ tech }: TechCardProps) {
  return (
    <div className="w-full max-w-sm bg-white border border-slate-100 rounded-[28px] p-6 shadow-sm font-sans">
      {/* Top Row: Icon & Badge */}
      <div className="flex items-center justify-between mb-5">
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-10 h-10 object-contain"
          />
        </div>

        {tech.badge && (
          <span className="bg-[#E0F2FE]/60 text-[#38BDF8] text-xs font-semibold px-3 py-1 rounded-full">
            {tech.badge}
          </span>
        )}
      </div>

      {/* Content: Title & Description */}
      <div className="mb-6 space-y-2">
        <h3 className="text-2xl font-bold text-[#0F172A]">{tech.name}</h3>
        <p className="text-sm text-slate-400 leading-relaxed font-normal">
          {tech.description}
        </p>
      </div>

      {/* Meta Row: Tag, Skill Level & Rating */}
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

      {/* Action Button */}
      <button className="w-full bg-[#0B0F17] hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-xl transition-colors duration-200">
        Add to Stack
      </button>
    </div>
  );
}
