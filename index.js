const electron = require('electron');

const { app, BrowserWindow } = electron;

app.on('ready', () => {
  new BrowserWindow({
    titleBarStyle: 'hidden',
    height: 600,
    width: 800,
    webPreferences: { backgroundThrottling: false }
  });
});
