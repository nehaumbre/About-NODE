import os from 'os'

console.log(`Platform`, os.platform());
console.log('Architechture', os.arch());
console.log("version", os.version());
console.log("OS type", os.type());
console.log('CPUs:', os.cpus().length);
console.log('Total Memory:', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
// console.log('Free Memory:', (os.freemem() / 1024 / 1024 / 1024).toFixed(2), 'GB');
// console.log('Uptime (seconds):', os.uptime());
// console.log('Hostname:', os.hostname());
// console.log('Temp Directory:', os.tmpdir());
// When would you use os?
// To monitor system resources in your Node app

// To customize behavior based on OS type or architecture

// To get hardware info for diagnostics or logs
// console.log(os.networkInterfaces()) // do not run