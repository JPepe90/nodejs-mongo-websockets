const store = require('./store');

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      reject('Datos incorrectos');
      return false
    }
    const fullMessage = {
      user: user,
      message: message,
      dage: new Date()
    };
    store.add(fullMessage);
    resolve(fullMessage);
  })
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

function updateMessage(id, message) {
  console.log(id, message);
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  })
}

module.exports = { addMessage, getMessages, updateMessage };