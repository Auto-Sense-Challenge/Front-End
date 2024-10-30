import React from 'react'
import { TbUserFilled as User} from "react-icons/tb";
import Link from 'next/link'


export default function Opcoes() {
  return (
    <div className="opcoesUser">
      <User className='userOp'/>
      <h5>Olá, Bem vindo(a)</h5>
      <div className="op-cadastros">
          <Link href="/membros/cadastros">Cadastrar</Link>
          <Link href="/membros/login">Login</Link>
      </div>
      <hr />
      <div className="op-cadastros">
          <Link href="/ajuda">Ajuda</Link>
          <Link href="/sobre">Sobre</Link>
      </div>
    </div>
  )
}
