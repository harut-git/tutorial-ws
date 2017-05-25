/**
 * Created by harutyun on 5/25/17.
 */
var socket = new WebSocket("ws://127.0.0.1:8282");
socket.onopen = function () {
    alert("Connection opened")
};

function myFunction() {
    socket.send("Hello");
}
socket.onmessage = function (event) {
    alert(event.data)
};

