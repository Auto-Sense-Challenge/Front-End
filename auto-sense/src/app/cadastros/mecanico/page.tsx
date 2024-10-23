"use client"
import { TipoMecanico } from '@/types'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Mecanico() {

  const navigate = useRouter();

  const [mecanico, setMecanico] = useState<TipoMecanico>({
    id:0,
    telefone:0,
    nome:"",
    endereco:"",
    avaliacao:0,
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
            alert("Produto cadastrado com sucesso.");
            //Resetando os campos do form atravé do useState:
            setMecanico({
              id:0,
              telefone:0,
              nome:"",
              endereco:"",
              avaliacao:0,
                });
            // Redirecionando o usuário para a página de preodutos:
            navigate.push("/mecanicos");
        }

    } catch (error) {
        console.error("Falha no cadastramento de produtos: ", error);
        navigate.push("/error");
    }
  }

  return (
    <main>
        <h1>Página de Cadastro de Mecânico</h1>
    </main>
  )
}
