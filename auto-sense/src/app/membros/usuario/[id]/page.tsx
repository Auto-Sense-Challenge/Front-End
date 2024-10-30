"use client"
import React from 'react'
import { TipoUsuario } from '@/types'
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlinePencilSquare as LapisEditar } from "react-icons/hi2";


export default function Usuario({params}:{params:{id:number}}) {

  const [usuario, setUsuario] = useState<TipoUsuario>({
    id:params.id,
    email: "",
    nome: "",
    cpf:0,
    dtNasc: "",
    senha: "",
    telefone: 0,
  });


  return (
    <main>
        <h1>Página de visualização dos dados do Usuário de Id {usuario.id}</h1>

        {/* Essa página é a página que apenas o usuario vera, todos os seus dados */}


        <h3>Dados:</h3>
        <ul>
          <li>Id: {usuario.id}  | <Link href={`/membros/usuario/cadastro/${usuario.id}`}> <LapisEditar/> </Link></li>
          <li>Nome: {usuario.nome}  | <Link href={`/membros/usuario/cadastro/${usuario.id}`}> <LapisEditar/> </Link></li>
          <li>CPF: {usuario.cpf}  | <Link href={`/membros/usuario/cadastro/${usuario.id}`}> <LapisEditar/> </Link></li>
          <li>Email: {usuario.email}  | <Link href={`/membros/usuario/cadastro/${usuario.id}`}> <LapisEditar/> </Link></li>
          <li>Data de Nascimento: {usuario.dtNasc}  | <Link href={`/membros/usuario/cadastro/${usuario.id}`}> <LapisEditar/> </Link></li>
          <li>Telefone: {usuario.telefone}  | <Link href={`/membros/usuario/cadastro/${usuario.id}`}> <LapisEditar/> </Link></li>
        </ul>

    </main>
  )
}
