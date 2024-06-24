const mysql = require('mysql2')
const connection = mysql.createConnection({
    host:"sql10.freesqldatabase.com",
    user:"sql10715865",
    password:"P6cSU4IgcK",
    database:"sql10715865",
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