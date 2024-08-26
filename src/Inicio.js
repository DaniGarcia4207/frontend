import './App.css'
import Header from './componentes/header/Header'
import Body from './componentes/body/CardList'
import Carrusel from './componentes/Carrusel/Carrusel'
import Footer from './componentes/footer/Footer'
import BarraRedesSociales from './componentes/BarraRedesSociales.js';

function App() {
  return (
    <div className="App">
    <Header/>
    <Carrusel/>
    <Body/>
    <BarraRedesSociales/>
    <Footer/>
    </div>
  );
}

export default App;