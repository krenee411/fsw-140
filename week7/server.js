const express = require("express");
const app = express();
const mySQL = require("mysql");

//connect to mySQL database
const db = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fabric_store'
});

//connect to db
db.connect((err) =>{
    if(err){
        throw(err);
    }
    console.log('MySQL database established!')
});

//create new db in mysql
app.get('/createDB', (req,res) =>{
    let sql = "CREATE DATABASE frabic_store";
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("New Database has been created")  //what the browser can see
        console.log("New Database has been created") // only i can see
    })
})

//create table
app.get('/createTable', (req,res) => {
    let sql = "CREATE TABLE inventory (id INT AUTO_INCREMENT, type VARCHAR(50), color VARCHAR(50), amount VARCHAR(50), PRIMARY KEY(id))"
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("New Table has been created")  //what the browser can see
        console.log("Inventory table has been created") // only i can see
    })
})

//inset First Row
app.get('/insertRow1', (req,res) => {
    let post = {type: "Cotten", color: "white", amount: "1 yard"}
    let sql = "INSERT INTO inventory SET ?"
    db.query(sql, post, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("Data inserted into database")  //what the browser can see
        console.log("First Row has been inserted") // only i can see
    })
})


//insert second row
app.get('/insertRow2', (req,res) => {
    let post = {type: "Bullet Fabric", color: "blue", amount: "1/3 yard"}
    let sql = "INSERT INTO inventory SET ?"
    db.query(sql, post, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("Data inserted into database")  //what the browser can see
        console.log("Second Row has been inserted") // only i can see
    })
})

//select query
app.get('/getposts', (req,res) => {
    let sql = "SELECT * FROM frabic_store";
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("Selcetion with where clause processed successfully")  //what the browser can see
        console.log(result) // only i can see
    })
})

//select query c were clause
app.get('/getposts/:id', (req,res) => {
    let sql = `SELECT * FROM frabic_store WHERE ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("Selcetion without where clause processed successfully")  //what the browser can see
        console.log(result) // only i can see
    })
})

//update database
app.use('/updateData/:id', (req,res) => {
    let newTitle = "100% Cotten"
    let sql= `UPDATE inventory SET type = '${newTitle}' WHERE id=${req.params.id}`
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("selected row has been updated")  //what the browser can see
        console.log(result) // only i can see
    })
})

//delete info from database
app.use('/deleteData/:id', (req,res) => {
    let sql= `DELETE FROM inventory WHERE id=${req.params.id}`
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("selected data has been deleted")  //what the browser can see
        console.log("Selected data has been deleted") // only i can see
    })
})

//PORT
app.listen('9000', () =>{
    console.log("Listening on PORT 9000!")
})
