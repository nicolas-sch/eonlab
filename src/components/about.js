import React, { useState, useEffect } from 'react';
import './about.css';
import Slide from 'react-reveal/Slide';
import Eonmb from '../assets/Eonmb.png';
import Labmb from '../assets/Labmb.png';
import { Parallax } from 'react-scroll-parallax';


function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

      return (
        <div className="aboutpage" id="sobre">
            <div className="about-header-mobile1">
              <Parallax x={[-20, 20]}>
              <div className="img-header-mobile1">
                <img src={Eonmb} alt="Eonmb" />
                <img src={Eonmb} alt="Eonmb" />
                <img src={Eonmb} alt="Eonmb" />
                <img src={Eonmb} alt="Eonmb" />
                <img src={Eonmb} alt="Eonmb" />
              </div>
              </Parallax>
            </div>
            <div className="about-header-mobile2">
              <Parallax x={[20, -20]}>
              <div className="img-header-mobile2">
                <img src={Labmb} alt="Eonmb" />
                <img src={Labmb} alt="Eonmb" />
                <img src={Labmb} alt="Eonmb" />
                <img src={Labmb} alt="Eonmb" />
                <img src={Labmb} alt="Eonmb" />
              </div>
              </Parallax>
            </div>
            <div className="about-container">
                <div className="about-text">
                      <Slide left>
                        <h1>A solução para <br></br>uma experiência<br></br> digital completa</h1>
                          
                      </Slide>
                      <Slide right>
                      <p>Somos uma produtora especializada no desenvolvimento de sites personalizados. Com uma combinação de design, programação e boas práticas de SEO, temos a fórmula ideal para acompanhar o seu projeto durante todo o caminho. Com conceito, operação e lançamento. </p>
                      </Slide>
                </div>
            </div>
            
            
        </div>
      );
}
  
  export default Home;