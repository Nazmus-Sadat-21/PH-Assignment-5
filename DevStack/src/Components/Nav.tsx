import logo from "../assets/logo-text.png";
import logo2 from "../assets/hamburger.png";
export default function Nav() {
  return (
    <>
      
      <div className="bg-base-100 shadow-lg sticky top-0 z-50">
        <div className="flex justify-between items-center p-4 container mx-auto">
          
          <img src={logo2} alt="" className="md:hidden" />

          
          <img src={logo} alt="Dev Stack png" className="w-32 md:w-auto" />

          
          <div className="hidden md:block">
            <ul className="flex gap-6">
              <li className="text-secondary">
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Technologies</a>
              </li>

              <li>
                <a href="#">Projects</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex gap-2">
            <button className="btn btn-white rounded-3xl btn-sm md:btn-md">
              Sign In
            </button>

            <button className="btn btn-error text-white rounded-3xl btn-sm md:btn-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    
    </>
  );
}
