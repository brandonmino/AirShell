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

document.getElementById("generate-btn").addEventListener("click", () => {
    server = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        let response = 'Connected';
        res.end(response);
      })
    server.listen(port);

    document.getElementsByClassName('generate-container')[0].className = 'generate-container-clicked';
    document.getElementsByClassName('custom-container')[0].className = 'custom-container-clicked';
    setTimeout(() => {
        document.getElementsByClassName('ip-box')[0].className = "ip-box-show";
        document.getElementsByClassName('ip-box-show')[0].innerHTML = "Serving at:</br>" + ip + ":" + port;
        document.getElementsByClassName('ip-container')[0].className = "ip-container-show";
    }, 2000);
    
});

document.getElementById("custom-btn").addEventListener("click", () => {
    document.getElementsByClassName('generate-container')[0].className = 'generate-container-clicked';
    document.getElementsByClassName('custom-container')[0].className = 'custom-container-clicked';
});






