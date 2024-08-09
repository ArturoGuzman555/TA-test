const express = require("express");
require('dotenv').config ()
const axios = require("axios")

const server = express()
const {PORT} = process.env || 3000
const {URL} = process.env
const {URL_RESPADO}=process.env
server.


server.get("/recovery", function (req, res){
    try{
        axios.get(URL)
        const response = axios.get(URL);
        res.json(response)
    }
    catch{
        res.send(consle.log("error"))
    }
})

server.listen(PORT, () =>{
    console.log(`servidor escchando`)
})
