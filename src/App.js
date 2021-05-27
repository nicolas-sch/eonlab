import './App.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import About from './components/about';
import Servicos from './components/servicos';
import Servicosmb from './components/servicosmb';
import Form from './components/form/Form';
import Privaci from '../src/pages/privaci';
import {ParallaxProvider} from 'react-scroll-parallax'
import Navbar from './components/navbar';

function App() {
    
  return (
    <>
    <BrowserRouter>
      <Switch>
        <ParallaxProvider>
          <Route exact path='/'  component={Home}/>
          <Route path='/privaci' exact component={Privaci} />
        </ParallaxProvider>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
