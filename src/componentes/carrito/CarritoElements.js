import React,{useContext} from "react";
import {dataContext}from '../context/DataContext';

function CarritoElements(){
    const {comprasDelCarrito, setComprasDelCarrito}= useContext(dataContext)
    const eliminarComprasDelCarrito = (e) =>{
        const comprasFiltradas = comprasDelCarrito.filter((filtro)=> filtro.id !== Number(e.currentTarget.id))
        setComprasDelCarrito(comprasFiltradas)
    }
    const cantidad = ()=>{
        setComprasDelCarrito((cosmeticosActuales)=>{
            return cosmeticosActuales.map((cosm)=>{
                const valor = document.getElementById(cosm.id)
                return{...cosm, precioCarrito: cosm.precio*valor.value, cantidad : valor.value}
            })
        })
    }
    const formatoNumero = (number)=>{
        return new Intl.NumberFormat().format(number)
    }
    return comprasDelCarrito.map((cosm)=>{
        return(
            <section class="h-100">
                <div class="container h-100 py-5">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-10">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                            <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                                        class="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                            </div>

                            <div class="card rounded-3 mb-4">
                                <div class="card-body p-4">
                                    <div class="row d-flex justify-content-between align-items-center">
                                        <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img src={cosm.image} class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                                        </div>
                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                        <p class="lead fw-normal mb-2">{cosm.title}</p>
                                        <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    <i class="fas fa-minus"></i>
                                    </button>

                                    <input id={cosm.id} min="1" name="quantity" value={cosm.cantidad} onChange={cantidad} type="number"
                                    class="form-control form-control-sm" />

                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-link px-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">$ {formatoNumero(cosm.precioCarrito)}</h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    {/* <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a> */}
                                    <button className="btn btn-danger" id={cosm.id} onClick={eliminarComprasDelCarrito}><i class="bi bi-trash3-fill"></i></button>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="card mb-4">
                            <div class="card-body p-4 d-flex flex-row">
                                <div data-mdb-input-init class="form-outline flex-fill">
                                <input type="text" id="form1" class="form-control form-control-lg" />
                                <label class="form-label" for="form1">Discound code</label>
                                </div>
                                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-warning btn-lg ms-3">Apply</button>
                            </div>
                            </div>

                            <div class="card">
                            <div class="card-body">
                                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
           </section>
        )
    })
}
export default CarritoElements