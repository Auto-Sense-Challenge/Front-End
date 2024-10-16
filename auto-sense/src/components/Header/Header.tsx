"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import AutoLogo from "@/img/auto-logo.png"
import Menu from "@/img/menu-img.png"
import UserFoto from "@/img/foto-user.png"
import Nav from '../Nav/Nav'
import Opcoes from '../Opcoes/Opcoes'

export default function Header() {

    const [navStatus, setNavStatus] = useState(false);
    const [opcoesStatus, setOpcoesStatus] = useState(false);

    const mudarNav = () => {
        setNavStatus(false);
        if(!navStatus){
            setNavStatus(true)
        }
    };

    const mudarOpcoes = () => {
        setOpcoesStatus(false);
        if(!opcoesStatus){
            setOpcoesStatus(true)
        }
    };

  return (
    <header>
        <div className='logo'>
            <Link href="/">
                <Image src={AutoLogo} alt='Auto-sense-logo'/>
                <h2>Auto sense</h2>
            </Link>
        </div>

        <div className='abrirMenu'>
            <button onClick={() => mudarNav()}>
                <Image src={Menu} alt='Img-menu'/>
            </button>
        </div>

        <div className='user'>
            <div className="fotoUser">
                <Image src={UserFoto} alt="foto-usuario"/>
            </div>

            <button onClick={() => mudarOpcoes()}>
                <p>&gt;</p>
            </button>
        </div>

        <dialog open={navStatus} className='dialogNav'>
            <Nav/>
        </dialog>

        <dialog open={opcoesStatus} className='dialogOpcoes'>
            <Opcoes/>
        </dialog>
    </header>
  )
}
