let endpointObtener = 'https://codetesthub.com/API/Obtener.php'
let myModal = new bootstrap.Modal(document.getElementById('modalInsertar'))
let modalActualizar = new bootstrap.Modal(document.getElementById('modalActualizar'))
let row = document.getElementById('row')
let formInsertar = document.getElementById("formInsertar")
let formActualizar = document.getElementById("formActualizar")
formInsertar.addEventListener("submit",function(event){
    event.preventDefault()
    console.log('deteniendo el envio')
    insertarPersona()
})
formActualizar.addEventListener("submit",function(event){
    event.preventDefault()
    console.log('deteniendo el envio')
    actualizarPersonas()
})
let contador = 0
function obtenerDatos(){
    fetch(endpointObtener)
    .then(resp => resp.json())             
    .then(data => {
        row.innerHTML = ""
        for(var i=0; i<data.length; i++){
            contador++
            let temp =`<tr>
               <td >${contador}</td>
                <td >${data[i].cedula}</td>
                <td >${data[i].nombres}</td>
                <td >${data[i].apellidos}</td>
                <td >${data[i].telefono}</td>
                <td >${data[i].direccion}</td>
                <td >${data[i].email}</td>
                <td> <button class="btn btn-danger" onclick="eliminarPersona(${data[i].cedula})">x</button></td>
                <td> <button class="btn btn-info" id="editar" data-bs-toggle="modal" data-bs-target="#modalActualizar" onclick="actualizarPersonas"><img src="img/icono_editar.png" alt="Imagen"></button></td>
            </tr>`
            row.innerHTML += temp
        } 
    })
}
obtenerDatos()

function insertarPersona(){
    let datos = new FormData(formInsertar)
    let configuracion = {
        method: "POST",
        headers:{
            "Accept": "application/json"
        },
        body: datos
    }

    fetch('https://codetesthub.com/API/Insertar.php',configuracion)
    .then(resp => resp.json())
    .then(data=>{
        console.log(datos)
        console.log("la api responde con")
        console.log(data)
        if(data.status){
            myModal.hide()
            obtenerDatos()
            formInsertar.reset()
        }else{
            alert("Error al insertar")
        }
    })
}

function eliminarPersona(cedulaIm){
    let datos = new FormData()
    datos.append("cedula",cedulaIm)
    let configuracion ={
        method: "POST",
        headers:{
            "Accept": "application/json"
        },
        body:datos
    }
    fetch('https://codetesthub.com/API/Eliminar.php',configuracion)
    .then(resp => resp.json())
    .then(data =>{
        console.log("la api responde con")
        console.log(data)
        if(data.status){
          obtenerDatos()
        }else{
          alert('esta persona no puede ser eliminada')
        }
    })
}

function  actualizarPersonas() {
    let datos = new FormData(formActualizar)
    let configuracion = {
        method:"POST",
        headers:{
            "Accept":"application/json"
        },
        body:datos,
    };
    fetch("https://codetesthub.com/API/Actualizar.php", configuracion)
    .then(res => res.json())
    .then(data =>{
        console.log(datos)
        console.log('Respuesta JSON servidor: ')
        console.log(data)
        if(data.status){
            modalActualizar.hide()
            obtenerDatos()
            formActualizar.reset()
        }else{
            alert("Error al insertar")
        }
    })
}