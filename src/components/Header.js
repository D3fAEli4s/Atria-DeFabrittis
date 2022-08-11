import ItemListContainer from "./ItemListContainer";
import NavBar from "./NavBar"
import { ItemDetailContainer } from "./ItemDetailContainer";

const Header = () => {
    return (
        <>
            <header className="header">
                <NavBar
                    type="header"
                />
                <ItemListContainer test={true} nombre="Alguien"/>
                <ItemDetailContainer/>
            </header>
        </>
    )
}

export default Header;