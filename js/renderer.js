const { remote } = require('electron');
const http = require('http');
const port = 8080;
let server = null;
let ip;

setIP = (data) => {
    ip = data;
}

document.getElementById("exit-btn").addEventListener("click", () => {
    let window = remote.getCurrentWindow();
    if (server !== null)
        server.close();
    window.close();
});

document.getElementById("min-btn").addEventListener("click", () => {
    let window = remote.getCurrentWindow();
    window.minimize(); 
});

document.getElementById("create-btn").addEventListener("click", () => {
    server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let response = 'Connected';
        res.end(response);
      })
    server.listen(port);

    document.getElementsByClassName('create-container')[0].style.display = "none";
    document.getElementsByClassName('ip-box')[0].innerHTML = "Serving at:</br>" + ip;
    document.getElementsByClassName('ip-container')[0].style.display = "inline-block";
});






