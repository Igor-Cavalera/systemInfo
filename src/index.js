const { app, BrowserWindow } = require("electron");
const os = require("os");
const path = require("path");

app.whenReady().then(main);

let window;

async function main () {
    window = new BrowserWindow({
        icon: path.join(__dirname, "/icon.ico"),
        width: 800, 
        height: 600,
        autoHideMenuBar: true,
        show: false
    })   

    window.on("ready-to-show", window.show);


    /*
        UTIL PARA VER A LARGURA DA JANELA
        window.on("resized", (e) => {
            console.log(window.getBounds())
        })
    */
    window.loadFile(path.join(__dirname, "/index.html"));
    
}