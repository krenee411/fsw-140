const express = require("express");
const app = express();
const mySQL = require("mysql");
const bodyParser= require('body-parser')
const cors = require('cors')

//connect to mySQL database
const db = mySQL.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
   database: 'frabic_store'
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//connect to db
// db.connect((err) =>{
//     if(err){
//         throw(err);
//     }
//     console.log('MySQL database established!')
// });

        
//         if(err){
//             throw(err)
//         }
//         res.send("Data inserted into database")  //what the browser can see
//         console.log("First Row has been inserted") // only i can see
//     })



//select query get all
app.get('/api/getposts', (req,res) => {
    let sql = "SELECT * FROM inventory";
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send(result)  //what the browser can see
        console.log(result) // only i can see
    })
})
//select query get one
app.get('/api/getposts/:id', (req,res) => {
    let sql = "SELECT * FROM inventory WHERE id= ?";
    db.query(sql, (err, result) => {
        if(err){
            throw(err)
        }
        res.send(result)  //what the browser can see
        console.log(result) // only i can see
    })
})



//inset  Row
app.post('/api/insert', (req,res) => {
    const type = req.body.type;
    const color = req.body.color;
    const amount = req.body.amount;

    let sql = "INSERT INTO inventory (type, color, amount) VALUES (?,?,?)"
    db.query(sql, [type,color,amount], (err, result) => { 
        console.log(err)
    });
});


// //delete info from database
app.delete('/api/delete/:id', (req,res) => {
    const id = req.params.id;
    let sql= 'DELETE FROM inventory WHERE id= ?'
    db.query(sql, id, (err, result) => {
        if(err){
            throw(err)
        }
        res.send("selected data has been deleted")  //what the browser can see
        console.log("Selected data has been deleted") // only i can see
    })
})

// app.put('/api/update/:id', (req,res) => {
//     const Id= req.body.id
//     const amount = req.body.amount
// let sql ="UPDATE inventory SET amount= ? WHERE id= ?"
//     db.query(sql, [Id, amount],(err, result) => {
//         if(err){
//             throw(err)
//         }else{
//             res.send(result)
//         }
//     }) 
//  })

app.put('/api/update/:id', (req,res) => {
    const amount = req.body.amount;
    const id= req.body.id
    let sql= `UPDATE inventory SET amount = '${amount}' WHERE id =${id}`
    db.query(sql, [amount, id], (err, result) => {
        if(err){
            throw(err)
        }
        res.send("selected data has been updated")  //what the browser can see
        console.log("Selected data has been updated") // only i can see
    })
})

// app.post('/api/edit', (req,res) => {
//     let sql= `UPDATE inventory SET type = '${newTitle}' WHERE id=${req.params.id}
// })

// //select query c were clause
// app.get('/getposts/:id', (req,res) => {
//     let sql = `SELECT * FROM frabic_store WHERE ${req.params.id}`;
//     db.query(sql, (err, result) => {
//         if(err){
//             throw(err)
//         }
//         res.send("Selcetion without where clause processed successfully")  //what the browser can see
//         console.log(result) // only i can see
//     })
// })

// //update database
// app.use('/updateData/:id', (req,res) => {
//     let newTitle = "100% Cotten"
//     let sql= `UPDATE inventory SET type = '${newTitle}' WHERE id=${req.params.id}`
//     db.query(sql, (err, result) => {
//         if(err){
//             throw(err)
//         }
//         res.send("selected row has been updated")  //what the browser can see
//         console.log(result) // only i can see
//     })
// })





//PORT
app.listen('9000', () =>{
    console.log("Listening on PORT 9000!")
})
