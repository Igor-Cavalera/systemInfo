const { app, BrowserWindow, ipcMain } = require("electron");
const os = require("os");
const path = require("path");
require("electron-reload")(__dirname);
app.whenReady().then(main);
const { currentLoad, cpu } = require("systeminformation");

let window;

async function main () {
    window = new BrowserWindow({
        transparent: true,
        icon: path.join(__dirname, "/icon.ico"),
        width: 700, 
        height: 580,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            //devTools: false,
            preload: path.join(__dirname + "/backend/preload.js")
        },
        show: false
    })   

    ipcMain.handle("cpu/get", async (_, data) => {
        
        const usage = await currentLoad();
        return usage;

    })

    //window.webContents.openDevTools();
    
    window.on("ready-to-show", window.show);
    window.loadFile(path.join(__dirname, "/app/index.html"));

    /*
        UTIL PARA VER A LARGURA DA JANELA
        window.on("resized", (e) => {
            console.log(window.getBounds())
        })
    */

}

ipcMain.on("app/close", () => {
    app.quit();
})

ipcMain.on("app/minimize", () => {
    window.minimize();
})
    