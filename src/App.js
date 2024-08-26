import './App.css';
import Inicio from './Inicio';
import {Routes, Route, HashRouter} from "react-router-dom";
import NotFound from './componentes/NotFound';
import Registro from './componentes/Registro';
import InicioSeccion from './componentes/Login';
import InicioSesion from './componentes/InicioSesion';
import DataProvider from './componentes/context/DataContext';
import CarritoVacio from './componentes/carrito/CarritoVacio';
import Carrito from './componentes/carrito/CarritoElements';
import CarritoContent from './componentes/carrito/CarritoContents';
import BarraRedesSociales from './componentes/BarraRedesSociales';

function App(){
  return(
    //el hashRouter es para que cargue correctamente la vista segun un tutorial jajajaj
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route exact path='/'   element={<Inicio/>}/>
          <Route exact path='/registro'   element={<Registro/>}/>
          <Route exact path='/inicio'   element={<InicioSeccion/>}/>
          <Route exact path='*'   element={<NotFound/>}/>
          <Route exact path='/sesion'   element={<InicioSesion/>}/>
          <Route exact path='/carrito-vacio'   element={<CarritoVacio/>}/>
          <Route exact path='/carrito-content'   element={<CarritoContent/>}/>
        </Routes>
        <BarraRedesSociales></BarraRedesSociales>
      </HashRouter>
    </DataProvider>
  )
}

export default App;
