const hbs = require('hbs');

//HBS helpers
hbs.registerHelper('getAno', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('capitalizar', (texto) => {
    let arrPalabras = texto.split(' ');
    arrPalabras.forEach((palabra, i) => {
        arrPalabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return arrPalabras.join(' ');
})