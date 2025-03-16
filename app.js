var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Route = require('./routes/routes')


const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};



app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use("/api", Route)

const PORT = 9000;


app.get("/",(req,res)=>{
  res.send("it is working")
})
app.listen(PORT, function (req, res) {
  console.log('Hey I am Responding from Backend')
})
mongoose.connect("mongodb+srv://NRY:dd0W8B5ZUDPtxpbF@cluster0.3caki.mongodb.net/test")
  .then((succ) => {
    console.log("Database is Connected Successfully")
  })
  .catch((err) => {
    console.log(err)
  })

  //connection with cloudinary
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); 

app.get('/songs/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'uploads/songs', filename);
  res.sendFile(filePath);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
