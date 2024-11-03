import Image from 'next/image'
import React from 'react'
import ImgErick from '@/img/foto-erick.png'
import ImgLuiz from '@/img/foto-luiz.png'
import ImgVicenzo from '@/img/foto-vicenzo.png'
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram} from "react-icons/fa";


export default function Sobre() {
  return (
    <main className='sobre'>
        <div className="txt">
          <h1>Quem Somos</h1>
          <p>Somos estudantes do primeiro ano do curso Análise e Desenvolvimento de Sistema(ADS) dentro da FIAP. Este sistema chamado de Auto Sense foi criado com o intuito de ajudar na hora que o seu veículo te deixar na mão. Oferecemos um canal digital que conta com velocidade e assertividade no diagnóstico do problema do veículo através de um ChatBot. O tema da problemática que estamos resolvendo foi apresentado pela empresa Porto Seguro.</p>
        </div>
        <div className="imagens">
          <figure>

            <Image src={ImgErick} alt='Foto-Erick'/>
            <div className="informacoes">
              <h5>Erick Alves Xavier dos Santos</h5>
              <p>1TDSPM / RM556862</p>
              <div className="redesLogos">
                <a href="https://github.com/Erick0105">
                  <Github/>
                </a>
                <a href="https://www.instagram.com/erick_0105_/">
                  <Instagram/>
                </a>
                <a href="https://www.linkedin.com/in/erick-alves-295180235/">
                  <Linkedin/>
                </a>
              </div>
            </div>
          </figure>

          <figure>
            <Image src={ImgLuiz} alt='Foto-Luiz'/>
            <div className="informacoes">
              <h5>Luiz Henrique Neri Reimberg</h5>
              <p>1TDSPM / RM556864</p>
              <div className="redesLogos">
                <a href="https://github.com/LuizHNR">
                  <Github/>
                </a>
                <a href="https://instagram.com/loren_lhnr">
                  <Instagram/>
                </a>
                <a href="https://www.linkedin.com/in/luiz-henrique-neri-reimberg-6ab0032b8/">
                  <Linkedin/>
                </a>
              </div>
            </div>
          </figure>

          <figure>
            <Image src={ImgVicenzo} alt='Foto-Vicenzo'/>
            <div className="informacoes">
              <h5>Vicenzo Massao de Oliveira</h5>
              <p>1TDSPM / RM554833</p>
              <div className="redesLogos">
                <a href="https://github.com/fFukurou">
                  <Github/>
                </a>
                <a href="https://instagram.com/ffukurou_">
                  <Instagram/>
                </a>
                <a href="https://www.linkedin.com/in/vicenzo-massao-de-oliveira-2a8b35109/">
                  <Linkedin/>
                </a>
              </div>
            </div>
          </figure>
        </div>
    </main>
  )
}