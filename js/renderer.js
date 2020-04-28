// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { remote } = require('electron');
const http = require('http');
const port = 8080;
var ip;

setIP = function (data) {
    ip = data;
}

document.getElementById("exit-btn").addEventListener("click", function () {
    let window = remote.getCurrentWindow();
    window.close();
});

document.getElementById("min-btn").addEventListener("click", function () {
    let window = remote.getCurrentWindow();
    window.minimize(); 
});

document.getElementById("create-btn").addEventListener("click", function () {
    const server = http.createServer(function (req, res) {
        res.write(200, {'Content-Type': 'text/html'});
        var response = 'Connected';
        res.end(response);
      })
    server.listen(port);

    document.getElementsByClassName('create-container')[0].style.display = "none";
    document.getElementsByClassName('ip-box')[0].innerHTML = "Serving at:</br>" + ip;
    document.getElementsByClassName('ip-container')[0].style.display = "inline-block";

});






