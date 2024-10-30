"use client"
import { TipoMecanico } from '@/types'
import React, { useState } from 'react'
import Link  from 'next/link';

export default function Mecanicos() {

  const [mecanicos, setMecanicos] = useState<TipoMecanico[]>([{
    id:0,
    telefone: 0,
    nome: "",
    endereco:"",
    avaliacao: 0,
  }])

  // Aqui só falta o metado para setar os mecanicos de acordo com a API

  return (
    <main>
        <h1>Página de todos Mecânicos</h1>
        {/* Aqui colocarei um link com parametro de Id para outra página em expecifico de um mecânico*/}

        {mecanicos.map((meca) => (
          <ul key={meca.id}>
            <li>Id: {meca.id}</li>
            <li>Telefone: {meca.telefone}</li>
            <li>Nome: {meca.nome}</li>
            <li>Endereço: {meca.endereco}</li>
            <li>Avaliação: {meca.avaliacao} Estrelas</li>
            <li><Link href={`/mecanicos/mecanico/${meca.id}`}>Dados deste Mecânicos</Link></li>
          </ul>
        ))}
    </main>
  )
}
