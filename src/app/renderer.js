const CPU_USED_TEXT = document.getElementById("used-cpu");
const INNER_BAR = document.getElementById("inner-bar");

async function getCpuUsage () {
    const usage = await app.cpuUsage();
    const usedOverall = usage.currentLoad;

    updatePercentage(usedOverall);
}

setInterval(getCpuUsage, 2000);

function updatePercentage(percentage = 0) {
    const perText = `${percentage.toFixed(1)}%`;
    console.log(percentage);
    CPU_USED_TEXT.innerText = perText;
    INNER_BAR.style.width = perText;
}