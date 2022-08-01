import CardWidget from "./CardWidget";

const NavBar = ({type}) => {

    if(type == "header"){
      return (
        <nav className="navHeader">
            <a href="#">
                <img src="img/atriaicon.svg" alt="atriaLogo" className="atriaLogo"/>
            </a>
            <ul className="ulNav">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Tienda</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
            <CardWidget/>
        </nav>
      )
    }else{
      return (
        <nav className="navHeader">
            <ul className="ulNav">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Tienda</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </nav>
      )
    }
  
  }
  
  export default NavBar