const os = require("os");
const { ipcRenderer, contextBridge} = require("electron");

const API = {
    on: (msg, cb) => ipcRenderer.on(msg, (_, data) => {
        cb(data)
    }),
    window: {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize"),
    },
    cpuUsage: (data) => ipcRenderer.invoke("cpu/get", data)
}

contextBridge.exposeInMainWorld("app", API);