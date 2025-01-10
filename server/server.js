import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

app.get("/", (req, res) =>{
    res.json({ message: "This is the root route"})
})

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
    connectionString: dbConnectionString,});

//Import packages
//Start or configure packages
//tell server to use JSON
//Set up port for the server by listening...
//Set up your database pool
//Create a root route

//======================================================================
//I need a route to READ data from the database

app.get("/staff", async (req, res) => {
    const query = await db.query(`SELECT * FROM staff`);
    await res.json(query.rows);
});


//I need a route to CREATE new data in the database 

app.post("/new-data", async(req, res) =>{
    const data = req.body;
    const query = await db.query(`INSERT INTO table_name (col1, col2, col3) VALUES($1, $2, $3)`, [data.input1, data.input2, data.input3]);
    await res.json(query.rows)
});