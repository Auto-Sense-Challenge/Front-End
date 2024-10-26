"use client"
import { TipoUsuario } from '@/types'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Usuario() {

  const navigate = useRouter();

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:0,
    cpf:0,
    nome:"",
    email:"",
    dtNasc: new Date(),
    senha:"",
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
    //         navigate.push("/mecanicos");
    //     }

    // } catch (error) {
    //     console.error("Falha no cadastramento de mecânico: ", error);
    //     navigate.push("/error");
    // }
  }

  return (
    <main>
        <div>
          <form onSubmit={handleSubmit} className="formsUsuario">
            <h1>Cadastro Mecânico</h1>
            <h4>Preencha com seus dados para cadastrar</h4>
            <div>
              <label htmlFor="idCpf">Cpf</label>
              <input type="number" id="idCpf" value={usuario.cpf} onChange={(m)=> setUsuario({...usuario, cpf:Number(m.target.value)})} placeholder="Ex: 11111111111" required/>
              <label htmlFor="idNome">*Campo Obrigatorio</label>
            </div>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" id="idNome" value={usuario.nome} onChange={(m)=> setUsuario({...usuario, nome:m.target.value})} placeholder="Ex: Erick Alves Xavier dos Santos" required/>
              <label htmlFor="idEmail">*Campo Obrigatorio</label>
            </div>
            <div>
              <label htmlFor="idEmail">Email</label>
              <input type="email" id="idEmail" value={usuario.email} onChange={(m)=> setUsuario({...usuario, email:m.target.value})} placeholder="Ex: exemplo@gmail.com"/>
            </div>
            <div>
              <label htmlFor="idSenha">Senha</label>
              <input type="password" id="idSenha" value={usuario.senha} onChange={(m)=> setUsuario({...usuario, senha:m.target.value})} placeholder="Digite uma senha para sua conta" required/>
              <label htmlFor="idSenha">*Campo Obrigatorio</label>
            </div>
            <div>
              <label htmlFor="idData">Data Nascimento</label>
              <input type="date" id="idData" value={usuario.dtNasc ? usuario.dtNasc.toISOString().substring(0, 10) : ""} onChange={((e) => handleSubmit)} placeholder="Digite o endereço da sua oficina"/>
            </div>
          </form>
        </div>
    </main>
  )
}
