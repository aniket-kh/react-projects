import { LOGO } from "../utils/constant"


const Header = ()=>{
    return (
     <div className="header">
        <div className="logo-container">
     <img className="logo" src= {LOGO}
                           alt="Food Logo" 
                           />
        </div>
        <div className="nav-Items">
        <ul>
           <li>Home</li>
           <li>About Us</li>
           <li>Contact</li>
           <li>🛒</li>
        </ul>
        </div>
     </div>
    )
}

export default Header