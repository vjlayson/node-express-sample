const { urlencoded } = require("express");
const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const port = 3000;
const hostName = "localhost";
const app = express();
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "enterYourMySQLpassword!",
    port: "3306",
    database: "fruitshop"
})


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"/public")));
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});

// for inserting new records
app.post("/add", (req,res) => {
    db.query("insert into fruits(fruit_name, inventory, unit_id) values(?,?,?)",
    [req.body.fruit_name, req.body.inventory, req.body.unit_id],
    (err) => {
        if(err){
            return console.log(err.message)
        }
        console.log("new fruir has been added")
        res.redirect("/");
    }
    
    )
})


app.listen(port,hostName, (req,res) => {
    console.log("Server started")
    db.connect((err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("db connected");
        }
    })
});

