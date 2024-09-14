import { useState } from "react";

export default function Perguntas(){

    const [modalAberto, setModalAberto] = useState(false);
    const [modalAberto1, setModalAberto1] = useState(false);
    const [modalAberto2, setModalAberto2] = useState(false);
    const [modalAberto3, setModalAberto3] = useState(false);


  const mudarModal = () => {
    setModalAberto(false);
    if(!modalAberto){
        setModalAberto(true)
    }
  };
  const mudarModal1 = () => {
    setModalAberto1(false);
    if(!modalAberto1){
        setModalAberto1(true)
    }
  };
  const mudarModal2 = () => {
    setModalAberto2(false);
    if(!modalAberto2){
        setModalAberto2(true)
    }
  };
  const mudarModal3 = () => {
    setModalAberto3(false);
    if(!modalAberto3){
        setModalAberto3(true)
    }
  };
    
    return(        
        <main className="main-perguntas">
            <div className="h1-perguntas">
                <h1>Perguntas Frequentes</h1>
            </div>
        
            <div className="perguntas">
                <h3>Como faço para criar uma conta?</h3>
                <button className="rotate-button" onClick={()=> mudarModal()}>&gt;</button>            
                <dialog open={modalAberto} className="perguntas-modal">     
                    <p>Para criar uma conta, apenas siga estes simples passos:</p>
                    <ol>
                        <li>Clique na opção Cadastrar no nosso menu ou na página inicial;</li>
                        <li>Preencha com os dados que são requisitados;</li>
                        <li>Verifique seu email para confirmação.</li>
                    </ol>
                </dialog>
            </div>
            

            <div className="perguntas">
                <h3>O que fazer com a IA de vocês?</h3>
                <button className="rotate-button" onClick={()=> mudarModal1()}>&gt;</button>            
                <dialog open={modalAberto1} className="perguntas-modal">     
                    <p>Nossa Inteligência Artificial funciona de com bases nos problemas que você apresenta para ela, assim ela pode dizer os possiveis problemas:</p>
                    <ul>
                        <li>Você terá que falar para nossa IA o que seu carro está apresentando como falar que o motor aparenta estar mais quente.</li>
                    </ul>
                </dialog>
            </div>
            

            <div className="perguntas">
                <h3>Como vejo o status do meu veículo?</h3>
                <button className="rotate-button" onClick={()=> mudarModal2()}>&gt;</button>            
                <dialog open={modalAberto2} className="perguntas-modal">     
                    <p>Para acompanhar o status do seu veículo, siga esses passos:</p>
                    <ol>
                        <li>Vá para a seção do “meu perfil”;</li>
                        <li>Dentro de meu perfil vá até “Meus Veículos;</li>
                        <li>Selecione o carro que deseja verificar o status;</li>
                    </ol>
                </dialog>
            </div>
            
            <div className="perguntas">
                <h3>Porque usar a IA de vocês?</h3>
                <button className="rotate-button" onClick={()=> mudarModal3()}>&gt;</button>            
                <dialog open={modalAberto3} className="perguntas-modal">     
                    <p>Nossa IA irá lhe apresentar um relatório sobre o seu veículo antes mesmo do veículo parar e assim podendo cuidar do seu carro antes dele te abandonar no meio da estradas</p>
                </dialog>
            </div>
            
        </main>
    );
}