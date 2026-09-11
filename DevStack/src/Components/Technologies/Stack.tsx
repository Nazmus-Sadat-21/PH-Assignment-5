export default function Stack() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      
      <div className="w-full max-w-[340px] bg-white rounded-[28px] p-6 shadow-sm border border-slate-100">
        
       
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Your Stack
          </h2>
          <p className="text-slate-400 text-sm mt-1 font-normal">
            No technologies selected yet.
          </p>
        </div>

        
        <div className="mt-6 border border-dashed border-slate-200 rounded-2xl py-8 text-center">
          <p className="text-slate-400 text-sm font-normal">
            Your stack is empty.
          </p>
        </div>

      </div>
    </div>
  )
}
