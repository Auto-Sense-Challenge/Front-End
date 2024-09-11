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
                    <img src={logo} alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
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