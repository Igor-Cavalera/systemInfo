async function getCpuUsage () {
    const usage = await app.cpuUsage();
    console.log(usage);
}

setInterval(getCpuUsage, 1000);

