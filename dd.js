const path = require("path");

let packageFile = path.join(__dirname, "package.json");

let packageversion = require(`${packageFile}`).version;

if (packageversion) {
  console.log("before", packageversion);
  let packagearr = packageversion.split(".");
    let temp = +packagearr[2];
    temp = temp + 1;
    packagearr[2] = temp;
    console.log(packagearr);
  console.log("after", packagearr.join("."));
}
