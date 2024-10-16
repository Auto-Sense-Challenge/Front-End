import React from 'react'
import { TbUserFilled as User} from "react-icons/tb";
import Link from 'next/link'


export default function Opcoes() {
  return (
    <div className="opcoesUser">
      <User/>
        <h5>Olá, Bem vindo(a)</h5>
        <div className="op-cadastros">
            <Link href="/cadastrar/usuario">Cadastrar Usuário</Link>
            <Link href="/cadastrar/mecanico">Cadastrar Mecânico</Link>
            <Link href="/login">Login</Link>
        </div>
        <div className="paginas">
            <Link href="/ajuda">Ajuda</Link>
            <Link href="/sobre">Sobre</Link>
        </div>
    </div>
  )
}
