import { TipoMecanico } from '@/types'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlinePencilSquare as LapisEditar } from "react-icons/hi2";

export default function Dados() {

    const [mecanico, setMecanico] = useState<TipoMecanico>({
        id:0,
        nome:"",
        email:"",
        senha:"",
        telefone:0,
        linkInsta:"",
        descricao:"",
        endereco:{
          cep:0,
          numero:0,
          complemento:"",
        },
      })


  return (
    <main>
        <h1>Seus Dados</h1>

        <ul>
            <li>Nome: {mecanico.nome}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>Email: {mecanico.email}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>senha: {mecanico.senha}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>telefone: {mecanico.telefone}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>Instagram: {mecanico.linkInsta}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>Cep: {mecanico.endereco.cep}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>Número: {mecanico.endereco.numero}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>Complemento: {mecanico.endereco.complemento}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
            <li>Descrição: {mecanico.descricao}  | <Link href={`/membros/mecanicos/${mecanico.id}/editarDados`}> <LapisEditar/> </Link></li>
        </ul>
    </main>
  )
}
