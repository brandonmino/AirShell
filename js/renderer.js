// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { remote } = require('electron')




document.getElementById("exit-btn").addEventListener("click", function () {
    let window = remote.getCurrentWindow();
    window.close();
    });

document.getElementById("min-btn").addEventListener("click", function () {
    let window = remote.getCurrentWindow();
    window.minimize(); 
    });

document.getElementById("create-btn").addEventListener("click", function () {
    let window = remote.getCurrentWindow();
    });


