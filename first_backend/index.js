// require('dotenv').config()

// const express = require('express')
import express from 'express'
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) =>{
 res.send('divya goyal move on')
})

app.get('/login',(req,res)=>{
 res.send('<h1>Welcome to express</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


// hello world learning

// var os = require('os')
import os from 'os'
import fs from 'fs'

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('grettings.txt','hi' +user.username + '!\n',()=>{
console.log("file is created");

});