const express = require('express');
const server = express();
module.exports = keepAlive;

server.all('/', (req, res)=>{
    res.send('The bot is alive!')
})

function keepAlive(){
    server.listen(3000, ()=>{console.log("Helene is Ready!")});
}
