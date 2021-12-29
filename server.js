/*
 * Title: Server File
 * Description: Project server file
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mohammad-mesbaul-haque
 * Date: 15/12/2021
 */
 
// Dependencies.
const https = require('https');
const http = require('http');
 
// App object or Module scaffolding.
const app = {} 
// main functions or objects.
let myHost = 'https://random-blogging-app.herokuapp.com';
let myHost2 = 'https://boilerplate-project-exercisetracker-2.mohammadmesbaul.repl.co';
let myHost3 = "https://typing-test-demo.herokuapp.com";

// Send request to server
 let getFunc1 = ()=>{ https.get(myHost2, (res)=>{
    console.log('statusCode', res.statusCode);
    console.log('headers', res.headers);
    
    console.log('Pinging subsequently');
    // res.on('data', (d)=>{
    //     process.stdout.write(d)
    // })
 }).on('error', (e)=>{
     console.log(e);
 })
 
}

let getFunc2 = ()=>{ https.get(myHost, (res)=>{
    console.log('statusCode', res.statusCode);
    console.log('headers', res.headers);
    
    console.log('Pinging subsequently');
    // res.on('data', (d)=>{
    //     process.stdout.write(d)
    // })
 }).on('error', (e)=>{
     console.log(e);
 })
 
}


let getFunc3 = ()=>{ https.get(myHost3, (res)=>{
    console.log('statusCode', res.statusCode);
    console.log('headers', res.headers);
    
    console.log('Pinging subsequently');
    // res.on('data', (d)=>{
    //     process.stdout.write(d)
    // })
 }).on('error', (e)=>{
     console.log(e);
 })
 
}



// Ping subsequently
setInterval(() => {
    getFunc1()
    getFunc2()
    getFunc3()
}, 1000*5);


http.createServer( (req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Pinging .....')
    
    res.end();
    console.log('listening port ...');
}).listen(3000)
 
// export the module.
module.exports = app