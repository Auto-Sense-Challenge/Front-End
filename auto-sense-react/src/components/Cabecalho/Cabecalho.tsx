import { Link } from "react-router-dom";
import logo from "/auto-logo.png"
import modo  from "/Cabecalho/modo.png"
import foto from "/Cabecalho/foto-user.png"

export default function Cabecalho(){
    return(
        <header>
            <div className="cabecalho">
                <div className="auto-sense">
                    <img src={logo} alt="auto-sense-logo" />
                    <h1>Auto Sense</h1>
                </div>
                <div className="mudar-modo">
                    <img src={modo} alt="mudar-tema-img" />
                </div>
                <div className="user">
                    <div>
                        <img src={foto} alt="user-foto" />
                    </div>
                    <p>&gt;</p>
                </div>
            </div>

            <nav className="menu">
                <Link to={"/"}>Index</Link>
                <Link to={"/Sobre"}>Sobre</Link>
                <Link to={"/Perguntas"}>Perguntas</Link>
                <Link to={"/Cadastro"}>Cadastro</Link>
                <Link to={"/Veiculos"}>Veiculos</Link>
            </nav>
        </header>
    );
}