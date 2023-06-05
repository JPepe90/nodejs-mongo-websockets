/* MOK
const list = [];

function addMessage(message) {
  list.push(message);
}

function getMessages() {
  return list;
}
*/

const db = require('mongoose');
const Model = require('./model');
const dbInfo = require('../../lib/mongo');

const dbConn = new dbInfo();  // Creo una nueva instancia de la conexion a Mongo

dbConn.Promise = global.Promise; // Uso el modelo de Promesa global
db.connect(dbConn.dbURI, {
  useNewUrlParser: true,
});
console.log('[DB] Conectada con exito');

// dbConn.connect(); // Ejecuto el metodo de conexion a la base de Mongo
// console.log(dbConn.connCheck());  // Uso el metodo check de la conexion

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

async function updateText(id, message) {
  console.log(id, message);
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = { 
  add: addMessage, 
  list: getMessages,
  updateText: updateText
}
