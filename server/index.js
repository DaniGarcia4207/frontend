const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) => {
  //res.send('123!')
  let config = {
    method:"GET",
    url:"https://api.jsonbin.io/v3/b/6654d651e41b4d34e4fa5b0e",
    headers:{'Content-Type':'application/json',"X-Master-Key":"$2a$10$ENtdfET3W.pgjb8au3iKVeLRWG8xskdsrbpGpg2cSlfySgpCc.ZIO"}
  }
  axios(config)
  .then(result =>{
    res.send(result.data.record)
  })
})

const user = require("./controller/userControler")
app.post("/registro-usuario", user.register)
//app.use("/login", user.login)


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})

//solicitandpo la conexion a la base de datos
const conexion = require('./configDB/configDB.js')
app.get("/todos-los-usuarios",(req,res)=>{
  conexion.connect(function(err){
    if(err)throw err;
    conexion.query("SELECT * FROM sql10715865.usuarios", function(err, result, fields){
      if(err) throw err;
      res.send(result)
    })
  })
})