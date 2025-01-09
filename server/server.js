import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});


//Import packages
//Start or configure packages
//tell server to use JSON
//Set up port for the server by listening...
//Set up your database pool
//Create a root route

//======================================================================
//I need a route to READ data from the database
//I need a route to CREATE new data in the database 

// app.post("/new-data", async(req, res) =>{
//     const data = req.body;
//     const query = await db.query(`INSERT INTO table_name (col1, col2, col3) VALUES($1, $2, $3`, [data.input1, data.input2, data.input3]);
//     await res.json(query.rows)
// });