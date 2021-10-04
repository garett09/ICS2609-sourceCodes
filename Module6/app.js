//connect to node app
const express = require('express');
const sql = require('mysql2');
const PORT = process.env.PORT || 3000;
const app = express();
//connect the node app with mysql server
const con = sql.createConnection({
    host: "localhost",
    port: 3306,
    user: "newuser",
    password: "password",
    database: "school"
});
con.connect((error) => {
    if (!error) {
        console.log("successfully connected to the mysql server at port 3306")
    }
});
//create a database
app.get("/create-schooldb", (req, res) => {
    let sql = "CREATE DATABASE school";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send("database was created");
        } else {
            res.send("database was not created");
        }
    });
});

//create a table
app.get("/create-student-table", (req, res) => {
    let sql = "CREATE TABLE student(id int AUTO_INCREMENT, fname varchar(50), lname varchar(50), age int, PRIMARY KEY (id))";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to create student table");
        }
    });
});

//drop a table
app.get("/delete-student-table", (req, res) => {
    let sql = "DROP TABLE student";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to delete student table");
        }
    });
});
//perform crud operations
// CREATE READ UPDATE DELETE
app.get("/insert-student", (req, res) => {
    //let sql1 = "CREATE TABLE student(id int AUTO_INCREMENT, fname varchar(50), lname varchar(50), age int, PRIMARY KEY (id))";
    let newRow = { fname: "Adrian", lname: "Sian", age: 21 }
    let sql = "INSERT INTO student SET ?";
    con.query(sql, newRow, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to insert student table");
        }
    });
});

app.get("/read-student", (req, res) => {
    let sql = "SELECT * FROM student";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to read student table");
        }
    });
});

app.get("/update-student", (req, res) => {
    let sql = "UPDATE student SET fname = 'Pogi' WHERE id=1";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to update  student table");
        }
    });
});

app.get("/delete-student", (req, res) => {
    let sql = "DELETE FROM student WHERE id=1";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to delete  student table");
        }
    });
});

//joint tables

app.get("/join-student", (req, res) => {
    let sql = "SELECT FROM student WHERE AS student.id, student.fname, student.lname, section.code, section.course"
    "INNER JOIN section" +
        "ON student.secid = section.secid";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to select student table");
        }
    });
});

//call a stored procedure

app.get("/call-student2", (req, res) => {
    let sql = "CALL DisplayStudent()";
    con.query(sql, (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            res.send("failed to call  student table");
            throw err;
        }
    });
});

//test

app.listen(PORT, () => {
    console.log("listening to port" + PORT)
})