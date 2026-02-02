const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

const authRouter = require('./routes/Admin/auth');

app.use(authRouter);

app.listen(3000, () => {
  console.log('Listening');
});