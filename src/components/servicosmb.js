import React, { useEffect, useState } from 'react';
import './servicosmb.css';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Parallax from 'react-rellax';
import LazyLoad from 'react-lazyload';
import Bck1Mb from '../assets/BckGrupo1Mb.svg';
import Bck2Mb from '../assets/BckGrupo2Mb.svg';
import Bck3Mb from '../assets/BckGrupo3Mb.svg';


function Servicos()  {
    const [wrapper, setWrapper] = useState(false);
    const [wrapper2, setWrapper2] = useState(false);


    const changeBackground = () => {
      if(window.scrollY >= 2400 && window.scrollY <= 3199) {
          setWrapper(true);
      } else {
          setWrapper(false);
      } 
    }

    const changeBackground2 = () => {
        if(window.scrollY >= 3200) {
            setWrapper2(true);
        } else {
            setWrapper2(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground);
    window.addEventListener('scroll', changeBackground2);

    return (
        <div className="servicospagemb" id="servicos">
            <div className={wrapper ? 'servicos-containermb active3mb' : 'servicos-containermb' 
            && wrapper2 ? 'servicos-containermb active4mb' : 'servicos-containermb'}>
                <div className="servicos-titlemb">
                    <Slide left>
                    <h1>Serviços</h1>
                    </Slide>
                    <Slide right>
                    <p>Da programação, a criação de um web design único até otimização de SEO. O seu site é a nossa especialidade. Com foco na experiência do usuário, criatividade, dados, gestão e manutenção absoluta, nosso trabalho entrega uma solução integral para tornar o seu projeto em realidade.</p>
                    </Slide>
                </div>
                <div className="servicos-containermb2">
                <div className="servicos-wrapper1mb">
                <img src={Bck1Mb} alt="servicos1mb"/>
                    <div className="servicos-textmb">
                        <div className="text-titlemb">
                            <h1>Web Design</h1>
                        </div>
                        
                        <p>A qualidade do produto é essencial. Sua marca, identidade visual e experiência elevam sua essência e o conectam ainda mais com o usuário.</p>
                        <ul>
                            <li>&bull; Jornadas, Funcionalidades e MVP</li>
                            <li>&bull; UX (User Experience)</li>
                            <li>&bull; UI (User Interface)</li>
                        </ul>
                    </div>
                </div>
                <div className="servicos-wrapper2mb">
                <img src={Bck2Mb} alt="servicos1mb"/>
                    <div className="servicos-text1mb">
                        <div className="text-titlemb">
                            <h1>Desenvolvimento</h1>
                        </div>
                        <p>A expertise necessária para desenvolver estratégias e soluções com fluidez, desempenho técnico e criativo. Tudo isso pensado de acordo com cada necessidade do projeto.</p>
                        <ul>
                            <li>&bull; Estratégia de SEO</li>
                            <li>&bull; Analytics</li>
                            <li>&bull; Frontend</li>
                        </ul>
                    </div>
                </div>
                <div className="servicos-wrapper3mb">
                    <div className="servicos-image2mb">
                            <img src={Bck3Mb} alt="servicos1mb"/>
                    </div>
                    <div className="servicos-text2mb">
                        <div className="text-titlemb">
                            <h1>Operação</h1>
                        </div>
                        <p>A funcionalidade que você deseja para o seu site em uma entrega completa e sem preocupações. Monitoramos e resolvemos o que você precisar.</p>
                        <ul>
                            <li>&bull; Backend</li>
                            <li>&bull; CMS</li>
                            <li>&bull; Manutenção e Suporte</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
      );
  }
  
  export default Servicos;