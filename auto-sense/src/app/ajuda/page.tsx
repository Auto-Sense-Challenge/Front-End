"use client"
import { useState } from "react";
import { TbArrowBadgeDownFilled as Seta} from "react-icons/tb";


export default function Perguntas(){

    const [modaisAbertos, setModaisAbertos] = useState<{ [key: number]: boolean }>({
      1: false,
      2: false,
      3: false,
      4: false,
    });



  const mudarModal = (id:number) => {
    setModaisAbertos((statusPrevia) => ({
      ...statusPrevia,
      [id]: !statusPrevia[id],
    }));
    }

    
    return(        
        <main className="mainAjuda">
                <h1>Perguntas Frequentes</h1>
        
            <div className="perguntas">
                <div className="pergunta">
                    <h3>Como faço para criar uma conta?</h3>
                    <button onClick={()=> mudarModal(1)}><Seta/></button>  
                </div>
                          
                <dialog open={modaisAbertos[1]} className="perguntas-modal">     
                    <p>Para criar uma conta, apenas siga estes simples passos:</p>
                    <ol>
                        <li>Clique na opção Cadastrar no nosso menu ou na página inicial;</li>
                        <li>Preencha com os dados que são requisitados;</li>
                        <li>Verifique seu email para confirmação.</li>
                    </ol>
                </dialog>
            </div>
            

            <div className="perguntas">
                <div className="pergunta">
                    <h3>O que fazer com a IA de vocês?</h3>
                    <button onClick={()=> mudarModal(2)}><Seta/></button>        
                </div>    
                <dialog open={modaisAbertos[2]} className="perguntas-modal">     
                    <p>Nossa Inteligência Artificial funciona de com bases nos problemas que você apresenta para ela, assim ela pode dizer os possiveis problemas:</p>
                    <ul>
                        <li>Você terá que falar para nossa IA o que seu carro está apresentando como falar que o motor aparenta estar mais quente.</li>
                    </ul>
                </dialog>
            </div>
            

            <div className="perguntas">
                <div className="pergunta">
                    <h3>Como vejo o status do meu veículo?</h3>
                    <button onClick={()=> mudarModal(3)}><Seta/></button>  
                </div>
                          
                <dialog open={modaisAbertos[3]} className="perguntas-modal">     
                    <p>Para acompanhar o status do seu veículo, siga esses passos:</p>
                    <ol>
                        <li>Vá para a seção do “meu perfil”;</li>
                        <li>Dentro de meu perfil vá até “Meus Veículos;</li>
                        <li>Selecione o carro que deseja verificar o status;</li>
                    </ol>
                </dialog>
            </div>
            
            <div className="perguntas">
                <div className="pergunta">
                    <h3>Porque usar a IA de vocês?</h3>
                    <button onClick={()=> mudarModal(4)}><Seta/></button>    
                </div>
                        
                <dialog open={modaisAbertos[4]} className="perguntas-modal">     
                    <p>Nossa IA irá lhe apresentar um relatório sobre o seu veículo antes mesmo do veículo parar e assim podendo cuidar do seu carro antes dele te abandonar no meio da estradas</p>
                </dialog>
            </div>
            
        </main>
    );
}