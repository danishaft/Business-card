import Info from "./components/Info"
import About from "./components/About"
import Interest from "./components/Interest"
import Footer from "./components/Footer"


function App(){
    return(
        <main className="container">
            <Info />
            <About />
            <Interest />
            <Footer />
        </main>
    )
}

export default App