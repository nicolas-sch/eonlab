import React, { useEffect, useState } from 'react';
import './servicos.css';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Image1 from '../assets/Servico01_celular.svg';
import Image2 from '../assets/Servico01_fundo.svg';
import Image3 from '../assets/Servico01_nuvens.svg';
import Image4 from '../assets/Servico02_pessoas.svg';
import Image5 from '../assets/Servico02_fundo_roxo.svg';
import Image6 from '../assets/Servico02_engrenagens.svg';
import Image7 from '../assets/Servico03_computador.svg';
import Image8 from '../assets/Servico03_fundo_verde.svg';
import Image9 from '../assets/Servico03_balao.svg';
import Parallax from 'react-rellax';
import LazyLoad from 'react-lazyload';


function Servicos()  {
    const [wrapper, setWrapper] = useState(false);
    const [wrapper2, setWrapper2] = useState(false);


    const changeBackground = () => {
      if(window.scrollY >= 2000 && window.scrollY <= 2799) {
          setWrapper(true);
      } else {
          setWrapper(false);
      } 
    }

    const changeBackground2 = () => {
        if(window.scrollY >= 2800) {
            setWrapper2(true);
        } else {
            setWrapper2(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeBackground2);

    return (
        <Parallax speed={0}>
        <div className="servicospage" id="servicos">
            <div className={wrapper ? 'servicos-container active3' : 'servicos-container' 
            && wrapper2 ? 'servicos-container active4' : 'servicos-container'}>
                <div className="servicos-title">
                    <Slide left>
                    <h1>Serviços</h1>
                    </Slide>
                    <Slide right>
                    <p>Da programação, a criação de um web design único até otimização de SEO. O seu site é a nossa especialidade. Com foco na experiência do usuário, criatividade, dados, gestão e manutenção absoluta, nosso trabalho entrega uma solução integral para tornar o seu projeto em realidade.</p>
                    </Slide>
                    
                </div>
                <div className="servicos-wrapper1">
                    <LazyLoad throttle={100}>
                        <Zoom>
                        <Parallax speed= { 2.5 }>
                            <div className="servicos-image">
                                <div className="img1">
                                    <img src={Image1} alt="servicos1"/>
                                </div>
                                <div className="img2">
                                    <img src={Image2} alt="servicos2"/>
                                </div>
                                
                                <div className="img3">
                                    <img src={Image3} alt="servicos3"/>
                                </div>
                            </div>
                        </Parallax>
                        </Zoom>
                    </LazyLoad>
                    <Parallax speed= { 4.5 }>
                    <div className="servicos-text">
                        <h1>Web Design</h1>
                        <p>A qualidade do produto é essencial. Sua marca, identidade visual e experiência elevam sua essência e o conectam ainda mais com o usuário.</p>
                        <ul>
                            <li>Jornadas, Funcionalidades e MVP</li>
                            <li>UX (User Experience)</li>
                            <li>UI (User Interface)</li>
                        </ul>
                    </div>
                    </Parallax>
                </div>
                <div className="servicos-wrapper2">
                    <Parallax speed= { 4.5 }>
                    <div className="servicos-text1">
                        <h1>Desenvolvimento</h1>
                        <p>A expertise necessária para desenvolver estratégias e soluções com fluidez, desempenho técnico e criativo. Tudo isso pensado de acordo com cada necessidade do projeto.</p>
                        <ul>
                            <li>Estratégia de SEO</li>
                            <li>Analytics</li>
                            <li>Frontend</li>
                        </ul>
                    </div>
                    </Parallax>
                    <LazyLoad throttle={100}>
                        <Zoom>
                            <Parallax speed= { 2.5 }>
                            <div className="servicos-image1">
                                <div className="img4">
                                    <img src={Image4} alt="servicos1"/>
                                </div>
                                <div className="img5">
                                    <img src={Image5} alt="servicos1"/>
                                </div>
                                <div className="img6">
                                    <img src={Image6} alt="servicos1"/>
                                </div>
                            </div>
                            </Parallax>
                        </Zoom>
                    </LazyLoad>
                </div>
                <div className="servicos-wrapper3">
                <LazyLoad throttle={100}>
                    <Zoom>
                        <Parallax speed= { 2.5 }>
                        <div className="servicos-image2">
                            <div className="img7">
                                <img src={Image7} alt="servicos1"/>
                            </div>
                            <div className="img8">
                                <img src={Image8} alt="servicos1"/>
                            </div>
                            <div className="img9">
                                <img src={Image9} alt="servicos1"/>
                            </div>
                        </div>
                        </Parallax>
                    </Zoom>
                </LazyLoad>
                    <Parallax speed= { 4.5 }>
                    <div className="servicos-text2">
                        <h1>Operação</h1>
                        <p>A funcionalidade que você deseja para o seu site em uma entrega completa e sem preocupações. Monitoramos e resolvemos o que você precisar.</p>
                        <ul>
                            <li>Backend</li>
                            <li>CMS</li>
                            <li>Manutenção e Suporte</li>
                        </ul>
                    </div>
                    </Parallax>
                </div>
            </div>
        </div>
        </Parallax>
      );
  }
  
  export default Servicos;