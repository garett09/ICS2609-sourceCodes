// FILE SYSTEM MODULE

import { readdirSync, readdir } from "fs";

// sync call
try {
  const files = readdirSync("./files");
  console.log(files);
} catch (e) {
  console.log("Directory does not exist");
}

// asynch call

readdir("./temp", (e, files) => {
  if (!e) {
    console.log(files);
  } else {
    console.log("Directory is not exsiting....");
  }
});
