const { remote } = require('electron');
const http = require('http');
const ip = require("ip").address();
const port = 8080;
let server = null;

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

document.getElementById("generate-btn").addEventListener("click", () => {
    server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let response = 'Connected';
        res.end(response);
      })
    server.listen(port);

    document.getElementsByClassName('generate-container')[0].className = 'generate-container-clicked';
    setTimeout(() => {
        document.getElementsByClassName('ip-header')[0].innerHTML = "Serving at:";
        document.getElementsByClassName('ip-info')[0].innerHTML = ip + ":" + port;
        document.getElementsByClassName('ip-container')[0].className = "ip-container-show";
    }, 1000);
    
});
