import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/sobre">Sobre</Link>
            </li>
            <li>
                <Link href="/cadastros">Cadastro</Link>
            </li>
            <li>
                <Link href="/ajuda">Ajuda</Link>
            </li>
            <li>
                <Link href="/veiculos">Veículos</Link>
            </li>
        </ul>
    </nav>
  )
}
