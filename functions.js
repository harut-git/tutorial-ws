
var socket = new WebSocket("ws://127.0.0.1:8787");
socket.onopen = function () {
};

function myFunction() {
    socket.send(JSON.stringify({"command": "listen_reader", "params": {}}));

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
	document.getElementById("addperson").style.display = "block";
	document.getElementById("person").style.display = "none";
    var entry_id = params['entry_id'];
	document.getElementById("us_id").value = entry_id;
}

function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
     return reader.result;
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}




function apply_add() {
	var files = document.getElementById("img_up");
    var file = files.files[0];
	var aaa = "";
	if (files && file) {
        var reader = new FileReader();
        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            aaa = btoa(binaryString);
            socket.send(
		JSON.stringify({
			"command": "add_employee",
			"params": {
				"img_base64": aaa,
				"entry_id": document.getElementById("us_id").value,
				"name": document.getElementById("us_name").value,
				"surname": document.getElementById("us_sname").value,
				"position": document.getElementById("us_pos").value,
				"group": document.getElementById("us_group").value,
				"start_ts": document.getElementById("us_st").value,
				"end_ts": document.getElementById("us_et").value,
				"comment": document.getElementById("us_com").value
			}
		})
	);
        };
        reader.readAsBinaryString(file);
    }
    else {
		socket.send(
		JSON.stringify({
			"command": "add_employee",
			"params": {
				"img_base64": aaa,
				"entry_id": document.getElementById("us_id").value,
				"name": document.getElementById("us_name").value,
				"surname": document.getElementById("us_sname").value,
				"position": document.getElementById("us_pos").value,
				"group": document.getElementById("us_group").value,
				"start_ts": document.getElementById("us_st").value,
				"end_ts": document.getElementById("us_et").value,
				"comment": document.getElementById("us_com").value
			}
		})
	);
	}

	document.getElementById("addperson").style.display = "none";
	document.getElementById("person").style.display = "block";

}