var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
// Comentario
typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Cada desafio es una oportunidad para!')
    .pauseFor(2500)
    // número de caracteres que se borraran
    .deleteChars(6)
    .typeString('<strong> demostrar la extraordinaria mujer que eres!</strong>')
    .pauseFor(2500)
    .start();