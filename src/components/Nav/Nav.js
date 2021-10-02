import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    
    return (
            <nav style={{padding:'30px', background:'#001E3C' , textAlign: 'center'}}>
                <NavLink className="app" to="/home">Home</NavLink>
                <NavLink className="app" to="/our-restaurent">Our Restaurent</NavLink>
                <NavLink className="app" to="/about">About</NavLink>
                <NavLink className="app" to="/contact">Contact</NavLink>

            </nav>
    );
};

export default Nav;