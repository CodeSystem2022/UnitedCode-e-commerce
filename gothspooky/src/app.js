const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override');

//Archivos de ruta
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');
const adminRouter = require('./routes/adminRouter');
const productsRouter = require('./routes/productsRouter');
const cartRouter = require('./routes/cart');
const detailRouter = require('./routes/detailRouter');
const categoriaRouter = require('./routes/categoriaRouter');

// Controlador de administrador
const adminController = require('./controllers/adminController');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(methodOverride('_method'));

//rutas
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/product', detailRouter);
app.use('/admin', adminRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/categoria', categoriaRouter);

// Ruta para eliminar un producto
app.post('/admin/eliminar/:id', adminController.eliminar);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
