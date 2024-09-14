import Logo from "/Logo-home.png"

export default function Home(){
    return(
        <main className="main-conteudo">
            <aside className="main-esquerda">
                <h2>Bem Vindo(a)</h2>
                <p>Quando seu carro te abandonar, estaremos aqui para lhe ajudar com o que for necessário</p>
            </aside>

            <div className="main-direita">
                <div>.</div>
                <img src={Logo} alt="auto-sense-logo" />
            </div>
        </main>
    );
}