/*import $ from 'jquery';
import 'jquery-extend';*/


function stopExecution() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://<ESP32_IP_ADDRESS>/stop", true);
    xhttp.send();
}


function sendData() {
    var xhttp = new XMLHttpRequest();
    var number = document.getElementById("number").value;
    var dropdown = document.getElementById("dropdown").value;
    console.log("Number of iterations: " + number);
    console.log("Dropdown value: " + dropdown);
	xhttp.open("GET", "http://192.168.0.110/?number=" + number + "&dropdown=" + encodeURIComponent(dropdown), true);
    xhttp.send();
}


function sendHomeData() {
    var xhttp = new XMLHttpRequest();
    var home = "home";
    xhttp.open("GET", "http://192.168.0.110/?home=" + home, true);
    xhttp.send();
}


/*
// Create a custom event with the function name as detail
const event = new CustomEvent("triggerFunction", { detail: "Home" });

// Add an event listener to the button element
const button = document.getElementById("button");
button.addEventListener("click", function () {
// Create a new XMLHttpRequest object
const xhttp = new XMLHttpRequest();
// Open a GET request to the ESP32 module with the endpoint
xhttp.open("GET", "http://192.168.0.110/home", true);
// Send the request
xhttp.send();
});*/

