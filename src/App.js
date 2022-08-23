import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"
import { MyProvider } from "./components/CartContext";

const App = () => {
    return (
        <BrowserRouter>
            <MyProvider>
                <Header/>
                <Main/>
                <Footer/>
            </MyProvider>
        </BrowserRouter>
    )
}

export default App;