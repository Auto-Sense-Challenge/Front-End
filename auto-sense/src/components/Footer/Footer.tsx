import Image from 'next/image'
import React from 'react'
import AutoLogo from "@/img/auto-logo.png"
import Link from 'next/link'
import { FaGithub as Github} from "react-icons/fa";
import "@/style/footer.css";

export default function Footer() {
  return (
    <footer>
        <div className='ptCima'>
            <aside className="dados">

                <div className="acima">
                    <Link href="/">
                        <Image src={AutoLogo} alt='Auto-Sense-logo'/>
                        <h6>Auto Sense</h6>
                    </Link>
                </div>

                <div className="abaixo">
                    <a href="https://github.com/Auto-Sense-Challenge">
                        <Github/>
                    </a>
                </div>
            </aside>

            <aside className="outros">
                <ul>
                    <li>
                        <Link href="/sobre">Quem Somos</Link>
                    </li>
                    <li>
                        <Link href="/ajuda">Suporte</Link>
                    </li>
                </ul>
            </aside>
        </div>

        <div className='copy'>
            <p>2024 &copy; Auto Sense. Todos os direitos reservados</p>
        </div>
    </footer>
  )
}
