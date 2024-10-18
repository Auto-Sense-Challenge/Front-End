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
        <h1>Página de visualização dos dados do Mecânico de Id {mecanico.id}</h1>

        <h3>Dados:</h3>
        <ul>
          <li>Id: {mecanico.id}</li>
          <li>Nome: {mecanico.nome}</li>
          <li>Endereço: {mecanico.endereco}</li>
          <li>Telefone: {mecanico.telefone}</li>
          <li>Avaliação: {mecanico.avaliacao} Estrelas</li>
        </ul>
    </main>
  )
}
