import logo from "../assets/logo-text.png"
export default function Nav() {
    
    return (
        <>
            <div>
                <img src={logo} alt="Dev Stack png" />
                <div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    )
}