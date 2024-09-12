import { Link } from "react-router-dom";
import git from "/Rodape/git-logo.png"
import logo from "/auto-logo.png"

export default function Rodape(){
    return(
        <footer>
            <div className="esquerda">
                <div className="auto-sense">
                    <img src={logo} alt="auto-sense-logo" />
                    <p>Auto Sense</p>
                </div>
                <img src={git} alt="github-logo" />
            </div>
                    <ul>
                        <li><Link to={"/Sobre"}>Quem Somos</Link></li>
                        <li><Link to="/Cadastro">Cadastre-se</Link></li>
                        <li>Entre em contato</li>
                    </ul>
            <div className="copy">
                <p>&copy; 2024 Auto Sense</p>
            </div>
        </footer>
    );
}