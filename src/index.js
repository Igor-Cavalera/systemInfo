const { app, BrowserWindow, ipcMain } = require("electron");
const os = require("os");
const path = require("path");
require("electron-reload")(__dirname);
app.whenReady().then(main);
const { currentLoad } = require("systeminformation");

let window;

async function main () {
    window = new BrowserWindow({
        transparent: true,
        icon: path.join(__dirname, "/icon.ico"),
        width: 400, 
        height: 360,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname + "/backend/preload.js")
        },
        show: false
    });   

    installer();
    
    window.on("ready-to-show", window.show);
    window.loadFile(path.join(__dirname, "/app/index.html"));

}

ipcMain.handle("cpu/get", async (_, data) => {
    
    const usage = await currentLoad();
    return usage;

})

ipcMain.on("app/close", () => {
    app.quit();
})

ipcMain.on("app/minimize", () => {
    window.minimize();
})
    
async function installer () {
    let percentage = 0;

    let installerInterval = setInterval(() => {
        percentage += Math.random() * 3;
        if (percentage >= 100) {
            clearInterval(installerInterval);

            window.setSize(740,600)
        }
        window.webContents.send("install/progress", percentage);
    }, 100);
}