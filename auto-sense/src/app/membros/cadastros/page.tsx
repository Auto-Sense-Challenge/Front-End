import Link from 'next/link'
import React from 'react'

export default function Cadastros() {
  return (
    <main className='cadastroMain'>
      <div className='tipoCadastro'>
        <h1>Cadastros</h1>
        <h4>Temos 2 tipos de cadastros em nosso sistemas</h4>
      </div>
      
      <div className='cadastrosMecUser'>
        <aside className='users'>
          <p>Caso seja uma pessoa que pretende procurar suporte ao seu carro realize nosso cadasro de Usuários</p>
          <Link href="/membros/usuario/cadastro">Cadastro para usuários</Link>
        </aside>
        <aside className='mecs'>
          <p>Caso seja uma oficina de mecânico e gostaria de nos ajudar a realize o cadastro de Mecânico clicando no botão abaixo</p>
          <Link href="/membros/mecanicos/cadastro">Cadastro para Oficinas de Mecânica</Link>
        </aside>
      </div>
      
    </main>
  )
}
