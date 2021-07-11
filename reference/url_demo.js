const url = require('url')
// const URL = require('url').URL

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//Serialize URL
// console.log(myUrl.href)
// console.log(myUrl.toString())

//Host (root domain) 
// console.log(myUrl.host) // with port

//Hostname (does not get port)
// console.log(myUrl.hostname)

//Pathname
// console.log(myUrl.pathname)

//Serialized query
// console.log(myUrl.search)

//Params object
// console.log(myUrl.searchParams)

//Add params
// myUrl.searchParams.append('abc', '123')
// console.log(myUrl.searchParams)

//Loop through params
// myUrl.searchParams.forEach((value, name)=> console.log(`${name}: ${value}`))




