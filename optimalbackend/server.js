let express = require("express");



let dbConnect = require("./dbConnect");


const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use(express.json())
app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));

dbConnect.connectMysql();

const corsOptions = {
    origin: "optimalhandyman.azurewebsites.net", //Change this to production frontend url
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

//Set Router
const reviewRouters = require("./routes/reviewsRoute");
app.use("/api/reviews", reviewRouters)


//Check connection
app.listen(port, () => {
    console.log("Listening at port", port);
});
