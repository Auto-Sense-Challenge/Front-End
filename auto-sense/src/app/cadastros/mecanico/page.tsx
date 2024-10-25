"use client"
import { TipoMecanico } from '@/types'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Mecanico() {

  const navigate = useRouter();

  const [mecanico, setMecanico] = useState<TipoMecanico>({
    id:0,
    nome:"",
    email:"",
    senha:"",
    telefone:0,
    endereco:"",
    linkInsta:"",
    descricao:"",
  })

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        
        const response = await fetch("Aqui vem nossa API",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
                },
            body: JSON.stringify(mecanico)
        });

        if(response.ok){
          //Colocar algo para abrir o modal aqui e bla bla bla
            setMecanico({
              id:0,
              nome:"",
              email:"",
              senha:"",
              telefone:0,
              endereco:"",
              linkInsta:"",
              descricao:"",
                });
            navigate.push("/mecanicos");
        }

    } catch (error) {
        console.error("Falha no cadastramento de mecânico: ", error);
        navigate.push("/error");
    }
  }

  return (
    <main>
        <div>
          <form onSubmit={handleSubmit} className="formsMecanico">
            <h1>Cadastro Mecânico</h1>
            <div>
              <label htmlFor="idNome">Nome</label>
              <input type="text" id="idNome" value={mecanico.nome} onChange={(m)=> setMecanico({...mecanico, nome:m.target.value})} placeholder="Digite o nome da sua oficina" required/>
              <label htmlFor="idNome">*Campo Obrigatorio</label>
            </div>
            <div>
              <label htmlFor="idEmail">Email</label>
              <input type="email" id="idEmail" value={mecanico.email} onChange={(m)=> setMecanico({...mecanico, email:m.target.value})} placeholder="Digite o email da sua oficina" required/>
              <label htmlFor="idEmail">*Campo Obrigatorio</label>
            </div>
            <div>
              <label htmlFor="idSenha">Senha</label>
              <input type="password" id="idSenha" value={mecanico.senha} onChange={(m)=> setMecanico({...mecanico, senha:m.target.value})} placeholder="Digite uma senha para sua conta" required/>
              <label htmlFor="idSenha">*Campo Obrigatorio</label>
            </div>
            <div>
              <label htmlFor="idTelefone">Telefone</label>
              <input type="number" id="idTelefone" value={mecanico.telefone} onChange={(m)=> setMecanico({...mecanico, telefone:Number(m.target.value)})} placeholder="Coloque o telefone aqui"/>
            </div>
            <div>
              <label htmlFor="idEndereco">Endereco</label>
              <input type="text" id="idEndereco" value={mecanico.endereco} onChange={(m)=> setMecanico({...mecanico, endereco:m.target.value})} placeholder="Digite o endereço da sua oficina"/>
            </div>
            <div>
              <label htmlFor="idInsta">Instagram</label>
              <input type="text" id="idInsta" value={mecanico.linkInsta} onChange={(m)=> setMecanico({...mecanico, linkInsta:m.target.value})} placeholder="Coloque seu instagram aqui"/>
            </div>
            <div>
              <label htmlFor="idDescricao">Descrição</label>
              <input type="text" id="idDescricao" value={mecanico.descricao} onChange={(m)=> setMecanico({...mecanico, descricao:m.target.value})} placeholder="Coloque aqui sua descrição" required/>
              <label htmlFor="idDescricao">*Campo Obrigatorio</label>
            </div>
          </form>
        </div>
    </main>
  )
}
