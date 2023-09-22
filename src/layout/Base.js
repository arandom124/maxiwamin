import Quiensoy from "../pages/reproductorVista"  
import Idiomas from "../pages/Idiomas"
import Footer from "./Footer"

const Base = () => {
  return (
    <div className="bg-zinc-800 h-full">
      <Quiensoy/>    
      <Idiomas/>
      <Footer/>

      
    </div>
  )
}

export default Base
