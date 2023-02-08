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

const Schema = new mongoose.Schema({});
const Employees = mongoose.model("employees", Schema);
const Credentials = mongoose.model("credentials", Schema);


app.get("/home", async (req, res) => {
    const employees = await Employees.find({});

    try {
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/login", async (req, res) => {
    const credentials = await Credentials.find({});

    try {
        res.send(credentials);
    } catch (error) {
        res.status(500).send(error);
    }
});

// uncomment this line if you want to generate the json data files
// genData.generateJSON();

// app.use(express.static("./../build"));
app.listen(8081, () => { console.log("listening on port 8081") });