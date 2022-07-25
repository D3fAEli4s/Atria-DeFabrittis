import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar"

const Header = () => {
    return (
        <>
            <header className="header">
                <NavBar
                    type="header"
                />
                <ItemListContainer test={true} nombre="D3fa"/>
            </header>
        </>
    )
}

export default Header;