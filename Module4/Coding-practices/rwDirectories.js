// synchronous calls

const fs = require("fs");

// MKDIR
try {
  fs.mkdirSync("./test");
  console.log("Created test directory.");
} catch (e) {
  console.log("directory already exists");
}

// RM DIR
try {
  fs.rmdirSync("./testd"); // this line intentionally makes the code fail.
  console.log("Deleted test directory");
} catch (e) {
  console.log("Directory does not exist.");
}
