require('dotenv').config();
const app = require('./api');
const userRouter = require('./routers/userRouter');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.use('/users', userRouter);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
