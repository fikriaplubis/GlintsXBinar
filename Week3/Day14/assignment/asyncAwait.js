const fs = require("fs");

// Make promise object
const readFile = (file, option) =>
    new Promise((success, failed) => {
        fs.readFile(file,option, (err, content) => {
            if(err) throw (err);
            return success(content);
        });
    });

// Make a async function
readAllFiles = async () => {
    try{
        let data= await Promise.all([
            readFile("./contents/content1.txt","utf-8"),
            readFile("./contents/content2.txt","utf-8"),
            readFile("./contents/content3.txt","utf-8"),
            readFile("./contents/content4.txt","utf-8"),
            readFile("./contents/content5.txt","utf-8"),
            readFile("./contents/content6.txt","utf-8"),
            readFile("./contents/content7.txt","utf-8"),
            readFile("./contents/content8.txt","utf-8"),
            readFile("./contents/content9.txt","utf-8"),
            readFile("./contents/content10.txt","utf-8"),
        ]);
        console.log(data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]);
    } catch (err) {
        console.log("what the error!");
    }
};

readAllFiles();