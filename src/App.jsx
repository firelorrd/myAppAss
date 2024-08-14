
import Aboutsection from "./assets/Components/Navigation/Aboutsection"
import Footer from "./assets/Components/Navigation/Footer"
import Herosection from "./assets/Components/Navigation/Herosection"
import Nav from "./assets/Components/Navigation/Nav"
import Partnersection from "./assets/Components/Navigation/Partnersection"
import Productsection from "./assets/Components/Navigation/productSection"

const App = () => {
  return (
    <div>
        <Nav />
        <Herosection />
        <Productsection />
        <Aboutsection />
        <Partnersection />
        <Footer />
    </div>
  )
}

export default App