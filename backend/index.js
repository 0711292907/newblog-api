import express from "express";
import mysql from "mysql2";


const app= express ()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mur@ngi02",
    database: "test",
  });
  
  
app.get("/", (req, res) => {
    res.json("hello this is backend");
  })


  app.get("/posts", (req, res) => {
    const q = "SELECT * FROM posts";
    db.query(q, (err, data) => {
      if (err) {
        
        return res.json(err);
      }
      return res.json(data);
    });
  });
  

app.listen(8800, () => {
    console.log("Connected to backend.");
  });