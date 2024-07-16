import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
   return (
      <div>
         <nav className="navbar section-container">
            <div className="logo">
               <img src="https://stackfood-react-site.6amtech.com/wp-content/uploads/2022/12/Group-34563.png" alt="" />
            </div>
            <div className="navbar-links">
               <ul className="navbar-nav">
                  <li><Link className="link" to=''>Home</Link></li>
                  <li><Link className="link" to=''>Features</Link></li>
                  <li><Link className="link" to=''>Pricing</Link></li>
                  <li><Link className="link" to=''>Clients</Link></li>
                  <li><button>Support</button></li>
               </ul>
            </div>
         </nav>
      </div>
   );
};
export default NavBar;