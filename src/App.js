import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main"

const App = () => {
    return (
        <>
            <Header/>
            <Main uno={true} dos={1} tres={"Horacio"}/>
            <Footer/>
        </>
    )
}

export default App;