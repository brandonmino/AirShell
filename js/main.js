const {app, BrowserWindow, screen, nativeImage} = require('electron');
const path = require('path');

//Function to create window
let createWindow = () => {
  let display = screen.getPrimaryDisplay();
  let width = display.bounds.width;
  let height = display.bounds.height;
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 200,
    x: width-300,
    y: height-200,
    resizable: true,
    frame: false,
    //icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('./index.html');
  //mainWindow.webContents.openDevTools()
}

//Create window when everything is loaded.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  //For Mac icons
  if (process.platform !== 'darwin') 
    app.quit();
})

//
app.on('activate', () => {
  //For Mac
  if (BrowserWindow.getAllWindows().length === 0) 
    createWindow();
})