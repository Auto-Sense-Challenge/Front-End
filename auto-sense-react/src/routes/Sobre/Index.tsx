import Erick from "/Sobre/img-Erick.png"
import Luiz from "/Sobre/img-Luiz.png"
import Vicenzo from "/Sobre/img-Vicenzo.png"
import Github from "/Sobre/git-logo.png"
import Instagram from "/Sobre/insta-logo.png"
import Linkedin from "/Sobre/linkedin-logo.png"


export default function Sobre(){
    return(
        <main>
            <div className="info">
                <h1>Quem Somos</h1>
                <p>Somos estudantes do primeiro ano de Análise e Desenvolvimento de Sistema dentro da FIAP. Criamos nosso sistema chamado Auto Sense com intuito de ajudar na hora que der problema em veículos da população. Oferecendo um canal digital com ChatBot para gerar velocidade e assertividade no diagnóstico do problema do veículo, sem intervenção humana. Problema este que foi apresentado no nosso primeiro challenge do curso proposto pela Porto Seguro.</p>
            </div>
            <div className="pessoas">
                <div className="erick">
                    <img src={Erick} alt="Erick-img" />
                    <div className="dados">
                        <p className="nome">Erick Alves Xavier dos Santos</p>
                        <p className="sala-rm">1TDSPM / RM556862</p>
                        <img src={Github} alt="logo-Github" />
                        <img src={Instagram} alt="logo-Instagram" />
                        <img src={Linkedin} alt="logo-Linkedin" />
                    </div>
                </div>
                <div className="luiz">
                    <img src={Luiz} alt="Luiz-img" />
                    <div className="dados">
                        <p className="nome">Luiz Henrique Neri Reimberg</p>
                        <p className="sala-rm">1TDSPM / RM556864</p>
                        <img src={Github} alt="logo-Github" />
                        <img src={Instagram} alt="logo-Instagram" />
                        <img src={Linkedin} alt="logo-Linkedin" />
                    </div>
                </div>
                <div className="vicenzo">
                    <img src={Vicenzo} alt="Vicenzo-img" />
                    <div className="dados">
                        <p className="nome">Vicenzo Massao de Oliveira</p>
                        <p className="sala-rm">1TDSPM / RM554833</p>
                       
                        <img src={Github} alt="logo-Github" />
                        <img src={Instagram} alt="logo-Instagram" />
                        <img src={Linkedin} alt="logo-Linkedin" />
                    </div>
                </div>

            </div>
        </main>
    );
}