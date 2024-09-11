import git from "/Rodape/git-logo.png"
import logo from "/auto-logo.png"

export default function Rodape(){
    return(
        <footer>
            <div>
                <div className="esquerda">
                    <div className="auto-sense">
                        <img src={logo} alt="auto-sense-logo" />
                        <p>Auto Sense</p>
                    </div>
                    <img src={git} alt="github-logo" />
                </div>
                <div>
                    <li>Cadastre-se</li>
                    <li>Entre em contato</li>
                    <li>Quem Somos</li>
                </div>
            </div>
            <div className="copy">
                <p>&copy; 2024 Auto Sense</p>
            </div>
        </footer>
    );
}