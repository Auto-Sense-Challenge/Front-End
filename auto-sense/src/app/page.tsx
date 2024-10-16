import Image from 'next/image'
import React from 'react'
import LogoAuto from '@/img/auto-logo.png'

export default function Home() {
  return (
    <main>
      <aside className='texto'>
        <div className="titulo">
          <h1>Bem Vindo(a)</h1>
        </div>
        <div className="intro">
          <p>Quando seu carro te abandonar, estamos aqui para lhe ajudar com o que for necessário.</p>
        </div>
      </aside>
      <aside className="imagem">
        <Image src={LogoAuto} alt='auto-sense-logo'/>
      </aside>
    </main>
  )
}
