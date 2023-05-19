const express = require('express');
const UserController = require('./controllers/UserController');
const CategoryController = require('./controllers/CategoryController');
const { validateLogin,
validateDisplayName,
validateEmail,
validatePassword,
 } = require('./middlewares/userMiddleware');
 const validateToken = require('./middlewares/tokenMiddleware');

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

app.get('/user', validateToken, UserController.getAllUsers);

app.get('/user/:id', validateToken, UserController.getUserById);

app.post('/categories', validateToken, CategoryController.addCategory);

app.get('/categories', validateToken, CategoryController.getCategories);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
