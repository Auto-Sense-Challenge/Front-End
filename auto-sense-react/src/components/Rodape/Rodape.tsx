import { Link } from "react-router-dom";
import git from "/Rodape/git-logo.png"
import logo from "/auto-logo.png"

export default function Rodape(){
    return(
        <footer>
            <div className="cima-footer">
                <div className="esquerda">
                    <div className="auto-sense-footer">
                        <img src={logo} alt="auto-sense-logo-footer" />
                        <p>Auto Sense</p>
                    </div>
                    <div className="icone-git-footer">
                        <a href="https://github.com/Auto-Sense-Challenge" target="_blank">
                            <img src={git} alt="github-logo"/>
                        </a>
                    </div>
                
                </div>
                <ul>
                    <li><Link to={"/Sobre"}>Quem Somos</Link></li>
                    <li><Link to={"/Cadastro"}>Cadastre-se</Link></li>    
                </ul>
            </div>
           
            <div className="copy">
                <p>&copy; 2024 Auto Sense. Todos os direitos reservados</p>
            </div>
        </footer>
    );
}