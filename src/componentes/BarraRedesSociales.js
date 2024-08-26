import React from "react";
import './barra-redes-sociales.css'

function BarraRedesSociales(){
    return (
        <div className="container-bar">
            <div className="icon-social">
                <a href="" className="me-4 text-reset icon-facebook"><span id="title">Facebook</span><i class="bi bi-facebook"></i></a>
                <a href="" className="me-4 text-reset icon-twitter"><span id="title">Twitter X</span><i class="bi bi-twitter-x"></i></a>
                <a href="dglr628@gmail.com" className="me-4 text-reset icon-google"><span id="title">Gmail</span><i class="bi bi-envelope-heart"></i></a>
                <a href="" className="me-4 text-reset icon-linkedin"><span id="title">Linkedin</span><i class="bi bi-linkedin"></i></a>
                <a href="" className="me-4 text-reset icon-github"><span id="title">GitHub</span><i class="bi bi-github"></i></a>
                <a href="" className="me-4 text-reset icon-pinterest"><span id="title">Pinterest</span><i class="bi bi-pinterest"></i></a>
                <a href="https://wa.link/aquyz0" className="me-4 text-reset icon-whatsapp"><span id="title">Whatsap</span><i class="bi bi-whatsapp"></i></a>
            </div>
        </div>
    )
}

export default BarraRedesSociales