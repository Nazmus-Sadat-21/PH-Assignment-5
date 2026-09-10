import logo from "../assets/banner-stack.png";
export default function Banner() {
  return (
    <>
      <div className="container mx-auto px-3 py-15">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Build Your Ideal
            </h1>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className=" px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-105 transition">
                Explore Technologies
              </button>

              <button className="px-8 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
                Learn More
              </button>
            </div>
          </div>

          
          <div>
            <img
              src={logo}
              alt="Development Stack"
              className="w-[450px] lg:w-[600px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
