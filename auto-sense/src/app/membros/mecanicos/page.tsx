"use client"
import { TipoMecanico } from '@/types'
import React, { useState } from 'react'
import Link  from 'next/link';

export default function Mecanicos() {

  const [mecanicos, setMecanicos] = useState<TipoMecanico[]>([{
    id:0,
    telefone: 0,
    nome: "",
    senha:"",
    descricao:"",
    email:"",
    linkInsta:"",
    endereco:{
      cep:0,
      numero:0,
      complemento:"",
    },
  }])

  // Aqui só falta o metado para setar os mecanicos de acordo com a API

  return (
    <main>
        <h1>Página de todos Mecânicos</h1>
        {/* Aqui colocarei um link com parametro de Id para outra página em expecifico de um mecânico*/}

        {mecanicos.map((meca) => (
          <ul key={meca.id}>
            <li>Id: {meca.id}</li>
            <li>Nome: {meca.nome}</li>
            <li>Telefone: {meca.telefone}</li>
            <li>Email: {meca.email}</li>
            <li>Instagram: {meca.linkInsta}</li>
            <li>Cep: {meca.endereco.cep}</li>
            <li><Link href={`/memebros/mecanicos/${meca.id}`}>Dados deste Mecânicos</Link></li>
          </ul>
        ))}
    </main>
  )
}
