import React,{useContext} from 'react'
import './card.css'
import { dataContext } from '../context/DataContext'

export default function Cards(props) {
 const {setComprasDelCarrito} = useContext(dataContext)
 function addToCart(){
  setComprasDelCarrito((currentCompras)=>{
    const isItemFound = currentCompras.find((item)=> item.id === props.items.id)
    if(isItemFound){
      return currentCompras.map((item)=>{
        if(item.id === props.items.id){
          return {...item, cantidad: Number(item.cantidad) +1, precioCarrito: item.precioCarrito + item.precio}
        }else{
          return item
        }
      })
    }else{
      return[...currentCompras,props.items]
    }
  })
 }
  return (
    <div className='card2'>
       <img src={props.items.image} alt='logo' />
       <div>
         <h6>{props.items.title}</h6>
         {/* <span className='fecha'>Fecha de Lanzamiento:<br></br>{props.items.fechaLanzamiento}</span> */}
         <p className='descripcion'>{props.items.descripcion}</p>
         <h6>{props.items.precio}</h6>
         <button type="button" class="btn btn-outline-info" onClick={addToCart}>Comprar</button>
       </div>
    </div>
  )
}
