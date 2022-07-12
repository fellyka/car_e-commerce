const express = require('express');
const data = require('./data.js')

const app = express();
const PORT = 8181;

app.get('/api/products',(req, res)=>{
    res.send(data.products);
})

app.listen(PORT, ()=>{
    console.log(`Serve at port ${PORT}`)
})