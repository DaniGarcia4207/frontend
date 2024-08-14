import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import GoogleOAuth from "./googleOAuth/GoogleOAuth";
import FireBaseAuth from "./Firebase/FireBaseAuth"

const Login = ()=>{

    const cookies = new Cookies()
    const [errorEmail, setErrorEmail]= useState(false)
    const [errorPassword, setErrorPassword]= useState(false)  
    const [showPassword, setShowPassword]= useState(true) 

    const [values, setValues] = useState({
        rol :"",
        email: "",
        password: "",
    })
    //guarda en la variable newValues los valores ingresados en el formulario de inisio de sesion
    const handleChange =(e)=>{
        const{name, value}= e.target
        const newValues ={
            ...values,
            [name]:value,
        }
        setValues(newValues)
    }
    const handleClickPassword = (e)=>{
        setErrorPassword(false)
    }
    const handleClickEmail = (e)=>{
        setErrorEmail(false)
    }
    const handleShowPassword = (e)=>{
        setShowPassword(!showPassword)
    }
    const iniciarSesion = (e) => {
        e.preventDefault()
         let select = document.getElementById("exampleFormControlSelect1");
         values.rol = select.value
        
        
        if(values.password.length === 0 && values.email.length){
            setErrorEmail(true)
            setErrorPassword(true)
            return
        }
        if(values.password.length === 0){
            setErrorPassword(true)
            return
        }
        if(values.email.length === 0){
            setErrorEmail(true)
            return
        }
        fetch("http://localhost:3001/login",{
            method:'POST',
            headers:{"Content-Type":"Application/json","Acept":"application/json"},
            body:JSON.stringify(values)
        })
            .then(response => response.json())
            .then(res =>{
                if(res.title === "error"){
                    Swal.fire({
                        title:"Las credenciales ingresadas no son correctas",
                        icon:"error"
                    })
                    window.location.hash='/login'
                    return
                }else{
                    cookies.set('email',res.email,{
                        secure: true,
                        sameSite:'None',
                        path:'/'
                    })
                    cookies.set('nombres',res.nombres,{
                        secure: true,
                        sameSite:'None',
                        path:'/'
                    })
                    cookies.set('apellidos',res.apellidos,{
                        secure: true,
                        sameSite:'None',
                        path:'/'
                    })
                    if(values.rol === "Usuario"){
                        window.location.hash = '/sesion'
                    }else{
                        window.location.hash = '/usuarios-registrados'
                    }
                }
            })
    }
    return (
        <div>
           <form onSubmit ={iniciarSesion}>
            <section clasName ="vh-100 bg-primary">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center aling-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong rounded">
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Sing in</h3>
                                     <div class="form-group mb-4">
                                        <div className="text-start"><label for="exampleForControlSelect1">Rol</label></div>
                                        <div class="input-group mb-3">
                                            <select class="form-control" id="exampleFormControlSelect1" name="rol">
                                                <option>Administrador</option>
                                                <option>Usuario</option>
                                            </select>
                                        </div>
                                     </div>
                                    <div className="form-outline mb-4">
                                        <div className="text-start">
                                            <label className="form-label" for="typeEmailX-2">Email</label>
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="text"class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"name="email"onChange={handleChange} onClick={handleClickEmail}/>
                                            <span className="text-start">{errorEmail ? <p>Debe ingresar un email</p>: ""}</span>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <div className="text-start">
                                            <label className="form-label" for="typeEmailX-2">Password</label>
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type={showPassword ? "password": "text"} class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"name="password"onChange={handleChange} onClick={handleClickPassword}/>
                                            <div class="input-group-appened">
                                                <span class="input-group-text" id="basic-addon2" onClick={handleShowPassword}></span>
                                            </div>
                                        </div>
                                        <span className="text-start">{errorPassword ? <p>Debe ingresar una contraseña</p>: ""}</span>
                                    </div>
                                    <div>
                                    <GoogleOAuth/>
                                    </div>
                                    <div>
                                    <FireBaseAuth/>
                                    </div>
                                    <div class="d-grid gap-2 col-15 mx-auto">
                                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
        </div>
    )
}
export default Login;
