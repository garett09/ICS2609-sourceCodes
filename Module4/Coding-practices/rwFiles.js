// synch

const fs = require("fs");
const data = fs.readFileSync("./testfile.txt", "utf8");
console.log(data);
fs.writeFileSync("./fileNew.txt", data);

// asynch calls

const afs = require("fs");
afs.readFile("./anotherSample.txt", "utf-8", function(e, data) {
  if (e) {
    return console.error(e);
  } else {
    afs.writeFile("./newAnotherSample.txt", data, function(e) {
      if (e) {
        return console.error;
      } else {
        console.log("data is written to the new file.");
        console.log(`You have written "${data}"`);
      }
    });
  }
});
