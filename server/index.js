const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const genData = require("./data/genData");
const app = express();
app.use(express.json());
app.use(cors());

const url = "mongodb://localhost:27017/enterprise";

mongoose.connect(url,
    {
        useNewUrlParser: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// const Schema = new mongoose.Schema({});
// const Film = mongoose.model("films", Schema);
// const Planet = mongoose.model("planets", Schema);


// app.get("/films", async (req, res) => {
//     const films = await Film.find({});

//     try {
//         res.send(films);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

app.get("/", async (req, res) => {
    const data = {message: "hello world!"};
    res.send(data);
})

genData.generateJSON();

// app.use(express.static("./../build"));
app.listen(8081, () => { console.log("listening on port 8081") });