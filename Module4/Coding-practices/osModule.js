// OS MODULE

const os = require("os");
const totalMem = os.totalmem;
const freeMem = os.freemem;
const usedMeminBytes = totalMem - freeMem;
const usedMeminGb = usedMeminBytes / 11073741824;

console.log(`Total memory will be ${totalMem} bytes and 
used memory is ${usedMeminGb} bytes`);
