const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');

//const initializePassport = require('/passport-config');
//initializePassport(passport)

const users = [];

app.use(express.static('./public')) //gibt an wo die statischen dateinen sind
app.set('view-engine', 'ejs'); //a view engine to render files on the server
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
    res.render('index.ejs');
});

app.get('/list', (req, res) => {
    res.render('list.ejs');
})

app.get('/timer',(req, res) => {
    res.render('timer.ejs');
})

app.get('/notes',(req, res) => {
    res.render('notes.ejs')
})


const userRouter = require('./routes/users')

app.use('/users', userRouter)


app.listen(3000);