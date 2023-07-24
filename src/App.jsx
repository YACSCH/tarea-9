import Title from "./components/Title"
import Caracteristics from "./components/Caracteristics"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Carrousel from "./components/Carrousel"


function App() {
  return (
    <div className="contenedor">
      <Header/>
      <Carrousel/>
      <Title/>
      <Caracteristics/>
      <Footer/>
    </div>
    
  )
}

export default App
