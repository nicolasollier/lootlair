const express = require("express");
const session = require('express-session');
const params = require('./config/session.js')
const helmet = require('helmet');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(session(params));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
