"use client"
import { TipoMecanico } from '@/types';
import React, { useState } from 'react'

export default function Mecanico({params}:{params:{id:number}}) {

  const [mecanico, setMecanico] = useState<TipoMecanico>({
    id:params.id,
    telefone: 0,
    nome: "",
    endereco:"",
    avaliacao: 0,
  });

  return (
    <main>
        {/* Essa página é a página que os usuarios veram os dados de um mecânico expecifico*/}
        
        <h3>Nome: {mecanico.nome}</h3>
        <ul>
          <li>Telefone: {mecanico.telefone}</li>
          <li>Endereço: {mecanico.endereco}</li>
        </ul>

        <h4>Avaliação</h4>
        <h6>{mecanico.avaliacao}</h6>
    </main>
  )
}
