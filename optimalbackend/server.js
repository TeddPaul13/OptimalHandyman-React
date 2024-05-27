let express = require("express");


let dbConnect = require("./dbConnect");
dbConnect.connectMysql()

const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

//Set Router
const reviewRouters = require("./routes/reviewsRoute");
app.use("/api/reviews", reviewRouters)


//Check connection
app.listen(port, () => {
    console.log("Listening at port", port);
});
