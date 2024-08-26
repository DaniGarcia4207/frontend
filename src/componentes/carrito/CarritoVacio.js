import React from 'react'

export default function CarritoVacio() {
  return (
    <div className="container-fluid  mt-100">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">              
            </div>
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <img src="carrito.jpg" alt='carrito-vacio' width="200" height="400" className="mb-1 mr-1"/>
                <h3><strong>Tu carro esta vacio</strong></h3>
                <h4>Agrega cosas que te hagan feliz 😃</h4>
                <a href="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">Comprar</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}