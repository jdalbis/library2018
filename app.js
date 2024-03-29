const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '/views/index.html'));
  res.render('index', { list: ['a', 'b'], title: 'Library' });
});

app.listen(port, () => {
  debug(`Running on PORT: ${chalk.green(port)}`);
});
