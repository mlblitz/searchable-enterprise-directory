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

// default so server doesn't crash
app.get("/"), (req, res) => {
    res.send("");
}

// route for search, requires query params
app.get("/home", async (req, res) => {
    let field = req.query.field;
    let search = req.query.search;

    if (field === 'emp_id') {
        search = parseInt(search);
    } else {
        search = { '$regex': search, $options: 'i' };
    }

    const employees = await Employee.find({ [field]: search });

    try {
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});

// route for login, requires params
app.get("/login", async (req, res) => {
    let username = req.query.username;
    let password = req.query.password;

    const cred = await Credential.findOne({ username: username, password: password }, 'emp_id')
    // const info = await Employee.findOne({ emp_id: cred.emp_id }, 'first_name')
    // const result = {
    //     emp_id: cred.emp_id,
    //     first_name: info.first_name
    // }

    try {
        res.send(cred);
    } catch (error) {
        res.status(500).send(error);
    }
});

// uncomment this line if you want to generate the json data files
// genData.generateJSON();

app.listen(8081, () => { console.log("listening on port 8081") });