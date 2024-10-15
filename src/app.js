//Aca vamos a ejecutar todo el servidor por lo cual lo incializamos 
const express = require('express');

const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
const path = require('path');


const app =express();
//Importamos las rutas 
const customerRoutes = require('../src/routes/customer');


//Settings, para poder configurar express
app.set('port', process.env.PORT || 3000);
//Motor de platillas (ejs)
app.set('view engine', 'ejs'); 
//Indicamos donde esta la carpeta de viewa y usamos path para unir los directorios
app.set('views', path.join(__dirname, 'views'));

//Middleware, funciones que se ejecutan antes de las peticiones de los usuarios (rutas) 
app.use(morgan('dev')); //esto lo vemos en la consola 
app.use(express.urlencoded({extended: false})); 

//conectamos con MySQL 
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'L1zeth.15*',
  port: 3306,
  database: 'CrudfinanzasPersonales',
}, 'single'));

//Rutas 
app.use(customerRoutes);


//Archivos estaticos 
app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(app.get('port'), () => {
  console.log('Server on port 3000')
});

