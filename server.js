const express =  require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router); // añade el router a la app de express

router(app); // utiliza la funcion creada en network para crear las rutas que tengamos alli definidas

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion está escuchando en http://localhost:3000');