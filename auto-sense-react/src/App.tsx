import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

// Importe dos estilos das paginas
import "./style/style.scss";

export default function App(){
  return(
    <body className="Container">
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </body> 
  )
}