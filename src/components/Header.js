import NavBar from "./NavBar"


const Header = () => {
    return (
        <>
            <header className="header">
                <NavBar
                    type="header"
                />
                {/* <ItemListContainer test={true} nombre="Alguien"/> */}
            </header>
        </>
    )
}

export default Header;