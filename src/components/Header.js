import Above from "../AboveComponent/Above";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import './navbar.css'
const Header = () => {
  return ( 
    <div>
         <Above /> 
      <header className="header_nav">
      <div className="nav-area">
        {/* for large screens */}
        <Navbar />
        {/* for small screens */}
        <MobileNav />
      </div>
    </header>
   
    </div> 

  );
};

export default Header;