const os = require("os");
const { ipcRenderer, contextBridge} = require("electron");

const API = {
    cpusUsage: (data) => ipcRenderer.invoke("cpu/get", data)
}

contextBridge.exposeInMainWorld("app", API);