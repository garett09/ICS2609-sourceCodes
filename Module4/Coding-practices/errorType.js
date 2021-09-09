const fs = require("fs");

fs.readFile("./file.txt", "utf8", (e, data) =>{
  if (!e) {
    console.log(data);
  } else {
    console.log( "tHE FILE DOES NOT EXIST BRO");
  }
});
