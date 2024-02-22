const express = require('express')

const App= express()

const port=8080;

App.listen(port,()=>{
    return console.log("App Running")
})

App.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>')
})