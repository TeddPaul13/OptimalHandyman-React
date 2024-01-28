let express = require("express");

let dbConnect = require("./dbConnect");
dbConnect.connectMysql()

const port = process.env.PORT || 8080;
const app = express();

//Check connection
app.listen(port, () => {
    console.log("Listening at port", port);
});
