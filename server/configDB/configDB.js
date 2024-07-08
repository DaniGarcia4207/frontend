const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"ecommerce",
    port:3306,
})

connection.connect((error)=>{
    if(!error){
        console.log("conexion exitosa a la base de datos")
    }else{
        console.log("conexion fallida a la base de datos")
    }
})
module.exports = connection