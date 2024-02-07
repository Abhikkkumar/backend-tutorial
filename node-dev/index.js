//'lib.js' is a module and we are importing it in our 'index.js' file
//-------> const lib = require("./lib"); //common Js module
//{
    // console.log(lib);
    // console.log(lib.add(3, 2), lib.sub(3, 2));
    // //------ ES module
    // import { add, sub } from "./lib.js";
    // console.log(add(3, 2), sub(3, 2));
//}

const fs = require("fs"); // importing file system module from node.js
// {
    // const t1 = performance.now();
    // const txt = fs.readFileSync("./demo.txt", "utf-8"); // used to read a file synchronously. //Not recommended as it block the server for reading text file.
    // console.log(txt);

    //-->to read a file we usually use async read file function in node.
    // fs.readFile("./demo.txt", "utf-8", (err, output) => {
    //   // in node callbacks, 1st arg is 'error' and 2nd arg is output
    //   console.log(output);
    // });
// }
