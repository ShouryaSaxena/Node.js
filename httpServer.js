const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html')
    
    if(req.url == '/'){
        res.statusCode = 200;
        res.end(`<h1>Welcome to Node.JS Initials</h1>`);
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end(`<h1>This is Node.js</h1><p>It is used for backend development</p>`);
    }
    else {
        res.statusCode = 404;
        res.end(`<h1>Not Found</h1><p>This page is not present on this server.</p>`);
    }

})

server.listen(port, ()=> {
    console.log(`Server is listning on port ${port}`)
})