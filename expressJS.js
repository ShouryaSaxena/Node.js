const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req,res) => {
    res.send ('Hello World!')
})

app.get('/about', (req,res) => {
    res.send('This is an about page2!')
})

app.listen(port, () => {
    console.log(`Example app listning at http://localhost:${port}`)
})