import Image from 'next/image'
import React from 'react'
import ImgErick from '@/img/foto-erick.png'
import ImgLuiz from '@/img/foto-luiz.png'
import ImgVicenzo from '@/img/foto-vicenzo.png'
import GitLogo from '@/img/gitHub-logo.png'
import InstaLogo from '@/img/insta-logo.png'
import LinkedinLogo from '@/img/linkedin-logo.png'


export default function Sobre() {
  return (
    <main>
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
                <a href="#">
                  <Image src={GitLogo} alt='github-logo'/>
                </a>
                <a href="#">
                  <Image src={InstaLogo} alt='intagram-logo'/>
                </a>
                <a href="#">
                  <Image src={LinkedinLogo} alt='linkedin-logo'/>
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
                <a href="#">
                  <Image src={GitLogo} alt='github-logo'/>
                </a>
                <a href="#">
                  <Image src={InstaLogo} alt='intagram-logo'/>
                </a>
                <a href="#">
                  <Image src={LinkedinLogo} alt='linkedin-logo'/>
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
                <a href="#">
                  <Image src={GitLogo} alt='github-logo'/>
                </a>
                <a href="#">
                  <Image src={InstaLogo} alt='intagram-logo'/>
                </a>
                <a href="#">
                  <Image src={LinkedinLogo} alt='linkedin-logo'/>
                </a>
              </div>
            </div>
          </figure>
        </div>
    </main>
  )
}