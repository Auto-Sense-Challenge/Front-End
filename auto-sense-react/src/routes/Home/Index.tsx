import Logo from "/auto-logo.png"

export default function Home(){
    return(
        <main>
            <aside className="main-esquerda">
                <h2>Bem Vindo(a)</h2>
                <p>Quando seu carro te abandonar, estaremos aqui para lhe ajudar com o que for necessário</p>
            </aside>
            <aside>
                <img src={Logo} alt="auto-sense-logo" />
            </aside>
        </main>
    );
}