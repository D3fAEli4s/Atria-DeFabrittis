import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Main uno={true} dos={1} tres={"Horacio"}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;