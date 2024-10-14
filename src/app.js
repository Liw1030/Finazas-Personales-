//Con este archivo se ejecuatara el servidor

const express = require('express'); //Aqui lo requerimos
const path = require('path'); //para no llenarme de rutas
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const app = express();//Incializamos con una constante 

//importaando rutas
const customerRoutes = require('./routes/customer');


//Configurar express
app.set('port', process.env.PORT || 3000
)


//Configuramos el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//middlewares, funciones que se ejecutan antes de las peticiones de los usuariso
app.use(morgan('dev'));


//conectar a mysql
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'L1zeth.15*',
    port: 3306,
    database: 'CrudfinanzasPersonales'
}, 'single'));

//rutas
app.use('/', customerRoutes)


//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))


//Otra configuración para poder usar local host 3000
app.listen(3000, () => {
    console.log('server on port 3000');
  });


//emepzando el servidor
 //Incializamos el servidor, cuando inicie el servidar mostrara 
//un mensaje que nos diga que el servidor esta funcionando 



//en la consola con node src/app.js verificamos el funcionamiento

