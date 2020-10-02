let socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    user: 'Víctor',
    message: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta Server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
});