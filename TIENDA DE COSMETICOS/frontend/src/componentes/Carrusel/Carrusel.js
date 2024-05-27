import React from 'react'
import imagen1 from './imagen1.png'
import imagen2 from './imagen2.jpeg'
import imagen3 from './imagen3.jpeg'
import imagen4 from './imagen4.jpeg'
import imagen5 from './imagen5.jpeg'
import imagen6 from './imagen6.jpeg'
import imagen7 from './imagen7.jpeg'
import './carrusel.css'
function Carrusel() {

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        </div>
        <div class="carousel-inner" bg-secondary>
        <div className="carousel-item active" data-bs-interval="10000">
            <img src={imagen1}class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen3} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen4} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen5} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen6} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={imagen7} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden"></span>
        </button>
      </div>
    )
}
export default Carrusel
