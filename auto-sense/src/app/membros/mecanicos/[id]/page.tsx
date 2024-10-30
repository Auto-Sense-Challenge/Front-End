"use client"
import { TipoMecanico } from '@/types';
import React, { useState } from 'react'

export default function Mecanico({params}:{params:{id:number}}) {

  const [mecanico, setMecanico] = useState<TipoMecanico>({
    id:params.id,
    telefone: 0,
    nome: "",
    senha: "",
    email:"",
    linkInsta:"",
    endereco:{
      cep:0,
      numero:0,
      complemento:"",
    },
    descricao:"",

  });

  return (
    <main>
        {/* Essa página é a página que os usuarios veram os dados de um mecânico expecifico*/}
        <h3>Nome: {mecanico.nome}</h3>
        <ul>
          <li>Telefone: {mecanico.telefone}</li>
          <li>Email: {mecanico.email}</li>
          <li>Instagram: {mecanico.linkInsta}</li>
          <li>Descrição: {mecanico.descricao}</li>
          <li>Cep: {mecanico.endereco.cep}</li>
          <li>Número: {mecanico.endereco.numero}</li>
          <li>Complemento: {mecanico.endereco.complemento}</li>
        </ul>
    </main>
  )
}
