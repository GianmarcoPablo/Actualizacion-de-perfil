import { useState } from "react"
import Header from "./Components/Header"
import ActualizarPerfil from "./Components/ActualizarPerfil"
import InformacionUsuario from "./Components/InformacionUsuario"
import imagen from "./assets/logoEmpresa.png";

function App() {

  const [usuario, setUsuario] = useState([])
  const [user,setUser] = useState({})

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <img 
        src={imagen}
        alt="Imagen"
        className="w-80 absolute top-14 left-80"
      />

      <div className="mt-12 md:flex"> 
        <ActualizarPerfil
          usuario={usuario}
          setUsuario={setUsuario}
          user={user}
        />
        <InformacionUsuario 
          usuario={usuario}
          setUser={setUser}
        />
      </div>
    </div>
  )
}

export default App
