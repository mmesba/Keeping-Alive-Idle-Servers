/*
 * Title: Server File
 * Description: Project server file
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mohammad-mesbaul-haque
 * Date: 15/12/2021
 */
 
// Dependencies.
const https = require('https');
 
// App object or Module scaffolding.
const app = {} 
// main functions or objects.
let myHost = 'https://random-blogging-app.herokuapp.com';
let myHost2 = 'https://boilerplate-project-exercisetracker-2.mohammadmesbaul.repl.co';

// Send request to server
 let getFunc = ()=>{ https.get(myHost2, (res)=>{
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
    getFunc()
}, 1000*60*12);
 
// export the module.
module.exports = app