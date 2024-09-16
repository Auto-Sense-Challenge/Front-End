import Erick from "/Sobre/img-Erick.png"
import Luiz from "/Sobre/img-Luiz.png"
import Vicenzo from "/Sobre/img-Vicenzo.png"
import Github from "/Sobre/git-logo.png"
import Instagram from "/Sobre/insta-logo.png"


export default function Sobre(){
    return(
        <main className="info-main">
            <div className="info">
                <h1>Quem Somos</h1>
                <p>Somos estudantes do primeiro ano de Análise e Desenvolvimento de Sistema dentro da FIAP. Criamos nosso sistema chamado Auto Sense com intuito de ajudar na hora que der problema em veículos da população. Oferecendo um canal digital com ChatBot para gerar velocidade e assertividade no diagnóstico do problema do veículo, sem intervenção humana. Problema este que foi apresentado no nosso primeiro challenge do curso proposto pela Porto Seguro.</p>
            </div>
            <div className="pessoas">
                <div className="pessoa">
                    <img className="nos" src={Erick} alt="Erick-img" />
                    <div className="dados">
                        <p className="nome">Erick Alves Xavier dos Santos</p>
                        <p className="sala-rm">1TDSPM / RM556862</p>
                        <div className="rede-pessoa">
                            <a href="https://github.com/Erick0105" target="_blank">
                                <img src={Github} alt="logo-Github" />
                            </a>
                            <a href="https://www.instagram.com/erick_0105_/" target="_blank">
                                <img src={Instagram} alt="logo-Instagram" />
                            </a>
<<<<<<< HEAD
                            <a href="https://www.linkedin.com/in/erick-alves-295180235/" target="_blank">
                                <img className="linkedin" src={Linkedin} alt="logo-Linkedin" />
                            </a>
=======
>>>>>>> e596db946592909a30bfffbbafb4aeb2fe443eab
                        </div>
                        
                    </div>
                </div>
                <div className="pessoa">
                    <img className="nos" src={Luiz} alt="Luiz-img" />
                    <div className="dados">
                        <p className="nome">Luiz Henrique Neri Reimberg</p>
                        <p className="sala-rm">1TDSPM / RM556864</p>
                        <div className="rede-pessoa">
                            <a href="https://github.com/LuizHNR" target="_blank">
                                <img src={Github} alt="logo-Github" />
                            </a>
                            <a href="https://instagram.com/loren_lhnr" target="_blank">
                                <img src={Instagram} alt="logo-Instagram" />
                            </a>
<<<<<<< HEAD
                            <a href="https://www.linkedin.com/in/luiz-henrique-neri-reimberg-6ab0032b8/" target="_blank">
                                <img className="linkedin" src={Linkedin} alt="logo-Linkedin" />
                            </a>
=======
>>>>>>> e596db946592909a30bfffbbafb4aeb2fe443eab
                        </div>
                        
                    </div>
                </div>
                <div className="pessoa">
                    <img className="nos" src={Vicenzo} alt="Vicenzo-img" />
                    <div className="dados">
                        <p className="nome">Vicenzo Massao de Oliveira</p>
                        <p className="sala-rm">1TDSPM / RM554833</p>
                        <div className="rede-pessoa">
                            <a href="https://github.com/fFukurou" target="_blank">
                                <img src={Github} alt="logo-Github" />
                            </a>
                            <a href="https://instagram.com/ffukurou_" target="_blank">
                                <img src={Instagram} alt="logo-Instagram" />
                            </a>
<<<<<<< HEAD
                            <a href="https://www.linkedin.com/in/vicenzo-massao-de-oliveira-2a8b35109/" target="_blank">
                                <img className="linkedin" src={Linkedin} alt="logo-Linkedin" />
                            </a>
=======
>>>>>>> e596db946592909a30bfffbbafb4aeb2fe443eab
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}