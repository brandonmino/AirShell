const {app, BrowserWindow, screen} = require('electron');
const path = require('path');

let createWindow = () => {
  let display = screen.getPrimaryDisplay();
  let width = 300;
  let height = 200;
  let borderWidth = display.bounds.width;
  let borderHeight = display.bounds.height;
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    x: borderWidth-300,
    y: borderHeight-200,
    resizable: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  });
  mainWindow.loadFile('./index.html');
  //mainWindow.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  //For Mac, leave open in tray
  if (process.platform !== 'darwin') 
    app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) 
    createWindow();
});