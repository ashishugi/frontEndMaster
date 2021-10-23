const http = require('http');
const { Server } = require('tls');

const server = http.createServer((req,res)=>{
    console.log("request made to server");
})

server.listen(3000,()=>{
    console.log("server listening @3000");
})