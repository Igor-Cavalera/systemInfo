const CPU_USED_TEXT = document.getElementById("used-cpu");
const INNER_BAR = document.getElementById("inner-bar");
const MAIN_APP = document.getElementById("main-app");
const LOADER = document.getElementById("loading-page");
const INNER_BAR_LOADING = document.getElementById("inner-bar-loading");
const INSTALL_TXT = document.getElementById("install-text");

async function getCpuUsage () {
    const usage = await app.cpuUsage();
    const usedOverall = usage.currentLoad;

    updatePercentage(usedOverall);
}

setInterval(getCpuUsage, 2000);

function updatePercentage(percentage = 0, user, system) {
    const perText = `${percentage.toFixed(1)}%`;
    CPU_USED_TEXT.innerText = perText;
    INNER_BAR.style.width = perText;
}

app.on("install/progress", (progress) => {
    if (progress >= 100) {
        MAIN_APP.style.display = "block";
        LOADER.style.display = "none";
    } else {
        INNER_BAR_LOADING.style.width = progress + "%";
        INSTALL_TXT.innerText = "Loading " + progress.toFixed(1) + "%";
    }
})