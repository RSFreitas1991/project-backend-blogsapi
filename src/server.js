require('dotenv').config();
const app = require('./api');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const categoriesRouter = require('./routers/categoriesRouter');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.use('/user', userRouter);
app.use('/login', authRouter);
app.use('/categories', categoriesRouter);

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
