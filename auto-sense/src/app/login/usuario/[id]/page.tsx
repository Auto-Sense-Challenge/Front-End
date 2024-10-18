"use client"
import React from 'react'
import { TipoUsuario } from '@/types'
import { useState } from 'react';

export default function Usuario({params}:{params:{id:number}}) {

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:params.id,
    email: "",
    nome: "",
    cpf:0,
    dtNasc: new Date("2000-01-01"),
  });


  return (
    <main>
        <h1>Página de visualização dos dados do Usuário de Id {usuario.id}</h1>

        <h3>Dados:</h3>
        <ul>
          <li>Id: {usuario.id}</li>
          <li>Nome: {usuario.nome}</li>
          <li>CPF: {usuario.cpf}</li>
          <li>Email: {usuario.email}</li>
          <li>Data de Nascimento: {usuario.dtNasc.toLocaleDateString()}</li>
        </ul>

    </main>
  )
}
