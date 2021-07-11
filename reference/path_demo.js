const path = require('path')

// console.log(path.basename(__dirname))  //reference

// Base file name
console.log(path.basename(__filename)) // path_demo.js

// Directory name
console.log(path.dirname(__filename)) // /home/shapochka/webs/nodeVanilla2/reference

// File extension
console.log(path.extname(__filename)) // .js

// Create path object
console.log(path.parse(__filename)) 
// { 
//     root: '/',
//     dir: '/home/shapochka/webs/nodeVanilla2/reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
//   }
  
// Concatenate paths
console.log(path.join(__dirname), 'test', 'hello.html')
// /home/shapochka/webs/nodeVanilla2/reference test hello.html

