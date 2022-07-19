require('dotenv').config();
const app = require('./api');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.use('/users', userRouter);
app.use('/login', authRouter);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
