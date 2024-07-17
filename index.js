const systeminformation = require('systeminformation');

class SystemInfoExtension {
    getInfo() {
        return {
            id: 'systemInfo',
            name: 'System Info',
            blocks: [
                {
                    opcode: 'getCPUName',
                    blockType: 'reporter',
                    text: 'CPU Name',
                },
                {
                    opcode: 'getCPUCores',
                    blockType: 'reporter',
                    text: 'CPU Cores',
                },
                {
                    opcode: 'getTotalRAM',
                    blockType: 'reporter',
                    text: 'Total RAM',
                },
                {
                    opcode: 'getFreeRAM',
                    blockType: 'reporter',
                    text: 'Free RAM',
                },
                {
                    opcode: 'getHDSpace',
                    blockType: 'reporter',
                    text: 'HD Space',
                },
                {
                    opcode: 'getCPUSpeed',
                    blockType: 'reporter',
                    text: 'CPU Speed',
                }
            ]
        };
    }

    async getCPUName() {
        const cpu = await systeminformation.cpu();
        return cpu.brand;
    }

    async getCPUCores() {
        const cpu = await systeminformation.cpu();
        return cpu.cores;
    }

    async getTotalRAM() {
        const mem = await systeminformation.mem();
        return (mem.total / (1024 ** 3)).toFixed(2) + ' GB'; // Converte para GB
    }

    async getFreeRAM() {
        const mem = await systeminformation.mem();
        return (mem.free / (1024 ** 3)).toFixed(2) + ' GB'; // Converte para GB
    }

    async getHDSpace() {
        const disk = await systeminformation.diskLayout();
        return (disk[0].size / (1024 ** 3)).toFixed(2) + ' GB'; // Converte para GB
    }

    async getCPUSpeed() {
        const cpu = await systeminformation.cpu();
        return cpu.speed + ' GHz';
    }
}

module.exports = SystemInfoExtension;
