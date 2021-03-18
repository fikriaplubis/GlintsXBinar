// Import fs
const fs = require("fs");
let data;

// Make promise object
const readFile = (file, options) =>
  new Promise((success, failed) => {
    fs.readFile(file, options, (err, content) => {
      if (err) throw(err);
      return success(content);
    });
  });

readFile("./contents/content1.txt", "utf-8")
  .then((content1) => {
    data = content1;
    return readFile("./contents/content2.txt", "utf-8");
  })
  .then((content2) => {
    data += content2;
    return readFile("./contents/content3.txt", "utf-8");
  })
  .then((content3) => {
    data += content3;
    return readFile("./contents/content4.txt", "utf-8");
  })
  .then((content4) => {
    data += content4;
    return readFile("./contents/content5.txt", "utf-8");
  })
  .then((content5) => {
    data += content5;
    return readFile("./contents/content6.txt", "utf-8");
  })
  .then((content6) => {
    data += content6;
    return readFile("./contents/content7.txt", "utf-8");
  })
  .then((content7) => {
    data += content7;
    return readFile("./contents/content8.txt", "utf-8");
  })
  .then((content8) => {
    data += content8;
    return readFile("./contents/content9.txt", "utf-8");
  })
  .then((content9) => {
    data += content9;
    return readFile("./contents/content10.txt", "utf-8");
  })
  .then((content10) => {
    data += content10;
    console.log(data);
  })
  .catch((error) => console.error("It's wrong!"))
