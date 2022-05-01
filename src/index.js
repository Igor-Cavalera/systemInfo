const { app, BrowserWindow } = require("electron");
const os = require("os");
const path = require("path");

app.whenReady().then(main);

let window;

async function main () {
    window = new BrowserWindow({
        width: 800, 
        height: 600,
        resizable: true,
        autoHideMenuBar: true,
        maximizable: false 
    })   


    /*
        UTIL PARA VER A LARGURA DA JANELA
        window.on("resized", (e) => {
            console.log(window.getBounds())
        })
    */
    window.loadFile(path.join(__dirname, "/index.html"));
    
}