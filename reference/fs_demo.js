const fs = require('fs')
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {} , err=>{
//     if(err) throw err
//     console.log('Folder created...')
// })


// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world! ' , err=>{
//     if(err) throw err
//     console.log(' File was created...')
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node.js', err=>{
//     if(err) throw err
//     console.log('add text to file')
//     })
// })


// Read the file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data)=>{
//     if(err) throw err
//     console.log(data)
// })


// Rename the file
// fs.rename(
//     path.join(__dirname, '/test', 'hello.txt'),
//     path.join(__dirname, '/test', 'hello_renamed.txt'),
//     (err)=>{
//     if(err) throw err
//     console.log('file renamed')
// })