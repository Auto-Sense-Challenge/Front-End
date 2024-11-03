"use client"
import { TipoMecanico } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Cadastro() {

  const navegar = useRouter()

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
    navegar.push("/membros/login")
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
            <h1>Cadastro Mecânico</h1>
            <h4>Preencha com seus dados para cadastrar</h4>
            <div className="inputs">
              <div className='inputLocal'>
                <label htmlFor="idNome">Nome</label>
                <input type="text" id="idNome" value={mecanico.nome} minLength={3} maxLength={50} onChange={(m)=> setMecanico({...mecanico, nome:m.target.value})} placeholder="Digite o nome da sua oficina" required/>
                <label className='campObg' htmlFor="idNome">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idEmail">Email</label>
                <input type="email" id="idEmail" value={mecanico.email} maxLength={250} onChange={(m)=> setMecanico({...mecanico, email:m.target.value})} placeholder="Digite o email da sua oficina" required/>
                <label className='campObg' htmlFor="idEmail">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idSenha">Senha</label>
                <input type="password" id="idSenha" value={mecanico.senha} minLength={5} maxLength={50} onChange={(m)=> setMecanico({...mecanico, senha:m.target.value})} placeholder="Digite uma senha para sua conta" required/>
                <label className='campObg' htmlFor="idSenha">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idTelefone">Telefone da Oficina</label>
                <input type="number" id="idTelefone" value={mecanico.telefone} size={11} onChange={(m)=> setMecanico({...mecanico, telefone:Number(m.target.value)})} placeholder="Coloque o telefone aqui" required/>
                <label className='campObg' htmlFor="idTelefone">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idCep">CEP</label>
                <input type="number" id="idCep" value={mecanico.endereco.cep} size={9} onChange={(m) =>setMecanico({...mecanico,endereco: {...mecanico.endereco,cep: Number(m.target.value),},})} placeholder="Digite o cep oficina" required/>
                <label className='campObg' htmlFor="idCep">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idNumero">Número da Ofícina</label>
                <input type="number" id="idNumero" value={mecanico.endereco.numero} maxLength={4} onChange={(m) =>setMecanico({...mecanico,endereco: {...mecanico.endereco,numero: Number(m.target.value),},})} placeholder="Digite o número da sua oficina" required/>
                <label className='campObg' htmlFor="idNumero">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idComplemento">Complemento</label>
                <input  type="text" id="idComplemento" value={mecanico.endereco.complemento} maxLength={50} onChange={(m) =>setMecanico({...mecanico,endereco: {...mecanico.endereco,complemento: m.target.value,},})} placeholder="Digite o complemento da oficina"/>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idInsta">Instagram</label>
                <input type="text" id="idInsta" value={mecanico.linkInsta} maxLength={250} onChange={(m)=> setMecanico({...mecanico, linkInsta:m.target.value})} placeholder="Coloque seu instagram aqui"/>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idDescricao">Descrição</label>
                <input type="text" id="idDescricao" value={mecanico.descricao} maxLength={250} onChange={(m)=> setMecanico({...mecanico, descricao:m.target.value})} placeholder="Coloque aqui sua descrição"/>
              </div>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
    </main>
  )
}
