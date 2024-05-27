import React from "react";
import {useIdleTimer}from 'react-idle-timer'
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
//6938
const timeout = 10000 //activity Timeout in milliseconds

function SesionExpired(){
    const cookies = new Cookies()

    const onIdle = () => {
        cookies.remove('email', {path: "/"})
        window.location.hash='/inicio'
        Swal.fire({
            title:"La sesion expiro por inactividad. Inicie sesion de nuevo",
            icon:"info"
        })
    }
    const getRemainingTime =useIdleTimer({
        onIdle,
        timeout,
        throttle:500
    })
    console.log(getRemainingTime)
    return(
        <div>
        </div>
    )
}
export default SesionExpired