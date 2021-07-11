// const Logger = require('./logger')
// const logger = new Logger()

// logger.on('message', data => console.log('called listener', data))

// logger.log("hello")


const http = require('http')
const fs = require('fs')
const path = require('path')
const port = process.env.PORT || 5000

http.createServer((req,res)=>{
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
    //         if(err) throw err
    //         res.writeHead(200, {'Content-type':'text/html'})
    //         res.end(content)
    //     })
    // }
    // if(req.url === '/api/users'){
    //     const users =[
    //         {name:'Bob', age:20},
    //         {name:'Ali', age:30}
    //     ]
    //     res.writeHead(200,{'Content-type':'application/json'})
    //     res.end(JSON.stringify(users))
    // }

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url )

    let extname = path.extname(filePath)

    // Initial Content-type
    let contentType = 'text/html'

    // check extension and set Content-type
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
        break;
        case '.css':
            contentType = 'text/css';
        break;
        case '.json':
            contentType = 'application/json';
        break;
        case '.png':
            contentType = 'image/png';
        break;
        case '.jpg':
            contentType = 'image/jpg';
        break;
    }

    // Read File
    fs.readFile(filePath, (err,content)=>{
        if(err){
            if(err.code == 'ENOENT'){
                // Page not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content)=>{
                    res.writeHead(200, {'Content-type':'text/html'})
                    res.end(content, 'utf8')
                })
            }else{
                // Some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        }else{
            // Success
            res.writeHead(200,{'Content-type':contentType})
            res.end(content, 'utf8')
        }
       
    })


}).listen(port,()=> console.log(`listening to port ${port}`))















