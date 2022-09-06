import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = ({type}) => {

    if(type === "header"){
      return (
        <nav className="navHeader shadow-lg">
            <Link to="/">
                <img src="img/atriaicon.svg" alt="atriaLogo" className="atriaLogo"/>
            </Link>

            <label for="menu" class="navLabel">
                <i class="bi bi-list fs-1"></i>
            </label>
            <input type="checkbox" id="menu" class="navInput"></input>

            <ul className="ulNav navMenu">
                <li class="navCancelar">
                    <label for="menu" class="navLabel">
                        <i class="bi bi-x-square-fill fs-3"></i>
                    </label>
                </li>
                <li>
                    <Link to="/category/pacoRabanne" className="enlacesNavBar">Paco Rabanne</Link>
                </li>
                <li>
                    <Link to="/category/ralphLauren" className="enlacesNavBar">Ralph Lauren</Link>
                </li>
                <li>
                    <Link to="/category/armani" className="enlacesNavBar">Armani</Link>
                </li>
            </ul>
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </nav>
      )
    }else{
      return (
        <nav className="navHeader">
            <Link to="/">
                <img src="img/atriaicon.svg" alt="atriaLogo" className="atriaLogo"/>
            </Link>
            <ul id="ulFooter">
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