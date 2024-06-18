let contentBotones = document.getElementById('contentBotones');
let nombrePokemon = document.getElementById('nombrePokemon');
let imagenPokemon = document.getElementById('imagenPokemon');
let atras = document.getElementById('atras')
let siguiente = document.getElementById('siguiente')
let a=0
let nextClick = false
let previusClick = false
let endpoint2=`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`
var gif = 'img/cargando.gif'

function next(){
    nextClick = true
    a=a+20
    endpoint2=`https://pokeapi.co/api/v2/pokemon?offset=${a}&limit=20`
    cambiarEnlace()
}
function previus(){
    previusClick = true
    if(a>0){
      a=a-20
      endpoint2=`https://pokeapi.co/api/v2/pokemon?offset=${a}&limit=20`
      cambiarEnlace()
    }
}
function cambiarEnlace(){
    if(nextClick == true || previusClick == true){
        fetch(endpoint2)
        .then(resp => resp.json())
        .then(data=>{
            contentBotones.innerHTML = ""
            for(var i=0; i<data.results.length; i++){
                let temp = 
                `<button class="button btn btn-outline-dark col-2 m-2 btn-lg" onclick="cargarDetalle('${data.results[i].url}')">
                    <span class="text-uppercase">${data.results[i].name}</span>
                    </button>`
                contentBotones.innerHTML += temp
            }
        })
    }
}
function consumoAPI(){
    let endpoint="https://pokeapi.co/api/v2/pokemon"
    
    //Consumo - AJAX (Asynchronous JavaScript and XML)
    fetch(endpoint)
    .then(resp => resp.json())             //.then promesa
    .then(data => {
        //toda la logica
        contentBotones.innerHTML = ""
        for(var i=0; i<data.results.length; i++){
            let temp = 
            `<button class="button btn btn-outline-dark col-2 m-2 btn-lg" onclick="cargarDetalle('${data.results[i].url}')">
                <span class="text-uppercase">${data.results[i].name}</span>
                </button>`
            contentBotones.innerHTML += temp
        } 
    })
}

function cargarDetalle(url){
    if(navigator.onLine){
        fetch(url)
        .then(resp => resp.json())
        .then(data =>{
        nombrePokemon.innerText = data.name
        imagenPokemon.src = data.sprites.other.dream_world.front_default
    })
    }else{
        imagenPokemon.src = gif
    }
    window.addEventListener('online',cargarDetalle)
    window.addEventListener('offline',cargarDetalle)
}
