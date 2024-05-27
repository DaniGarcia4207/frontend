import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import './registro.css'
// import { Link } from 'react-router-dom';
// import Header from './header/Header';
// import Footer from './footer/Footer';

export default function Registro() {
    const [identificacionError, setIdentificacionError] = useState('')
    const [nomError, setNomError] = useState(false)
    const [apellidoError, setApellidoError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailErrorVacio, setErrorEmailVacio] = useState(false)
    const [direccionError, setDireccionError] = useState(false)
    const [telefonoError, setTelefonoError] = useState(false)
    const [fechaNacimientoError, setFechaNacimientoError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorRepeat, setPasswordErrorRepeat] = useState(false)
    const [passComparacion, setPassComparacion] = useState(false)

    const form = useRef()
    function idError() { //Esta función setea a false la variable "identificacionError" para que el mensaje de error desaparezca cuando hacen click en el campo de la identificación.
        setIdentificacionError(false)
    }
    function nombreError() { //Esta función setea a false la variable "nomError" para que el mensaje de error desaparezca cuando hacen click en el campo del nombre.
        setNomError(false)
    }
    function apelliError() {
        setApellidoError(false)
    }
    function errorEmail() {
        setEmailError(false) //Para cuando no escriban una dirección de correo válida en su estructura.
        setErrorEmailVacio(false) //Para cuan do dejen vacío el campo email
    }
    function dirError() {
        setDireccionError(false)
    }
    function telError() {
        setTelefonoError(false)
    }
    function fechaNacimientoErrorFuncion(){
        setFechaNacimientoError(false)
    }
    function passError() {
        setPasswordError(false)
    }
    function passRepeat() {
        //setPasswordErrorRepeat(false)
        setPassComparacion(false)
        setPasswordErrorRepeat(false)
    }
    const [values, setValues] = useState({
        identificacion: "",
        nombres: "",
        apellidos: "",
        email: "",
        direccion: "",
        telefono: "",
        fechaNacimiento: "",
        password: "",
        passRepeat: ""
    });
    const handleChange = (e) => {//cuando se cambie de imput se guarda la informacion en la variable
        const { name, value } = e.target
        const newValues = {
            ...values,
            [name]: value,
        };
        setValues(newValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
       
        let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&]{8,}$/  //minimo 8 caracteres,minimo una letra mayuscula, una minuscula, un numero y un caracter especial
        let validEmail = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/ //que el email ingresado tenga el formato correcto de una dirección de correo electrónico
        if (values.identificacion.length < 5 || values.identificacion.length > 10 || values.identificacion.length === 0) {
            setIdentificacionError(true)
            return;
        }else if (values.nombres.length < 3 || values.nombres.length === 0) { //El método trim( ) elimina los espacios en blanco en ambos extremos del string.        
            setNomError(true)
            return;
        } else if (values.apellidos.length < 3 || values.apellidos.length === 0) {
            setApellidoError(true)
            return;
        } else if (values.email.length === 0) {
            setErrorEmailVacio(true)
            return;
        } else if (!validEmail.test(values.email)) {
            setEmailError(true)
            return;
        } else if (values.direccion.length < 15) {
            setDireccionError(true)
            return;
        } else if (values.telefono.length < 10 || values.telefono.length > 10) {
            setTelefonoError(true)
            return;
        } else if (values.fechaNacimiento === "") {
            setFechaNacimientoError(true)
            return;
        } else if (!validPassword.test(values.password)) {
            setPasswordError(true)
            return;
        } else if (values.passRepeat.length === 0) {
            setPasswordErrorRepeat(true)
            return;
        } else if (values.password !== values.passRepeat) {
            setPassComparacion(true)
            return;
        }
        console.log("--------------->>>",values)
        fetch('http://localhost:3001/registro-usuario', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(values),
        })

            .then((response) => {
                if (response.status === 200) {
                    // alert("Usuario creado con éxito")
                    Swal.fire({
                        title: "Usuario creado con éxito",
                        icon: "success",
                    });
                    form.current.reset()
                    window.location.hash = '/login'

                }
                if (response.status === 400) {
                    //alert(" + response.status)
                    Swal.fire({
                        title: "No fue posible crear el usuario porque ya existe el correo ingresado " + values.email,
                        icon: "warning"
                    })

                }
            })
            .catch((error) => {
                //alert("No fue posible finalizar el proceso de registro por un error " + error)
                Swal.fire({
                    title: "No fue posible finalizar el proceso de registro por un error interno del servidor ",
                    icon: "error"
                })
            })
    }

    return (
        <div className="body">
            <form className="principal" onSubmit={handleSubmit} ref={form}>
                <h2>REGISTRO</h2>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Identificacion</label>
                    <input type="number" className="form-control" placeholder="Debe estar entre 5 y 10 digitos" name="identificacion" onChange={handleChange} onClick={idError}/>
                    {identificacionError ? <p>La identificación debe estar entre 5 y diez números</p> : " "}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Nombre</label>
                    <input type="text" className="form-control" placeholder="Debe ser de minimo 3 caracteres " name="nombres" onChange={handleChange} onClick={nombreError}/>
                    {nomError ? <p>El nombre debe contener mínimo 3 caracteres</p> : " "}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Apellidos</label>
                    <input type="text" className="form-control" placeholder="Debe ser de minimo 3 caracteres" name="apellidos" onChange={handleChange} onClick={apelliError} />
                    {apellidoError ? <p>El apellido debe contener mínimo 3 caracteres</p> : " "}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Debe ser un formato valido.Ejemplo:alguien@gmail.com" name="email" onChange={handleChange} onClick={errorEmail} />
                    {emailError ? <p>El email debe tener la estructura de una dirección de correo electrónico. Verbigracia: alguien@gmail.com</p> : ""}
                    {emailErrorVacio ? <p>Debe introducir una dirección de correo electrónico.</p> : ""}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Direccion</label>
                    <input type="text" className="form-control" placeholder="Debe ser de minimo 15 caracteres" name="direccion" onChange={handleChange} onClick={dirError} />
                    {direccionError ? <p>La dirección debe contener mínimo 15 caracteres</p> : " "}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Telefono</label>
                    <input type="number" id="disabledTextInput" className="form-control" placeholder="Debe ser de 10 numeros" name="telefono" onChange={handleChange} onClick={telError} />
                    {telefonoError ? <p>El teléfono debe ser de 10 números</p> : " "}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" placeholder="mm/dd/aaaa" name="fechaNacimiento" onChange={handleChange} onClick={fechaNacimientoErrorFuncion}/>
                    {fechaNacimientoError ? <p>Debe introducir una fecha de nacimiento</p> : " "}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleChange} onClick={passError} />
                    {passwordError ? <p>La contraseña no cumple con los requisitos mínimos solicitados(Mínimo 8 caracteres de longitud. Almenos una letra mayúscula. Almenos una letra minúscula. Almenos un número. Almenos un caracter especial).</p> : " "}
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Repeat your Password</label>
                    <input type="text" className="form-control" name="passRepeat" onChange={handleChange} onClick={passRepeat}/>
                    {passComparacion ? <p>Las contraseñas ingresadas no coinciden</p> : " "}
                    {passwordErrorRepeat ? <p>Este campo no puede quedar vacío.</p> : " "}
                </div>
                {/* <div className="mb-3">
                    <label for="disabledSelect" className="form-label">Nombre</label>
                    <select id="disabledSelect" className="form-select">
                        <option>Disabled select</option>
                    </select>
                    </div>
                    <div className="mb-3">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled/>
                        <label className="form-check-label" for="disabledFieldsetCheck">
                        Can't check this
                        </label>
                    </div>
                    </div>*/}
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    )
}