const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express()
const port = 3001
const path = require('path')
const multer = require('multer')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'public')));

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, path.join(__dirname, "./public/images")) // ruta donde se guardara la imagen cargada
  },
  filename: function(req, file, cb){
    cb(null, `${Date.now()}`) // la imagen cargada queda con la fecha y hora del sistema
  }
})
const upload = multer({storage})

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
//app.use("/registro-usuario", user.registerBD)
app.post("/registro-usuario",upload.single("foto"),user.register)
//app.use("/login", user.login)


app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})

//solicitandpo la conexion a la base de datos
const conexion = require('./configDB/configDB.js')
app.get("/todos-los-usuarios",(req,res)=>{
  conexion.connect(function(err){
    if(err)throw err;
    conexion.query("SELECT * FROM ecommerce.usuarios", function(err, result, fields){
      if(err) throw err;
      res.send(result)
    })
  })
})