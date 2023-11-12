function stopExecution() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://<ESP32_IP_ADDRESS>/stop", true);
    xhttp.send();
}


function sendData() {
    var xhttp = new XMLHttpRequest();
    var number = document.getElementById("number").value;
    xhttp.open("GET", "http://192.168.142.189/?number=" + number, true);
    xhttp.send();
}