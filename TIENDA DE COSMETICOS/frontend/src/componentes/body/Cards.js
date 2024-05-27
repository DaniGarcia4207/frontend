import React from 'react'
import './card.css'

export default function Cards(props) {
  return (
    <div className='card2'>
       <img src={props.items.image} alt='logo' />
       <div>
         <h6>{props.items.title}</h6>
         {/* <span className='fecha'>Fecha de Lanzamiento:<br></br>{props.items.fechaLanzamiento}</span> */}
         <p className='descripcion'>{props.items.descripcion}</p>
         <h6>{props.items.precio}</h6>
         <button type="button" class="btn btn-outline-info">Comprar</button>
       </div>
    </div>
  )
}
