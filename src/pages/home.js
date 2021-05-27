import React from 'react';
import './home.css';
import Navbar from '../components/navbar';
import About from '../components/about';
import Servicos from '../components/servicos';
import Servicosmb from '../components/servicosmb';
import Form from '../components/form/Form';
import Fade from 'react-reveal/Fade';
import Parallax from 'react-rellax';
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollSnap from "scroll-snap";


// function callback() {
//   console.log("snapped");
// }

export class Home extends React.Component {

  // container = React.createRef();

  // bindScrollSnap() {
  //   const element = this.container.current;
  //   const snapElement = new ScrollSnap(element, {
  //     snapDestinationY: "100%"
  //   });

  //   snapElement.bind(callback);
  // }

  // componentDidMount() {
  //   this.bindScrollSnap();
  // }

    render() {
      return (
        <>
        <div className="homepage">
            <Navbar />
            <Fade top>
              <div className="home-title">
                <Parallax speed= { -5 }>
                  <h1>ESPECIALISTAS EM
                  CRIAÇÃO DE SITES</h1>
                </Parallax>
              </div>
              <div className="home-icon">
              <Parallax speed= { -5 }>
                <Link
                    activeClass="active"
                    to="sobre"
                    spy={true}
                    smooth={true}
                    offset={10}
                    duration={1200}
                >
                <a href=""><i class="fas fa-chevron-down"/></a>
                </Link>
                </Parallax>
              </div>
            </Fade>
        </div>
        {/* <div ref={this.container}> */}
        <About />
        <Servicos />
        <Servicosmb />
        <Form />
        {/* </div> */}
        </>
      );
    }
  }
  
  export default Home;