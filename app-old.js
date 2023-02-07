

const http  = require('http');

http.createServer((req, res) =>{
    
    // res.writeHead(200, {'Content-Type': 'applicacion/json'})



    
    res.write('hola mundo');
    res.end();
    


} )

.listen( 5000 );

console.log('escuchando en el puerto' , 5000);