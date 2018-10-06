window.onload = function () {

}
var socket = io()
socket.emit('login', { name: 'Testing' })
