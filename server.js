const express =  require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

const app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(router); // añade el router a la app de express

router.get('/message', function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro header personalizado",
  });
  response.success(req, res, 'Lista de Mensajes');
});
router.post('/message', function (req, res) {
  console.log(req.query);
  if (req.query.error == 'ok') {
    response.error(req, res, 'Error inesperado', 500, 'Es una simulacion de error');
  } else {
    response.success(req, res, 'Creado correctamente', 201);
  }
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion está escuchando en http://localhost:3000');