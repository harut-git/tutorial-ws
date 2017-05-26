
var socket = new WebSocket("ws://127.0.0.1:8787");
socket.onopen = function () {
    alert("Connection opened")
};

function myFunction() {
    socket.send("enable_reader");
}
socket.onmessage = function (event) {
    var response = JSON.parse(event.data);
    var command = response['command'];
    var params = response['params'];
    window[command](params);
};

function employee_exists(params) {
    alert("exists "+ params['entry_id'])
}

function add_employee(params) {
    var entry_id = params['entry_id'];
    alert("add_employee " + entry_id)
}