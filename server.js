const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;


require('./hbs/helpers');

//middleware para servir ficheros de un directorio
app.use(express.static(__dirname + '/public'));
// al utilizar el middleware se ignora el app.get que viene despues

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //ej-1: salida html
    //res.send('Hola express');
    //ej-2: salida json
    // let salida = {
    //     nombre: 'francisco',
    //     salario: 140000,
    //     url: req.url
    // }
    // res.send(salida);

    res.render('home', {
        nombre: 'paco boullosa seoane'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/ejemplo', (req, res) => {
    res.send('Hola ejemplo');
})

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
});