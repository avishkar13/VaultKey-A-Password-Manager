import Navbar from "./components/Navbar"
import Manager from "./components/Manager"
import Footer from "./components/Footer"

function App() {


  return (
    <>
    <Navbar/>
    <div className="min-h-[60vh] md:min-h-[88vh]">
    <Manager/>
    </div>
    <Footer/>
    </>
  )
}

export default App
