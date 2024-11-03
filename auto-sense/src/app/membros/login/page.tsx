"use client"
import { TipoMecanico, TipoUsuario } from '@/types'
import React, { useState } from 'react'

export default function Login() {

  const [mecanico, setMecanico] = useState<TipoMecanico>({
    id:0,
    nome:"",
    email:"",
    senha:"",
    telefone:0,
    linkInsta:"",
    descricao:"",
    endereco:{
      cep:0,
      numero:0,
      complemento:"",
    },
  })

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:0,
    email:"",
    nome:"",
    cpf:0,
    dtNasc: "",
    senha: "",
    telefone: 0,
  })

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // try {
        
    //     const response = await fetch("Aqui vem nossa API",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //             },
    //         body: JSON.stringify(mecanico)
    //     });
    
    //     if(response.ok){
    //       //Colocar algo para abrir o modal aqui e bla bla bla
    //         setMecanico({
    //           id:0,
    //           nome:"",
    //           email:"",
    //           senha:"",
    //           telefone:0,
    //           endereco:"",
    //           linkInsta:"",
    //           descricao:"",
    //             });
    //     }

    // } catch (error) {
    //     console.error("Falha no cadastramento de mecânico: ", error);
    //     navigate.push("/error");
    // }
  }

  return (
    <main className='cadastrar'>
        <div>
          <form onSubmit={handleSubmit} className="forms">
            <h1>Login</h1>
            <h4>Preencha com seu email e senha para se logar</h4>
            <div className="inputs">
              <div className='inputLocal'>
                <label htmlFor="idEmail">Email</label>
                <input type="email" id="idEmail" value={mecanico.nome} minLength={3} maxLength={50} onChange={(m)=> setMecanico({...mecanico, nome:m.target.value})} placeholder="Coloque o email da sua conta" required/>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idSenha">Senha</label>
                <input type="password" id="idSenha" value={mecanico.senha} maxLength={250} onChange={(m)=> setMecanico({...mecanico, senha:m.target.value})} placeholder="Coloque a senha da sua conta" required/>
              </div>
            </div>
            <button type='submit'>Logar</button>
          </form>
        </div>
    </main>
  )
}
