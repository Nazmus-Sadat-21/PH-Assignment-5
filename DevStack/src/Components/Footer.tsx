import logo from "../assets/logo-text.png"
export default function Footer() {
  return (
    <>
      <footer className="w-full bg-white text-slate-600 pt-16 pb-8 px-6 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto ">
       
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12">
          
            <div className="lg:col-span-5 space-y-4">

              <img src={logo} alt="Dev Stack png" className="w-32" />

             
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

             
              <div className="flex items-center gap-5 pt-2 text-sm font-semibold text-slate-800">
                <a
                  href="#github"
                  className="hover:text-[#d946ef] transition-colors"
                >
                  GitHub
                </a>
                
                <a
                  href="#twitter"
                  className="hover:text-[#d946ef] transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#linkedin"
                  className="hover:text-[#d946ef] transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

         
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Product
                </h3>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#technologies"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>

             
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-slate-900 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              
              <div>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Legal
                </h3>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <a
                      href="#privacy"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terms"
                      className="hover:text-slate-900 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          
          <div className="border-t border-slate-100 my-4" />

         
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4 pt-4">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="hover:text-slate-600 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="hover:text-slate-600 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
