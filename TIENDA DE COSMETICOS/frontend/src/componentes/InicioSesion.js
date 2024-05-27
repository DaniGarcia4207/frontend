import React from 'react'
import Swal from 'sweetalert2'
import Cookies from 'universal-cookie'
import Body from './body/CardList'
import Carrusel from './Carrusel/Carrusel'
import Footer from './footer/Footer'
import SesionExpired from './sesionExpired/SesionExpired'
export default function InicioSesion() {
    const cookie = new Cookies();
    const email = cookie.get('email');
    const nombres = cookie.get('nombres');
    const apellidos = cookie.get('apellidos'); //
    function Cerrar(){
        Swal.fire({
            title: "Estas seguro de cerrar Sesion",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        })
        .then((result)=>{
            if(result.isConfirmed){
                cookie.remove('email')
                cookie.remove('nombres')
                cookie.remove('apellidos')
                window.location.hash = '/'
            }
        })
    }
  return (
    <div>
        <div>
            <h2>Bienvenido: {nombres} {apellidos}<br/>{email}</h2>
        </div>
        <div className="contenedor">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src="logo.avif" className="logo"/>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <i class="bi bi-house-heart-fill"></i>
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-play-btn-fill"></i>
                            <a className="nav-link" href="#">Tutoriales</a>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-sliders"></i>
                            <a className="nav-link" href="#">Referencias</a>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-pc-display-horizontal"></i>
                            <a className="nav-link" href="#">Recursos</a>
                        </li>
                        <li className="nav-item">
                            <i class="bi bi-person-rolodex"></i>
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <button onClick={Cerrar}>Cerrar Sesion</button>
                </div>
            </div>
        </nav>
    </div>
<Carrusel/>
<Body />
<Footer />
<SesionExpired/>
</div>
)
}

