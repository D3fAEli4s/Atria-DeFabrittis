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
            <ul className="ulNav">
                <li>
                    <Link to="/pacoRabanne" className="enlacesNavBar">Inicio</Link>
                </li>
                <li>
                    <Link to="/ralphLauren" className="enlacesNavBar">Tienda</Link>
                </li>
                <li>
                    <Link to="/armani" className="enlacesNavBar">Contacto</Link>
                </li>
            </ul>
        </nav>
      )
    }
  
  }
  
  export default NavBar