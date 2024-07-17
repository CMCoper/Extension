const express = require('express');
const SystemInfoExtension = require('./extension');

const app = express();
const port = 3000;

app.use(express.json());

const extension = new SystemInfoExtension();

app.get('/info', (req, res) => {
    res.json(extension.getInfo());
});

app.get('/getCPUName', async (req, res) => {
    const data = await extension.getCPUName();
    res.send(data);
});

app.get('/getCPUCores', async (req, res) => {
    const data = await extension.getCPUCores();
    res.send(data);
});

app.get('/getTotalRAM', async (req, res) => {
    const data = await extension.getTotalRAM();
    res.send(data);
});

app.get('/getFreeRAM', async (req, res) => {
    const data = await extension.getFreeRAM();
    res.send(data);
});

app.get('/getHDSpace', async (req, res) => {
    const data = await extension.getHDSpace();
    res.send(data);
});

app.get('/getCPUSpeed', async (req, res) => {
    const data = await extension.getCPUSpeed();
    res.send(data);
});

app.listen(port, () => {
    console.log(`Extension server running at http://localhost:${port}`);
});
