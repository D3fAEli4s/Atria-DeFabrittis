function NavBar() {
    return (
        <>
            <header>
                <nav className="navHeader">
                <h1>Atria</h1>
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
                    <button id="carrito">
                        <a href="#">Carrito</a>
                    </button>
                </nav>
            </header>
        </>
    )
}

export default NavBar;