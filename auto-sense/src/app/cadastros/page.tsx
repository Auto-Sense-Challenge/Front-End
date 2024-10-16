import Link from 'next/link'
import React from 'react'

export default function Cadastros() {
  return (
    <main>
      <h1>Cadastros</h1>
      <h4>Temos 2 tipos de cadastros em nosso sistemas</h4>
      <aside>
        <p>Caso deseje facilitar na hora da nossa IA passar o sintomas clique no botão abaixo, realizando este cadastro como usuário você não tera que passar seus dados básicos novamente, quando for conversar com nossa Inteligência Artificial</p>
        <Link href="/cadastros/usuario">Cadastro Usuario</Link>
      </aside>
      <aside>
        <p>Caso seja uma oficina de mecânico e gostaria de nos ajudar a realize o cadastro de Mecânico clicando no botão abaixo</p>
        <Link href="/cadastros/mecanico">Cadastro Mecânico</Link>
      </aside>
    </main>
  )
}
