import { Link, useNavigate } from 'react-router-dom'; 
import "../Styles/Navbar.css";


const Navbar = () => {

  const Nevigate= useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");
  
  const logout=()=>{
    localStorage.removeItem("token");
    Nevigate("/");
  }

  return (
    
   <nav className="navbar">
      <ul className="navLinks">
        <li className="link"><Link to="/Home">Home</Link></li>
        <li className="link"><Link to="/Home/cart">Cart</Link></li>
        <li><button className="button" onClick={()=>logout()}>Logout</button></li>
            {isAdmin ?
            <>
            
            <li><Link to="/Home/addproduct"><button className="button">Add a Product</button> </Link></li>
            </>:<>
          </>}
      </ul>
    </nav>
  );
  
};

export default Navbar;