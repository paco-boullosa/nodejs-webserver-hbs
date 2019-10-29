const http = require('http');

http.createServer((req, resp) => {

        //ej 1: mensaje html normal
        // resp.write('Hola mundito');
        // resp.end();

        //ej 2: salida json
        let salida = {
            nombre: 'francisco',
            salario: 140000,
            url: req.url
        }
        resp.writeHead(200, { 'Content-Type': 'application/json' });
        resp.write(JSON.stringify(salida));
        resp.end();

    })
    .listen(8090);

console.log('Escuchando puerto 8090');