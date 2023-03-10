const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var passport = require("passport"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

dotenv.config({path: "./config.env"});
const PORT = process.env.PORT || 3000;
// const DB = process.env.DB;
const dbconn = require("./config/db");
// const passport = require("passport");




dbconn();
const app = express();

//passports

//middlewares
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded("extended: true"));
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/home', (req, res)=> {
    res.render('index')
});


app.get('/signup-farmer', (req, res)=> {
    res.render("signup-admin");
});
app.get('/login-farmer', (req, res)=>{
    res.render('');
});

app.get('/api/home', (req, res)=> {
    res.render("index");
});

app.get('/signup-buyer', (req, res)=> {
    res.render('signinbuyer');
});
app.get('/login-buyer', (req, res)=> {
    res.render('signinbuyer');
});
app.get('/login-admin', (req, res)=>{
    // res.render('signupadmin');
});
app.get('/signup-admin', (req, res)=>{
    res.render('signupadmin');
});

app.get('/signup-user', (req, res) => {
    res.rednder("signup-buyer");
});

app.post




app.listen(PORT , ()=> {
    console.log(`listening on ${PORT}`);
});