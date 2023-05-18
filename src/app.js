const express = require('express');
const UserController = require('./controllers/UserController');
const { validateLogin,
validateDisplayName,
validateEmail,
validatePassword,
 } = require('./middlewares/userMiddleware');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', validateLogin, UserController.login);

app.post(
  '/user', 
validateDisplayName, 
validateEmail,
validatePassword,
UserController.addNewUser,
);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
