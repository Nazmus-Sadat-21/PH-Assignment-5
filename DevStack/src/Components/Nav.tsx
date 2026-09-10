import logo from "../assets/logo-text.png"
export default function Nav() {
    
    return (
        <>
            <div className="bg-base-100 shadow-lg sticky top-0 z-50 ">
                <div className="flex justify-between items-center  p-4 container mx-auto">
                <img src={logo} alt="Dev Stack png" />
                <div>
                    <ul className="flex gap-6">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Technologies</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="flex gap-2">
                    
                    <button className="btn btn-white rounded-3xl">Sign In</button>
                    <button className="btn btn-error text-white rounded-3xl">Sign Up</button>
                </div>
            </div>
            </div>
        </>
    )
}