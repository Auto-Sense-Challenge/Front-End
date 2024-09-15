import { Link } from "react-router-dom";

export default function Cadastro(){
    return(
        <main>
            <h1>Cadastros</h1>
            <p>Aqui temos 2 tipos de cadastros em nosso sistema</p>
            <aside>
                <p>Caso deseje facilitar na hora da nossa IA passar o sintomas clique no botão abaixo, realizando este  cadastro como usuário você não tera que passar seus dados básicos novamente, quando for conversar com nossa Inteligência Artificial</p>
                <Link to={"/Cadastro/Usuario"}>Cadastro Usuário</Link>
            </aside>
            <aside>
                <p>Caso seja uma oficina de mecânica e gostaria de nos ajudar realize o cadastro de Mecânico clicando no botão abaixo</p>
                <Link to={"/Cadastro/Mecanico"}>Cadastro Mecânico</Link>
            </aside>
        </main>
    );
}