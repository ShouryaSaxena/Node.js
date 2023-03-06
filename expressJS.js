const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "public")))     // using a MiddleWare.

app.get('/' , (req,res) => {
    res.send ('Home Page ')
})

app.get('/hello/:name', (req,res) => {
    res.send ('Hello ' + req.params.name)
})

app.get('/about', (req,res) => {
    res.json({"Shourya":21})
})

app.get('/page', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    console.log(`Example app listning at http://localhost:${port}`)
})