const express = require("express"); 
const app = express();
const helloRouter = require("./routes/helloRoute"); //

app.use("/", helloRouter);

app.listen(3000, () => console.log("Server Running on 3000!"));
