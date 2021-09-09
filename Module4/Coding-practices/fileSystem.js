// FILE SYSTEM MODULE

const fs = require("fs");

// sync call
try {
  const files = fs.readdirSync("./files");
  console.log(files);
} catch (e) {
  console.log("Directory does not exist");
}

// asynch call

fs.readdir("./temp", (e, files) => {
  if (!e) {
    console.log(files);
  } else {
    console.log("Directory is not exsiting....");
  }
});
