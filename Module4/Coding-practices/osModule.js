//OS MODULE

const os = require('os');
let totalMem = os.totalmem;
let freeMem = os.freemem;
let usedMeminBytes = totalMem - freeMem;
let usedMeminGb = usedMeminBytes / 11073741824


console.log(`Total memory will be ${totalMem} bytes and used memory is ${usedMeminGb} bytes`);