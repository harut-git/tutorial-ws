
var socket = new WebSocket("ws://192.168.4.145:8989");
socket.onopen = function () {
};

function myFunction() {
    socket.send("enable_reader");
	document.getElementById("addperson").style.display = "block";
	document.getElementById("person").style.display = "none";
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
	document.getElementById("us_id").value = entry_id;
}

function apply_add() {
	
	socket.send(
		JSON.stringify({
			"command": "add_employee",
			"params": {
				"img_url": "http://windx.info/logo1.png",
				"entry_id": document.getElementById("us_id").value,
				"name": document.getElementById("us_name").value,
				"surname": document.getElementById("us_sname").value,
				"position": document.getElementById("us_pos").value,
				"group": document.getElementById("us_group").value,
				"start_ts": document.getElementById("us_st").value,
				"end_ts": document.getElementById("us_et").value,
				"comment": document.getElementById("us_com").value,
			}
		})
	)
	document.getElementById("addperson").style.display = "none";
	document.getElementById("person").style.display = "block";

}