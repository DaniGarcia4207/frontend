import React, { useContext, useEffect } from "react";
import './header.css';
import { Link } from "react-router-dom";
import {dataContext}from '../context/DataContext';


function Header() {
    const {comprasDelCarrito, setComprasDelCarrito}= useContext(dataContext)
    function whatsapp(){
        const url = `https://wa.link/aquyz0`
        window.open(url,"_blank");
    }

    useEffect(() => {
        const list = document.querySelectorAll(".list");

        function activeLink() {
        list.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
        }
        list.forEach((item) => item.addEventListener("click", activeLink));
    })
    
    return (
        <div className="contenedor">
                <nav class="navbar navbar-expand ">
                <div className="contImagen">
                    <img src="logo.avif" className="logo"/>
                </div>

                    <div class="navigation">
                        <ul>
                            <li class="list active">
                            <a href="#">
                                <span class="icon">
                                <ion-icon name="home-outline"></ion-icon>
                                </span>
                                <span class="text">Home</span>
                                <span class="circle"></span>
                            </a>
                            </li>
                            <li class="list">
                            <a href="#">
                                <span class="icon">
                                <ion-icon name="person-outline"></ion-icon>
                                </span>
                                <span class="text">Profile</span>
                                <span class="circle"></span>
                            </a>
                            </li>
                            <li class="list">
                            <a href="#">
                                <span class="icon">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                </span>
                                <span class="text">Message</span>
                                <span class="circle"></span>
                            </a>
                            </li>
                            <li class="list">
                            <a href="#">
                                <span class="icon">
                                <ion-icon name="camera-outline"></ion-icon>
                                </span>
                                <span class="text">Photos</span>
                                <span class="circle"></span>
                            </a>
                            </li>
                            <li class="list">
                            <a href="#">
                                <span class="icon">
                                <ion-icon name="settings-outline"></ion-icon>
                                </span>
                                <span class="text">Settings</span>
                                <span class="circle"></span>
                            </a>
                            </li>
                            <div class="indicator"></div>
                        </ul>
                        </div>
                        <Link to='/carrito-content'>
                            <li className="nav-item ">
                               <h2 className="carrito">🛒{comprasDelCarrito.length}</h2>
                            </li>
                        </Link>
                        <form className="d-flex input-group input-group-lg" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                        </nav>
                   

                     {/* <nav className="navbar navbar-expand-lg">
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
                            <Link to='/carrito-content'>
                            <li className="nav-item">
                               <h2 className="carrito">🛒{comprasDelCarrito.length}</h2>
                            </li>
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" type="submit">Search</button>
                        </form>
                    </div>
                    </nav>*/}

                </div>
    )

}
export default Header