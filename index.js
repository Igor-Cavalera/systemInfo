const { app } = require("electron");
const os = require("os");

app.whenReady().then(main);

async function main () {
    const version = app.getVersion();
    const isPacked = app.isPackaged;
    const desktopPath = app.getPath("userData");
    const countryCode = app.getLocaleCountryCode();

    let isInAppFolder;
    if (os.platform() == "darwin"){
        isInAppFolder = app.isInApplicationsFolder();
        console.log(isInAppFolder);
    }
    
    app.quit();
    

}