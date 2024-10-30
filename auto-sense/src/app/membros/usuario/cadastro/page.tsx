"use client"
import { TipoUsuario } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function Cadastro() {

  const navegar = useRouter();

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:0,
    cpf:0,
    nome:"",
    email:"",
    dtNasc: "",
    senha:"",
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
    //         navigate.push("/mecanicos");
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
            <h1>Cadastro Usuario</h1>
            <h4>Preencha com seus dados para cadastrar</h4>
            <div className="inputs">
              <div className='inputLocal'>
                <label htmlFor="idCpf">Cpf</label>
                <input type="number" id="idCpf" value={usuario.cpf} onChange={(m)=> setUsuario({...usuario, cpf:Number(m.target.value)})} placeholder="Ex: 11111111111" required/>
                <label htmlFor="idNome">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idNome">Nome</label>
                <input type="text" id="idNome" value={usuario.nome} onChange={(m)=> setUsuario({...usuario, nome:m.target.value})} placeholder="Ex: Erick Alves Xavier dos Santos" required/>
                <label htmlFor="idEmail">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idEmail">Email</label>
                <input type="email" id="idEmail" value={usuario.email} onChange={(m)=> setUsuario({...usuario, email:m.target.value})} placeholder="Ex: exemplo@gmail.com" required/>
                <label htmlFor="idEmail">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idSenha">Senha</label>
                <input type="password" id="idSenha" value={usuario.senha} onChange={(m)=> setUsuario({...usuario, senha:m.target.value})} placeholder="Digite uma senha para sua conta" required/>
                <label htmlFor="idSenha">*Campo Obrigatorio</label>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idData">Data Nascimento</label>
                <input type="date" id="idData" value={usuario.dtNasc} onChange={(m) => setUsuario({ ...usuario, dtNasc: m.target.value })} placeholder="Coloque sua data de nascimento"/>
              </div>
              <div className='inputLocal'>
                <label htmlFor="idTelefone">Telefone</label>
                <input type="number" id="idTelefone" value={usuario.telefone} onChange={(m) => setUsuario({ ...usuario, telefone:Number(m.target.value)})} placeholder="Digite o endereço da sua oficina" required/>
                <label htmlFor="idTelefone">*Campo Obrigatorio</label>
              </div>
            </div>
            
            <div className='inputLocal'>
              <button type='submit'>Enviar</button>
            </div>
          </form>
        </div>
    </main>
  )
}
