import { Link, NavLink } from "react-router-dom";
import CardWidget from "./CardWidget";

const NavBar = ({type}) => {

    if(type === "header"){
      return (
        <nav className="navHeader">
            <Link to="/">
                <img src="img/atriaicon.svg" alt="atriaLogo" className="atriaLogo"/>
            </Link>
            <ul className="ulNav">
                <li>
                    <NavLink as={Link} to="/category/pacoRabanne" className="enlacesNavBar">Paco Rabanne</NavLink>
                </li>
                <li>
                    <NavLink as={Link} to="/category/ralphLauren" className="enlacesNavBar">Ralph Lauren</NavLink>
                </li>
                <li>
                    <NavLink as={Link} to="/category/armani" className="enlacesNavBar">Armani</NavLink>
                </li>
            </ul>
            <NavLink to="/cart">
                <CardWidget/>
            </NavLink>
        </nav>
      )
    }else{
      return (
        <nav className="navHeader">
            <ul className="ulFooter">
                <li>
                    <NavLink as={Link} to="/category/pacoRabanne" className="enlacesNavBar">Paco Rabanne</NavLink>
                </li>
                <li>
                    <NavLink as={Link} to="/category/ralphLauren" className="enlacesNavBar">Ralph Lauren</NavLink>
                </li>
                <li>
                    <NavLink as={Link} to="/category/armani" className="enlacesNavBar">Armani</NavLink>
                </li>
            </ul>
        </nav>
      )
    }
  
  }
  
  export default NavBar