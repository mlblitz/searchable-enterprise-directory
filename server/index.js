const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
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

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({});
const Employee = mongoose.model("employees", EmployeeSchema);

const CredentialSchema = new Schema({});
const Credential = mongoose.model("credentials", CredentialSchema);


app.get("/home", async (req, res) => {
    const employees = await Employee.find({});

    try {
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/login", async (req, res) => {
    const credentials = await Credential.find({});

    try {
        res.send(credentials);
    } catch (error) {
        res.status(500).send(error);
    }
});

// uncomment this line if you want to generate the json data files
// genData.generateJSON();

app.listen(8081, () => { console.log("listening on port 8081") });