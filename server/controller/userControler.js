const fs = require('fs').promises;
const path = require('path');

const userFilePath = path.join(
    __dirname, 
    "../../src/componentes/usuariosRegistrados.json");

const controller = {
    register: async function(req, res){
        try{
            // Leer el archivo JSON una sola vez
            const usersData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(usersData);
            console.log(req.file)
            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
                identificacion : req.body.identificacion,
                nombres :req.body.nombres,
                apellidos :req.body.apellidos,
                email: req.body.email,
                direccion : req.body.direccion, 
                telefono: req.body.telefono,
                fechaNacimiento : req.body.fechaNacimiento,
                image: req.file.filename,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario",
                fecha_creacion : new Date(),
            };

            for (x of users){
                if(
                    x.email === req.body.email ||
                    x.identificacion === req.body.identificacion
                ){
                    res.status(400).send("El email ya existe");
                    return;
                }
            }
            users.push(usuarioNuevo);

            //Escribirt el archivo JSON
            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));
            res.status(200).send("Usuario creado con exito");
        }catch(error){
            console.error("Error al procesar el registro",error);
            res.status(500).send("Error interno del servidor");
        }
    },
    login: async function(req, res){
        try{
            const usersData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(usersData);

            for (x of users){
                if(x.email === req.body.email &&
                   x.password === req.body.password &&
                   x.rol === req.body.rol
                ){
                    return res.json({
                        nombres: x.nombres,
                        apellidos: x.apellidos,
                        email:x.email,
                    });
                }
            }
            res.json({title: "error"});//si las credenciales son erradas entonces retorna este json
        }catch(error){
            console.error("Error al procesar el registro:", error);
            res.status(500).send("Error interno del servidor")
        }
    },
};



/*const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const connection = require('../configDB/configDB.js')
app.use(cors())

const controller = {
    register: function(req, res){
      console.log("body",req.body)
        let config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: 'https://api.jsonbin.io/v3/b/6654d651e41b4d34e4fa5b0e',
            headers: {
              'Content-Type': 'application/json',
              "X-Master-Key": "$2a$10$ENtdfET3W.pgjb8au3iKVeLRWG8xskdsrbpGpg2cSlfySgpCc.ZIO"
            }
        }
        axios(config)
        .then(result => {
            let id = result.data.record.length + 1
            const usuarioNuevo = {
              id: id,
              identificacion: req.body.identificacion,
              nombres: req.body.nombres,
              apellidos: req.body.apellidos,
              email: req.body.email,
              direccion: req.body.direccion,
              telefono: req.body.telefono,
              fechaNacimiento: req.body.fechaNacimiento,
              password: req.body.password,
              estado: "activo",
              rol: "Usuario",
              fecha_creación: new Date(),
            };
            if (result.data.record.length === 0) {
              result.data.record.push(usuarioNuevo)
            }
            else {
              for (x of result.data.record) {
                if (x.email === req.body.email) {
                  res.status(400).send("Usuario ya existe en la Base de Datos")
                  return
                }
              }
              result.data.record.push(usuarioNuevo)
            }
    
            fetch('https://api.jsonbin.io/v3/b/6654d651e41b4d34e4fa5b0e', {
              method: "PUT",
              headers: {
                "Content-Type": "Application/json",
                "X-Master-Key": "$2a$10$ENtdfET3W.pgjb8au3iKVeLRWG8xskdsrbpGpg2cSlfySgpCc.ZIO"
              },
              body: JSON.stringify(result.data.record),
            })
              .then(response => {
                if (response.status === 200) {
                  res.status(200).send('ok')
                  return
                }
                else {
                  res.status(400).send("No Ok")
                  return
                }
            })
        })
    },
  registerBD: function(req, res){
    const {identificacion,nombres,apellidos,email,direccion,telefono,fechaNacimiento,password} = JSON.parse(JSON.stringify(req.body))
    try{
      const sql = "INSERT INTO ecommerce.usuarios(identificacion,nombres,apellidos,email,direccion,telefono,fechaNacimiento,password,fechaCreacion)VALUES (?,?,?,?,?,?,?,?,?)"
      connection.execute(sql, [identificacion,nombres,apellidos,email,direccion,telefono,fechaNacimiento,password,new Date()])
      res.status(200).send("Registro exitoso")
    }catch(error){
      console.error("Error al insertar en la base de datos",error)
      res.status(500).send("Error al insertar registro en la base de datos")
    }
  }
} */
module.exports = controller;
