require('dotenv').config();
const app = require('./api');
const userRouter = require('./routers/userRouter');
const authRouter = require('./routers/authRouter');
const categoriesRouter = require('./routers/categoriesRouter');
const postRouter = require('./routers/postRouter');

const port = process.env.API_PORT || 3000;

app.use('/user', userRouter);
app.use('/login', authRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
