"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import AutoLogo from "@/img/auto-logo.png"
import { TbMenuOrder as Menu, TbArrowBadgeDownFilled as Seta, TbUserFilled as User} from "react-icons/tb";
import Nav from '../Nav/Nav'
import Opcoes from '../Opcoes/Opcoes'

export default function Header() {

    const [navStatus, setNavStatus] = useState(false);
    const [opcoesStatus, setOpcoesStatus] = useState(false);

    const mudarNav = () => {
        setNavStatus(false);
        setOpcoesStatus(false);
        if(!navStatus){
            setNavStatus(true)
        }
    };

    const mudarOpcoes = () => {
        setOpcoesStatus(false);
        setNavStatus(false);
        if(!opcoesStatus){
            setOpcoesStatus(true)
        }
    };

  return (
    <header>
        <div className='superior'>
            <div className='logo'>
                <Link href="/">
                    <Image src={AutoLogo} alt='Auto-sense-logo'/>
                    <h2>Auto sense</h2>
                </Link>
            </div>

            <div className={`abrirMenu ${navStatus ? "aberto": "fechado"}`}>
                <button onClick={() => mudarNav()}>
                    <Menu/>
                </button>
            </div>
            <div className='user'>
                <div className="fotoUser">
                    <User/>
                </div>

                <button onClick={() => mudarOpcoes()}>
                    <Seta className={opcoesStatus ? "aberto": "fechado"}/> 
                </button>
            </div>
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
