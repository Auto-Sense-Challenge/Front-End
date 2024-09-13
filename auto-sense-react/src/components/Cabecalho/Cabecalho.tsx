import { Link } from "react-router-dom";
import logo from "/Logo-home.png"
import modo  from "/Cabecalho/modo.png"
import foto from "/Cabecalho/foto-user.png"
import abriMenu from "/Cabecalho/menu-img.png"
import { useState } from "react";

export default function Cabecalho(){

    const [navAberto, setNavAberto] = useState(false);

    const mudarNav = () => {
        setNavAberto(false);
        if(!navAberto){
            setNavAberto(true)
        }
      };
    
    return(
        <header>
            <div className="cabecalho">
                <div className="auto-sense">
                    <img src={logo} alt="auto-sense-logo" />
                    <h1>Auto Sense</h1>
                </div>

                <div className="btn-nav">
                    <button onClick={()=> mudarNav()}>
                        <img src={abriMenu} alt="img-menu"/>
                    </button>
                </div>

                <div className="mudar-modo">
                    <label htmlFor="switch">
                        <button type="submit" className="switch">
                            <img src={modo} alt="mudar-tema-img" />
                        </button>
                    </label>
                </div>

                <div className="user">
                    <div>
                        <img src={foto} alt="user-foto" />
                    </div>
                    <p>&gt;</p>
                </div>
                
                <dialog open={navAberto} className="nav-dialog">
                    <nav className="menu">
                        <Link to={"/"}>Index</Link>
                        <Link to={"/Sobre"}>Sobre</Link>
                        <Link to={"/Perguntas"}>Perguntas</Link>
                        <Link to={"/Cadastro"}>Cadastro</Link>
                        <Link to={"/Veiculos"}>Veiculos</Link>
                    </nav>
                </dialog>
            </div>
        </header>
    );
}