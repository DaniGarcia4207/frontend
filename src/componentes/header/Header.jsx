import React, { useContext } from "react";
import './header.css';
import { Link } from "react-router-dom";


function Header() {
    //sconst {ComprasDelCarrito} = useContext(dataContext);
    function whatsapp(){
        const url = `https://wa.link/aquyz0`
        window.open(url,"_blank");
    }
    
    return (
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
                                <i class="bi bi-whatsapp"></i>
                                <a className="nav-link" href="#" onClick={whatsapp}>Contacto</a>
                            </li>
                            <Link to='/registro'>
                            <li className="nav-item">
                                <i class="bi bi-person-fill-check"></i>
                                <a className="nav-link " href="#">Registrarse</a>
                            </li>
                            </Link>
                            <Link to='/inicio'>
                            <li className="nav-item">
                                 <i class="bi bi-box-arrow-in-right"></i>
                                <a className="nav-link" href="#">Iniciar sesion </a> 
                            </li>
                            </Link>
                            <Link to='/carrito-vacio'>
                            <li className="nav-item">
                                 <i class="bi bi-box-arrow-in-right"></i>
                                <a className="nav-link " href="#">Comprar </a> 
                            </li>
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Header