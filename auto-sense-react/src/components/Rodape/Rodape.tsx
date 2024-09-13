import { Link } from "react-router-dom";
import git from "/Rodape/git-logo.png"
import logo from "/auto-logo.png"

export default function Rodape(){
    return(
        <footer>
            <div className="esquerda">
                <div className="auto-sense-footer">
                    <img src={logo} alt="auto-sense-logo-footer" />
                    <p>Auto Sense</p>
                </div>
                <img src={git} alt="github-logo" />
            </div>
                <ul>
                    <li>Entre em contato</li>
                    <li><Link to={"/Sobre"}>Quem Somos</Link></li>
                    <li><Link to="/Cadastro">Cadastre-se</Link></li>    
                </ul>
            <div className="copy">
                <p>&copy; 2024 Auto Sense</p>
            </div>
        </footer>
    );
}