const fs = require("fs");
function writeAsync()
{
fs.writeFile("data.pdf", "Data is written using FS module", (err) => {
  if (err) {
    console.log("Error during writing data");
  } else {
    console.log("Data is written successfully");
  }
})
}
function readAsync()
{
    fs.readFile("data.pdf", "utf-8", (err, data) => {
        if (err) {
          console.log("error while reading file :" + err);
        } else {
          return data;
        }
      })
      
}

const obj={
    writeAsync,
    readAsync
}
module.exports=obj;