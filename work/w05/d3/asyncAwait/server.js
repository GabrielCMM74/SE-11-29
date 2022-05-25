const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
require('./config/db');


app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

const indexRouter = require('./routes/index');
const dogRouter = require('./routes/dogs.js');

app.use('/', indexRouter);
app.use('/dogs', dogRouter);



app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
